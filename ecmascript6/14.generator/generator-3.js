/**
 * Created by：CaMnter
 */

/******************
 * Generator next *
 ******************/

require("babel-polyfill");

/**
 * yield 语句本身没有 具体返回值，一直返回 undefined
 * next 方法可以加一个参数，作为上一次 yield 的返回值
 */

/**
 * 实例：初始化遍历
 */
(() => {
    function* resetTraverse() {
        for (var i = 1; true; i++) {
            let reset = yield i;
            if (reset) {
                i = 0;
            }
        }
    }

    let generator = resetTraverse();
    for (let i = 0; i < 2; i++) {
        console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    }
    console.log("[generator]  [test-" + 1 + "]  [generator.next(true)] = ", generator.next(true));
    for (let i = 0; i < 2; i++) {
        console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    }
    console.log('');
})();

/**
 * 复杂例子
 */
(() => {
    function* func(v) {
        let x = 2 * (yield (v + 1));
        let y = yield (x / 3);
        return (v + x + y);
    }

    let generatorA = func(2);
    // 暂停到 yield (v + 1)，调用后 返回 v + 1
    // 得到 3
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());
    // 暂停到 yield (x / 3)，调用后 返回 x / 3
    // x = 2 * (yield (v + 1))，yield (v + 1) = undefined
    // x = 2 * undefined = NaN
    // x / 3 = NaN
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());
    // 暂停到 return，调用后 返回 v + x + y，return 调用后结束
    // x = 2 * (yield (v + 1))，yield (v + 1) = undefined
    // x = 2 * undefined = NaN
    // y = yield (x / 3)，yield (x / 3) = undefined
    // y = undefined
    // v + x + y = 2 + NaN + undefined = NaN
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());

    let generatorB = func(2);
    // 暂停到 yield (v + 1)，调用后 返回 v + 1
    // 得到 3
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next());
    // 暂停到 yield (x / 3)，调用后 返回 x / 3
    // x = 2 * (yield (v + 1))，yield (v + 1) = 3
    // x = 2 * 3 = 6
    // x / 3 = 2
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next(3));
    // 暂停到 return，调用后 返回 v + x + y，return 调用后结束
    // x = 2 * (yield (v + 1))，yield (v + 1) = 3
    // x = 2 * 3 = 6
    // y = yield (x / 3)，yield (x / 3) = 3
    // y = 3
    // v + x + y = 2 + 6 + 3 = 11
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next(3), '\n');
})();

/**
 * 第一次 next 的参数值是失效的
 *
 * 以上面的为例：yield (v + 1)，调用后 返回 v + 1，完全不涉及到 yield (v + 1) 的值，只关心了 yield
 * 后面的 v + 1 的值
 *
 * 如果想要第一调用 next 方法时，参数值生效
 * 需要在 Generator 包一层
 *
 * 实质上就是完成了：
 * 创建 Generator 方法 + 手动调用一次 next
 * 然后这个参数作为 创建 Generator 方法 时的初始值
 */
(() => {
    function wrapperGenerator(generatorFunction) {
        return function (...args) {
            let generator = generatorFunction(...args);
            generator.next();
            return generator;
        };
    }

    const wrapped = wrapperGenerator(function*() {
        console.log("[generator]  [test-" + 4 + "]  [yield] = ", yield);
        return "done";
    });

    let generator = wrapped();
    generator.next('Save');
    console.log("[generator]  [test-" + 4 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 向 Generator 输入值的例子
 */
(() => {
    function * generatorFunction() {
        console.log("[generator]  [test-" + 5 + "]  [start]");
        console.log("[generator]  [test-" + 5 + "]  [ 1. yield ] = ", yield);
        console.log("[generator]  [test-" + 5 + "]  [ 2. yield ] = ", yield);
        console.log("[generator]  [test-" + 5 + "]  [ 3. yield ] = ", yield);
        console.log("[generator]  [test-" + 5 + "]  [ 4. yield ] = ", yield);
    }

    let generator = generatorFunction();
    generator.next();
    let save = 'Save';
    for (let char of save) {
        generator.next(char);
    }
})();