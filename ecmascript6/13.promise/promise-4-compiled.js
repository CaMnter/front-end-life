'use strict';

/**
 * Created by：CaMnter
 */

/*****************
 * Promise.all() *
 *****************/

/**
 * Promise.all 方法用于将多个 Promise 实例
 * 包装成一个新的 Promise 实例
 */

/**
 * Promise.all 方法接收一个 数组 作为参数
 * 数组的元素都是 Promise 对象
 * 不是的话，需要先转为 Promise 对象
 */

/**
 * 只要数组内 Promise 的状态全部都为 resolve
 * Promise.all 得到的 Promise 才会是 resolve
 *
 * 只要数组内的 Promise 的其中一个状态为 reject
 * Promise.all 得到的 Promise 就会是 reject
 */

(function () {

    function getRequestById(id) {
        var BASE_URL = 'https://www.camnter.com/topic/';
        return new Promise(function (resolve, reject) {
            if (typeof id === 'number' && Number(id) > 0) {
                resolve(BASE_URL + id);
            } else {
                reject(new Error('Id is not legal'));
            }
        });
    };

    function getResponseByRequest(request) {
        return new Promise(function (resolve, reject) {
            if (null !== request && '' !== request) {
                // 假如成功了
                resolve(400);
            } else {
                reject(new Error('Request is not legal'));
            }
        });
    };

    var arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    Promise.all(arrayA.map(function (element) {
        return getRequestById(element);
    })).then(function (requestArray) {
        console.log("[promise]  [test-" + 1 + "]  [promise # then # requestArray] = ", requestArray, '\n');
        return Promise.all(requestArray.map(function (request) {
            return getResponseByRequest(request);
        }));
    }).then(function (responseCodeArray) {
        console.log("[promise]  [test-" + 1 + "]  [promise # then # requestArray] = ", responseCodeArray, '\n');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 1 + "]  [promise # catch # error] = ", error, '\n');
    });

    // 假如有一个 id 不合法
    var arrayB = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    Promise.all(arrayB.map(function (element) {
        return getRequestById(element);
    })).then(function (requestArray) {
        console.log("[promise]  [test-" + 2 + "]  [promise # then # requestArray] = ", requestArray, '\n');
        return Promise.all(requestArray.map(function (request) {
            return getResponseByRequest(request);
        }));
    }).then(function (responseCodeArray) {
        console.log("[promise]  [test-" + 2 + "]  [promise # then # requestArray] = ", responseCodeArray, '\n');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 2 + "]  [promise # catch # error] = ", error, '\n');
    });
})();

//# sourceMappingURL=promise-4-compiled.js.map