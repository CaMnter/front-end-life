"use strict";

/**
 * Created by：CaMnter
 */

/****************
 * Promise 基本 *
 ****************/

/**
 * Promise 是异步编程的一种方案，用于替代原本的 "回调和事件" 模式
 * Promise 的概念最早由社区提出来的，后来 ES6 统一用户，原生提供了 Promise
 *
 * Promise 是一个对象，可以获取异步操作的消息。各种异步操作可以用同样的方法进行处理
 *
 * 特点：
 *
 * 1. Promise 对象的状态不受外界影响。Promise 代表一个异步操作
 * 有三种状态：Pending：进行中、Resoled：已完成、Rejected：已失败
 *
 * 2. 一旦状态改变，就不会再次变化，何时都能得到结果。
 * 状态变化只有两种可能：
 *      Pending >> Resoled
 *      Pending >> Rejected
 * 一旦变化就一直保持这个结果
 *
 *
 * Promise 可以将异步操作以同步操作的形式表达出来
 * 避免了层层嵌套的回调
 * 统一的接口，使得控制异步操作更容易
 *
 *
 * Promise 的缺点
 *
 * 1. 无法取消 Promise，创建就立即执行，无法中途取消
 * 2. 不设置回调函数的话，Promise 内部抛出错误，也不会反应到外部
 * 3. 处于 Pending 状态时，是无法知道执行到哪一阶段了
 */

/**
 * Promise 的构造方法接收一个 方法
 * 这个方法 有两个参数，这两个参数也是 方法，分别是 resolve 和 reject
 * 是由 JavaScript 引擎提供
 *
 * resolve 方法的作用：将 Promise 对象的状态从 Pending >> Resolved
 *         将异步操作成功的结果，作为参数传递
 * reject  方法的作用：将 Promise 对象的状态从 Pending >> Reject
 *         将异步操作失败的错误，作为参数传递
 */
(function () {
    var promiseA = new Promise(function (resolve, reject) {
        // 异步成功
        resolve(200);
    });
    var promiseB = new Promise(function (resolve, reject) {
        // 异步失败
        reject(400);
    });
})();

/**
 * then 方法分别指定 Resolved 状态 Reject 状态
 * 回调函数
 *
 * Reject 回调可有可无
 */
(function () {
    var promise = new Promise(function (resolve, reject) {});
    promise.then(function (value) {
        // success
    }, function (error) {
        // failure
    });

    // Reject 回调可有可无
    promise.then(function (value) {});
})();

/**
 * Promise 创建后会立即执行
 * 简单场景
 */
(function () {
    function timeout(duration) {
        return new Promise(function (resolve, reject) {
            console.log("[promise]  [test-" + 1 + "]  [then#success]");
            setTimeout(resolve, duration, 'save');
        });
    };
    timeout(1000).then(function (value) {
        console.log("[promise]  [test-" + 1 + "]  [then#success] = ", value, '\n');
    });
    console.log("[promise]  [test-" + 1 + "]  [after timeout]");
})();

/**
 * 实例：异步加载图片
 */
(function () {
    function loadImageAsync(url) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function () {
                reject(new Error('Could not load image at: ' + url));
            };
            image.src = url;
        });
    };
})();

/**
 * 实例：Ajax + Promise
 */
(function () {
    var getJSON = function getJSON(url) {
        return new Promise(function (resolve, reject) {
            function handler() {
                if (this.readyState !== 4) {
                    return;
                } else if (this.status == 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            var client = new XMLHttpRequest();
            client.open('GET', url);
            client.onreadystatechange = handler;
            client.responseType = 'json';
            client.setRequestHeader('Accept', 'application/json');
            client.send();
        });
    };
    getJSON("https://www.camnter.com").then(function (json) {
        // success
    }, function (error) {
        // failure
    });
})();

/**
 * Promise resolve 的参数可以是 Promise
 * Promise reject 的参数可以是 Promise
 */
(function () {
    var errorPromise = new Promise(function (resolve, reject) {
        // Doing something when the error
    });
    var successPromise = new Promise(function (resolve, reject) {
        // Doing something when the success
    });
    var taskPromise = new Promise(function (resolve, reject) {
        // success
        resolve(successPromise);
    });
    taskPromise.then(function (successPromise) {
        // success
    }, function (errorPromise) {
        // failure
    });
})();

/**
 * Promise 嵌套例子
 */
(function () {
    var promiseA = new Promise(function (resolve, reject) {
        setTimeout(function () {
            return reject(new Error('fail'));
        }, 2000);
    });
    var promiseB = new Promise(function (resolve, reject) {
        // resolve Promise 后，自身的状态无效了
        setTimeout(function () {
            return resolve(promiseA);
        }, 1000);
    });
    promiseB.then(function (promise) {
        // success
        console.log("[promise]  [test-" + 2 + "]  [then#success promise] = ", promise);
    }).catch(function (error) {
        console.log("[promise]  [test-" + 2 + "]  [then#catch error] = ", error);
    });
})();

//# sourceMappingURL=promise-1-compiled.js.map