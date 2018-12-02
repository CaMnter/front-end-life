/**
 * Created by：CaMnter
 */

/*********************
 * Generator for..of *
 *********************/

require("babel-polyfill");

/**
 * Generator 是一个生成 Iterator 的方法
 * 然而 for...of 就需要 Iterator
 */
(() => {
    function* generator() {
        yield 'Save';
        yield 'you';
        yield 'from';
        yield 'anything';
    }

    for (let value of generator()) {
        console.log("[generator]  [test-" + 1 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * 斐波那契算法
 */
(() => {
    function* fibonacci() {
        let [previous, current] = [0, 1];
        for (; ;) {
            [previous, current] = [current, previous + current];
            yield current;
        }
    }

    for (let total of fibonacci()) {
        if (total > 1000) {
            console.log('');
            break;
        }
        console.log("[generator]  [test-" + 2 + "]  [total] = ", total);
    }
})();

/**
 * 遍历对象：第一种写法
 */
(() => {
    let target = {
        save: 'save',
        you: 'you',
        from: 'from',
        anything: 'anything'
    };
    target[Symbol.iterator] = function*() {
        const SYMBOL_TYPE = 'symbol';
        let _this = target;
        let handler = {
            ownKeys(target){
                // 过滤掉 Symbol.???
                return Reflect.ownKeys(target).filter(key => typeof key !== SYMBOL_TYPE);
            }
        }
        let proxy = new Proxy(_this, handler);
        for (let key of  Object.keys(proxy)) {
            yield [key, target[key]];
        }
    }
    for (let [key, value] of target) {
        console.log("[generator]  [test-" + 3 + "]  [key, value] = [", key, ", ", value, "]");
    }
    console.log('');
})();

/**
 * 遍历对象：第二种写法
 */
(() => {
    let target = {
        save: 'save',
        you: 'you',
        from: 'from',
        anything: 'anything'
    };

    function* generatorFunction(target) {
        const SYMBOL_TYPE = 'symbol';
        let _this = target;
        let handler = {
            ownKeys(target){
                // 过滤掉 Symbol.???
                return Reflect.ownKeys(target).filter(key => typeof key !== SYMBOL_TYPE);
            }
        }
        let proxy = new Proxy(_this, handler);
        for (let key of  Object.keys(proxy)) {
            yield [key, target[key]];
        }
    }

    for (let [key, value] of generatorFunction(target)) {
        console.log("[generator]  [test-" + 4 + "]  [key, value] = [", key, ", ", value, "]");
    }
    console.log('');
})();

/**
 * 一些运算符
 */
(() => {
    function* saveGenerator() {
        yield 'save'
        yield 'you'
        yield 'from'
        yield 'anything'
        return
        yield 2233
    }

    console.log("[generator]  [test-" + 5 + "]  [...saveGenerator()] = ", [...saveGenerator()]);
    console.log("[generator]  [test-" + 5 + "]  [Array.from(saveGenerator())] = ", Array.from(saveGenerator()));
    let [s, y, f, a] = saveGenerator();
    console.log("[generator]  [test-" + 5 + "]  [s] = ", s);
    console.log("[generator]  [test-" + 5 + "]  [y] = ", y);
    console.log("[generator]  [test-" + 5 + "]  [f] = ", f);
    console.log("[generator]  [test-" + 5 + "]  [a] = ", a);
})();