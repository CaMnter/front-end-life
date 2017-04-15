/**
 * Created by：CaMnter
 */


/*************************
 * Generator 与 Iterator *
 *************************/

/**
 * Symbol.iterator 方法，必须是一个生成 Iterator 的方法
 * Generator 函数就是 Iterator 生成函数
 * 所以 可以作为 Symbol.iterator 的 方法
 */

(() => {
    let target = {};
    target[Symbol.iterator] = function*() {
        yield 'save';
        yield 'you';
        yield 'from';
        yield 'anything'
    };
    for (let value of target) {
        console.log("[generator]  [test-" + 1 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * 值得一提的是
 * Generator 执行后，返回一个 Iterator 对象
 * 这个 Iterator 对象也有 Symbol.iterator 属性
 * 执行这个 Symbol.iterator 属性上的方法后，得到自己
 */
(() => {
    let generator = function*() {
    }
    let iterator = generator();
    console.log("[generator]  [test-" + 2 + "]  [iterator[Symbol.iterator] === iterator] = ", iterator[Symbol.iterator]() === iterator);
})();