"use strict";

/**
 * Created by：CaMnter
 */

require("babel-polyfill");
var promiseTry = require("es6-promise-try");
var async = require("async");

/****************
 * Promise 应用 *
 ****************/

/**
 * 实例一：加载图片
 */

(function () {
    var preloadImagePromise = function preloadImagePromise(path) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.onload = resolve;
            image.error = reject;
            image.src = path;
        });
    };
})();

/************************
 * Generator 与 Promise *
 ************************/

/**
 * 当 Generator 遇到异步操作的时候，都会返回一个 Promise 对象
 */
(function () {
    function getSave() {
        return Promise.resolve('Save');
    };

    var generator = regeneratorRuntime.mark(function _callee() {
        var save;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return getSave();

                    case 3:
                        save = _context.sent;

                        console.log("[promise]  [test-" + 1 + "]  [generator # save] ", save, '\n');
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);

                        console.log("[promise]  [test-" + 1 + "]  [generator # e] ", _context.t0);

                    case 10:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    });

    function run(generator) {
        var iterator = generator();

        function start(result) {
            if (result.done) return result.value;

            return result.value.then(function (value) {
                // success
                return start(iterator.next(value));
            }, function (error) {
                // failure
                return start(iterator.throw(error));
            });
        }

        start(iterator.next());
    };
    run(generator);
})();

/*****************
 * Promise.try() *
 *****************/

/**
 * 一个 方法 不知道是 异步 还是 同步的
 * 就是想使用 Promise 来处理
 */

/**
 * then 有个弊端
 * 就是会在 本轮事件循环的末尾 执行
 */
(function () {
    Promise.resolve('second').then(function (value) {
        console.log("[promise]  [test-" + 2 + "]  [Promise # then # value] = ", value, '\n');
    });
    // 会在 Promise 之前
    console.log("[promise]  [test-" + 2 + "]  [console.log # value] = first");
})();

/**
 * 第一种改进办法：async 方法
 *
 * 立即执行 async 函数
 * 因此
 * 如果 方法 是同步的，就会得到同步的结果
 * 如果 方法 是异步的，就可以用 then 指定下一步
 */
(function () {
    var callback = function callback(value) {
        return console.log("[promise]  [test-" + 3 + "]  [callback] = " + value);
    };
    async.eachLimit([callback('first')]);
    console.log("[promise]  [test-" + 3 + "]  [console.log] = second");

    async.eachLimit([callback('third')]);
    Promise.resolve('fourth').then(function (value) {
        // success
        console.log("[promise]  [test-" + 3 + "]  [promise # then # value] = " + value);
    }, function (error) {
        // failure
    });
})();

/**
 * 第二种方法：函数立即执行块 + new Promise
 */
(function () {
    var callback = function callback(value) {
        return console.log("[promise]  [test-" + 4 + "]  [callback] = " + value);
    };
    (function () {
        new Promise(function (resolve, reject) {
            resolve(callback('first'));
        }).catch(function (error) {});
    })();
    console.log("[promise]  [test-" + 4 + "]  [console.log] = second");
})();

/**
 * 用到 Promise 的时候，Promise 执行中如果抛出异常：
 * 异常是同步异常：还得 try { Promise... }
 * 异常时异步异常：还得 Promise...catch...
 *
 * 为了统一，可以用到 Promise.try
 */
(function () {
    var callback = function callback(value) {
        return console.log("[promise]  [test-" + 5 + "]  [callback] = " + value);
    };
    promiseTry(function () {
        return callback('first');
    }).then(function (value) {
        // success
    }).catch(function (error) {});
})();

//# sourceMappingURL=promise-9-compiled.js.map