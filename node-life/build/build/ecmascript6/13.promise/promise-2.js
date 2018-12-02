/**
 * Created by：CaMnter
 */

/**************************
 * Promise.prototype.then *
 **************************/


/**
 * Promise 的 then 方法定义在 原型对象 Promise.prototype 上的
 * 它的作用是：为 Promise 实例添加状态改变时的回调方法
 *
 * 第一个参数是 Resolved 状态的回调方法
 * 第二个参数是 Rejected 状态的回调方法
 */

/**
 * then 进行数据转换
 */
(() => {
    new Promise((resolve, reject) => {
        resolve(67);
    }).then(value => {
        return 'Save you from anything ' + value;
    }).then(string => {
        console.log("[promise]  [test-" + 1 + "]  [string] = ", string, '\n');
    });
})();

/**
 * 多个 then 返回 Promise
 *
 * 如果 then 返回了 Promise
 * 这个 then 后面的 then 都会等待这个 Promise的状态发生变化后，才会调用
 */
(() => {
    new Promise((resolve, reject) => {
        resolve(true);
    }).then(call => {
        if (!call)return null;
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('异空间错误 404 ')), 677);
        });
    }).then(value => {
        // success
        console.log("[promise]  [test-" + 2 + "]  [value] = ", value, '\n');
    }, error => {
        // failure
        console.log("[promise]  [test-" + 2 + "]  [failure] = ", error, '\n');
    });
})();
