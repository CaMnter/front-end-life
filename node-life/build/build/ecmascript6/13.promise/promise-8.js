/**
 * Created by：CaMnter
 */

/***************************
 * Promise 扩展方法 - done *
 **************************/

/**
 * Promise 的结尾 then 或者 catch，如果继续抛出异常的话
 * 是不会被捕获到的
 * 因为 Promise 的异常不会抛出到外部
 *
 * 需要一个方法在回调链的尾端，保证抛出任何可能出现的错误
 * 利用 setTimeout 抛出一个全局错误
 */

/**
 * done 源码
 */
Promise.prototype.done = function (resolve, reject) {
    return this
        .then(resolve, reject)
        .catch(error => {
            setTimeout(() => {
                throw error;
            }, 0);
        });
};

/**
 * done 使用
 */
(() => {
    Promise
        .resolve('Save')
        .then(value => {
            return value + " you from anything";
        })
        .then(value => {
            throw new Error('[promise]  [test-" + 1 + "]  异空间错误 404');
        })
        .done();
})();


/******************************
 * Promise 扩展方法 - finally *
 *****************************/

/**
 * 不管是 resolve
 * 还是 reject
 * 都会执行的方法
 */

/**
 * 原理是拿到 Promise
 * 添加一次 then
 * resolve 的 时候 resolve + then
 * reject 的 时候 resolve + then
 *
 * 强行 resolve + then
 */

/**
 * finally 源码
 */
Promise.prototype.finally = function (callback) {
    let constructor = this.constructor;
    return this.then(value => {
        // success
        constructor.resolve(callback()).then(() => value);
    }, error => {
        // failure
        constructor.resolve(callback()).then(() => {
            throw error
        });
    })
};


(() => {
    Promise
        .resolve('Save')
        .then(value => {
            return value + " you from anything";
        })
        .then(value => {
            throw new Error('[promise]  [test-" + 1 + "]  异空间错误 404');
        })
        .done()
        .finally(() => {
            console.log("[promise]  [test-" + 2 + "]  [promise # finally]", '\n');
        });
})();