/**
 * Created by：CaMnter
 */

/*********************
 * Promise.reject() *
 *********************/

/**
 * Promise.reject 可以 将现有的对象，转换为 rejected 状态的 Promise 对象
 */

(() => {
    const ERROR_MSG = '异空间错误 404';
    Promise
        .reject(ERROR_MSG)
        .catch(error => {
            console.log("[promise]  [test-" + 1 + "]  [promise # catch # error] = ", error);
        });

    // 等价于

    new Promise((resolve, reject) => {
        reject(ERROR_MSG);
    }).catch(error => {
        console.log("[promise]  [test-" + 1 + "]  [promise # catch # error] = ", error, '\n');
    });
})();


/**
 * Promise.reject 的参数是一个 thenable 对象
 * 那么在 catch 方法中捕获的就是 thenable 对象，不是 reject 传下来的数据
 */
(() => {
    const ERROR_MSG = '异空间错误 404';
    const thenable = {
        then(resolve, reject) {
            reject(ERROR_MSG);
        }
    };

    Promise
        .reject(thenable)
        .catch(error => {
            console.log("[promise]  [test-" + 2 + "]  [promise # catch # error === thenable] = ", error === thenable, '\n');
        });
})();