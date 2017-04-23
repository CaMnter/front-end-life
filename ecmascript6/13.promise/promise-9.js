/**
 * Created by：CaMnter
 */

require("babel-polyfill");
let promiseTry = require("es6-promise-try");
let async = require("async");

/****************
 * Promise 应用 *
 ****************/

/**
 * 实例一：加载图片
 */

(() => {
    const preloadImagePromise = function (path) {
        return new Promise((resolve, reject) => {
            let image = new Image();
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
(() => {
    function getSave() {
        return Promise.resolve('Save');
    };

    let generator = function*() {
        try {
            let save = yield getSave();
            console.log("[promise]  [test-" + 1 + "]  [generator # save] ", save, '\n');
        } catch (e) {
            console.log("[promise]  [test-" + 1 + "]  [generator # e] ", e);
        }
    };

    function run(generator) {
        let iterator = generator();

        function start(result) {
            if (result.done)return result.value;

            return result.value.then(value => {
                // success
                return start(iterator.next(value))
            }, error => {
                // failure
                return start(iterator.throw(error));
            })
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
(() => {
    Promise
        .resolve('second')
        .then(value => {
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
(() => {
    const callback = (value) => console.log("[promise]  [test-" + 3 + "]  [callback] = " + value);
    async.eachLimit(
        [callback('first')]
    );
    console.log("[promise]  [test-" + 3 + "]  [console.log] = second");

    async.eachLimit(
        [callback('third')]
    );
    Promise
        .resolve('fourth')
        .then(value => {
            // success
            console.log("[promise]  [test-" + 3 + "]  [promise # then # value] = " + value);
        }, error => {
            // failure
        });
})();

/**
 * 第二种方法：函数立即执行块 + new Promise
 */
(() => {
    const callback = (value) => console.log("[promise]  [test-" + 4 + "]  [callback] = " + value);
    (() => {
        new Promise((resolve, reject) => {
            resolve(callback('first'));
        }).catch(error => {
        });
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
(() => {
    const callback = (value) => console.log("[promise]  [test-" + 5 + "]  [callback] = " + value);
    promiseTry(function() {
        return callback('first');
    }).then(value => {
        // success
    }).catch(error => {

    });
})();


