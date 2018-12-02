/**
 * Created by：CaMnter
 */

/*******************
 * yield* 语句 - A *
 ******************/

require("babel-polyfill");

/**
 * Generator 方法内部，直接调用 Generator 是没效果的
 */
(() => {
    function* generatorFunction() {
        yield 'save';
        yield 'you';
        generatorFunction();
    };
    for (let value of generatorFunction()) {
        console.log("[generator]  [test-" + 1 + "]  [value] = ", value);
    }
    console.log('');
})();


/**
 * yield*
 */
(() => {
    function* otherGeneratorFunction() {
        yield 'from';
        yield 'anything';
    };
    function* generatorFunctionA() {
        yield 'save';
        yield 'you';
        yield* otherGeneratorFunction();
    };
    for (let value of generatorFunctionA()) {
        console.log("[generator]  [test-" + 2 + "]  [value] = ", value);
    }
    console.log('');

    // 等同于

    function* generatorFunctionB() {
        yield 'save';
        yield 'you';
        for (let value of otherGeneratorFunction()) {
            yield value;
        }
    };
    for (let value of generatorFunctionB()) {
        console.log("[generator]  [test-" + 3 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * yield Generator 与 yield* Generator
 */
(() => {
    function* otherGeneratorFunction() {
        yield 2233;
    };
    /**
     * yield Generator
     */
    function* generatorFunctionA() {
        yield 'save';
        yield 'you';
        yield otherGeneratorFunction();
    };
    /**
     * yield* Generator
     */
    function* generatorFunctionB() {
        yield 'save';
        yield 'you';
        yield* otherGeneratorFunction();
    };

    let generatorA = generatorFunctionA();
    let generatorB = generatorFunctionB();

    console.log("[generator]  [test-" + 4 + "]  [generatorA.next().value] = ", generatorA.next().value);
    console.log("[generator]  [test-" + 4 + "]  [generatorA.next().value] = ", generatorA.next().value);
    // 返回一个 Iterator 对象
    console.log("[generator]  [test-" + 4 + "]  [generatorA.next().value] = ", generatorA.next().value);

    console.log("[generator]  [test-" + 4 + "]  [generatorB.next().value] = ", generatorB.next().value);
    console.log("[generator]  [test-" + 4 + "]  [generatorB.next().value] = ", generatorB.next().value);
    console.log("[generator]  [test-" + 4 + "]  [generatorB.next().value] = ", generatorB.next().value);
})();

/**
 * yield* Generator 等同于 for...of Generator
 */
(() => {
    function* concatA(previousGenerator, afterGenerator) {
        yield previousGenerator;
        yield afterGenerator;
    };
    // 等同于
    function* concatB(previousGenerator, afterGenerator) {
        for (let value of previousGenerator) {
            yield value;
        }
        for (let value of afterGenerator) {
            yield value;
        }
    };
})();