"use strict";

/**
 * Created by：CaMnter
 */

/***************************
 * Promise.prototype.catch *
 ***************************/

/**
 * 实质上：
 * Promise.prototype.catch == .then(null, rejection)
 *
 * 用于指定发生错误时的回调
 */
(function () {
    new Promise(function (resolve, reject) {
        reject(new Error('异空间错误 404'));
    }).then(function (value) {
        // success
    }).then(null, function (error) {
        // failure
        console.log("[promise]  [test-" + 1 + "]  [promise # then # error] = ", error);
    });

    // 等同于

    new Promise(function (resolve, reject) {
        reject(new Error('异空间错误 404'));
    }).then(function (value) {}).catch(function (error) {
        console.log("[promise]  [test-" + 1 + "]  [promise # catch] = ", error, '\n');
    });
})();

/**
 * reject 等同于 抛出错误
 */
(function () {
    new Promise(function (resolve, reject) {
        reject(new Error('异空间错误 404'));
    }).catch(function (error) {
        console.log("[promise]  [test-" + 2 + "]  [promise # catch] = ", error);
    });

    // 等同于

    new Promise(function (resolve, reject) {
        try {
            throw new Error(new Error('异空间错误 404'));
        } catch (e) {
            reject(e);
        }
    }).catch(function (error) {
        console.log("[promise]  [test-" + 2 + "]  [promise # catch] = ", error);
    });
})();

/**
 * 如果状态 已经为 resolved
 * 再次 抛出错误 是无效的`
 */
(function () {
    new Promise(function (resolve, reject) {
        resolve('save');
        throw new Error('异空间错误 404');
    }).then(function (value) {
        console.log("[promise]  [test-" + 3 + "]  [promise # then # success] = ", value, '\n');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 3 + "]  [promise # catch] = ", error);
    });
})();

/**
 * Promise 对象的错误具有 "冒泡" 性质
 * 全部 then 的错误，都由下个 catch 处理
 * 会一直传递下去
 */
(function () {
    new Promise(function (resolve, reject) {
        resolve('save');
    }).then(function (value) {
        // success
    }).then(function (value) {
        // success
        throw new Error('异空间错误 404');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 4 + "]  [promise # catch] = ", error, '\n');
    });
})();

/**
 * 一般 then 方法只使用 第一个参数（ 成功回调 ）
 * 第二个参数（ 错误回调 ） 不写
 *
 * 使用 catch 代替
 *
 * 因为：使用 catch 可以捕获之前所有 then 产生的错误
 */
(function () {
    // bad
    new Promise(function (resolve, reject) {}).then(function (value) {
        // success
    }, function (error) {
        // failure
    });

    // good
    new Promise(function (resolve, reject) {}).then(function (value) {}).catch(function (error) {});
})();

/**
 * Promise 体内 和 体外 抛错
 *
 * Promise 体内抛出的话，不 catch ，也不会抛到外部
 */
(function () {
    // 体内抛错，不进行 Promise catch
    new Promise(function (resolve, reject) {
        throw new Error('异空间错误 404');
    });

    // 体外抛错
    // 由于 Promise 是立即执行的
    // 所以，延时 677 后的抛错，Promise 已经执行完了，属于体外抛错
    new Promise(function (resolve, reject) {
        resolve('save');
        setTimeout(function () {
            try {
                throw new Error('异空间错误 404');
            } catch (e) {
                console.log("[promise]  [test-" + 5 + "]  [try # catch] = ", e, '\n');
            }
        }, 677);
    });
})();

/**
 * catch 方法执行完后，会返回 Promise 对象
 * 还是可以 继续 then
 */
(function () {
    new Promise(function (resolve, reject) {
        reject(new Error('异空间错误 404'));
    }).catch(function (error) {
        console.log("[promise]  [test-" + 6 + "]  [promise # catch] = ", error);
    }).then(function () {
        console.log("[promise]  [test-" + 6 + "]  [promise # then]");
    });
})();

/**
 * Promise 是有序的
 */
(function () {
    // resolve 会跳过 catch，到 then
    // then 再次抛错不会回到上一个 catch
    // 会被下个 catch 捕获
    new Promise(function (resolve, reject) {
        resolve('save');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 7 + "]  [promise # first # catch] = ", error);
    }).then(function (value) {
        console.log("[promise]  [test-" + 7 + "]  [promise # then # value] = ", value);
        throw new Error('异空间错误 404');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 7 + "]  [promise # second # catch] = ", error);
    });
})();

/**
 * catch 中继续抛错
 */
(function () {
    // 400 被 catch 了
    // 但是 401 后面没有 catch 了
    // 401 就没被捕获，也不会传递到外部
    new Promise(function (resolve, reject) {
        reject(new Error('异空间错误 400'));
    }).catch(function (error) {
        console.log("[promise]  [test-" + 8 + "]  [promise # first # catch] = ", error, '\n');
        throw new Error('异空间错误 401');
    }).then(function () {
        console.log("[promise]  [test-" + 8 + "]  [promise # then]");
    });

    // 后面接个 catch 继续捕获 401
    new Promise(function (resolve, reject) {
        reject(new Error('异空间错误 400'));
    }).catch(function (error) {
        console.log("[promise]  [test-" + 9 + "]  [promise # first # catch] = ", error, '\n');
        throw new Error('异空间错误 401');
    }).catch(function (error) {
        console.log("[promise]  [test-" + 9 + "]  [promise # second # catch] = ", error, '\n');
    });
})();

//# sourceMappingURL=promise-3-compiled.js.map