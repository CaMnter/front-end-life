'use strict';

/**
 * Created by：CaMnter
 */

/******************
 * Promise.race() *
 ******************/

/**
 * Promise.race 方法也是用于将多个 Promise 实例
 * 包装成一个新的 Promise 实例
 *
 * 与 Promise.all 的区别在于：只要 Promise 数组中，有一个 Promise 最先改变状态
 * 那么 Promise.race 返回的 Promise 实例
 */

(function () {
    var arrayA = [true, false, false];
    // 依然会走 then
    Promise.race(arrayA.map(function (element) {
        return new Promise(function (resolve, reject) {
            if (element) {
                resolve('Save');
            } else {
                reject(new Error('异空间错误 404'));
            }
        });
    })).then(function (value) {
        console.log("[promise]  [test-" + 1 + "]  [promise # then # value] = ", value, '\n');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 1 + "]  [promise # catch # error] = ", error, '\n');
    });
})();

/**
 * 实例：网络请求超时
 */
(function () {

    function getResponse() {
        return new Promise(function (resolve, reject) {
            // 假如网络请求需要 2000ms 才返回
            setTimeout(function () {
                return resolve();
            }, 2000);
        });
    };

    Promise.race([getResponse(), new Promise(function (resolve, reject) {
        // 1677ms 就超时
        setTimeout(function () {
            return reject(new Error('异空间超时'));
        }, 1677);
    })]).then(function (value) {
        console.log("[promise]  [test-" + 2 + "]  [promise # then # value] = ", value, '\n');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 2 + "]  [promise # catch # error] = ", error, '\n');
    });
})();

//# sourceMappingURL=promise-5-compiled.js.map