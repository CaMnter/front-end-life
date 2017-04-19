/**
 * Created by：CaMnter
 */

require("babel-polyfill");

/*************************
 * 对象属性上的 Generator *
 *************************/

(() => {
    let target = {
        * generatorA(){
            yield 22;
        },
        generatorB: function*() {
            yield 33;
        }
    };
    console.log("[generator]  [test-" + 1 + "]  [target.generatorA().next()] = ", target.generatorA().next());
    console.log("[generator]  [test-" + 1 + "]  [target.generatorB().next()] = ", target.generatorB().next(), '\n');
})();

/*********************
 * Generator 的 this *
 *********************/

/**
 * ES6 规定 Generator 返回的 Iterator 是 Generator 的实例
 * 也继承了 Generator 方法的 prototype 对象上的方法
 */

(() => {
    function* generatorFunction() {
    };
    generatorFunction.prototype.save = function () {
        return 'save';
    };
    let generator = generatorFunction();
    console.log("[generator]  [test-" + 2 + "]  [generator instanceof generatorFunction] = ", generator instanceof generatorFunction);
    console.log("[generator]  [test-" + 2 + "]  [generator.save()] = ", generator.save(), '\n');
})();

/**
 * Generator 作为普通构造函数，this 不会在 Iterator 中生效
 */
(() => {
    function* generatorFunction() {
        this.save = 'save';
    };
    let generator = generatorFunction();
    console.log("[generator]  [test-" + 3 + "]  [generator instanceof generatorFunction] = ", generator instanceof generatorFunction);
    console.log("[generator]  [test-" + 3 + "]  [generator.save] = ", generator.save, '\n');
})();

/**
 * 实例：
 * Generator 作为一个对象，又可以 next，又可以获得正常 this
 * 但是：对象不统一
 */
(() => {
    function* generatorFunction() {
        this.save = 'save';
        yield this.you = 'you';
    };
    let target = {};
    // this = target
    let generator = generatorFunction.call(target);
    console.log("[generator]  [test-" + 4 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 4 + "]  [generator.next()] = ", generator.next());
    // this 代码，都保存在 target 上了
    console.log("[generator]  [test-" + 4 + "]  [target] = ", target);
    console.log("[generator]  [test-" + 4 + "]  [target.save] = ", target.save);
    console.log("[generator]  [test-" + 4 + "]  [target.you] = ", target.you, '\n');
})();

/**
 * 实例：
 * Generator 作为一个对象，又可以 next，又可以获得正常 this
 * 但是：对象统一
 */
(() => {
    function* generatorFunction() {
        this.save = 'save';
        yield this.you = 'you';
    };
    // 传入 自身的 prototype
    let generator = generatorFunction.call(generatorFunction.prototype);
    console.log("[generator]  [test-" + 5 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 5 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 5 + "]  [generator] = ", generator);
    console.log("[generator]  [test-" + 5 + "]  [generator.save] = ", generator.save);
    console.log("[generator]  [test-" + 5 + "]  [generator.you] = ", generator.you, '\n');
})();

/********************
 * Generator 状态机 *
 *******************/

/**
 * 普通 状态机
 */
(() => {
    let ticking = true;
    const TICK = 'Tick', TOCK = 'Tock';
    let clock = function () {
        console.log("[generator]  [test-" + 6 + "]  [clock] = ", ticking ? TICK : TOCK);
        ticking = !ticking;
    };
    for (let i = 0; i < 3; i++) {
        clock();
    }
    console.log('');
})();

/**
 * Generator 状态机
 */
(() => {
    const TICK = 'Tick', TOCK = 'Tock';

    function* clockGenerator() {
        while (true) {
            console.log("[generator]  [test-" + 7 + "]  [clock] = ", TICK);
            yield;
            console.log("[generator]  [test-" + 7 + "]  [clock] = ", TOCK);
            yield;
        }
    };
    let clock = clockGenerator();
    for (let i = 0; i < 3; i++) {
        clock.next();
    }
})();