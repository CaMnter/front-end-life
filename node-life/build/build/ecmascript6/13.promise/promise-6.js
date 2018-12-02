/**
 * Created by：CaMnter
 */

/*********************
 * Promise.resolve() *
 *********************/

/**
 * Promise.resolve 可以 将现有的对象，转换为 Promise 对象
 */

/**
 * Promise.resolve 也是一个简版的 Promise
 *
 * Promise 实例，那么 Promise.resolve 将不做任何修改、原封不动地返回这个实例
 */
(() => {
    const SAVE = 'save';

    Promise
        .resolve(SAVE)
        .then(value => {
            console.log("[promise]  [test-" + 1 + "]  [promise # then # value] = ", value, '\n');
        });

    // 等价于

    new Promise((resolve, reject) => {
        resolve();
    }).then(value => {

    });
})();

/**
 * Promise.resolve 的参数是一个 thenable 对象
 * thenable 对象指的是具有 then 方法的对象
 *
 * Promise.resolve 方法会将 thenable 对象转为 Promise 对象
 * 然后就立即执行 thenable 对象的 then 方法
 */
(() => {
    const SAVE = 'save';
    let thenable = {
        then(resolve, reject) {
            resolve(SAVE);
        }
    };
    Promise
        .resolve(thenable)
        .then(value => {
            console.log("[promise]  [test-" + 2 + "]  [promise # then # value] = ", value, '\n');
        });
})();

/**
 * 参数不是具有 then 方法的对象
 *
 * Promise.resolve 方法会返回一个新的 Promise 对象，状态设置为 resolved
 */
(() => {
    Promise
        .resolve('save')
        .then(value => {
            console.log("[promise]  [test-" + 3 + "]  [promise # then # value] = ", value, '\n');
        })
})();

/**
 * resolve 的 Promise 对象
 * 是在本轮 "事件循环"（event loop）的结束时
 * 而不是在下一轮 "事件循环" 的开始时
 */
(() => {
    // setTimeout(fn, 0) 在 下一轮 "事件循环" 开始时执行
    setTimeout(function () {
        console.log("[promise]  [test-" + 4 + "]  [promise # setTimeout] = three", '\n');
    }, 0);

    // Promise.resolve() 在本轮 "事件循环" 结束时执行
    Promise
        .resolve()
        .then(() => {
            console.log("[promise]  [test-" + 4 + "]  [promise # then ] = two", '\n');
        }).catch(error => {

    });
    // console 立即执行，最先输出
    console.log("[promise]  [test-" + 4 + "]  [console.log] = one", '\n');
})();
