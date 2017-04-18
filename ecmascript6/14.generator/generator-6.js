/**
 * Created by：CaMnter
 */

/******************************
 * Generator.prototype.return *
 ******************************/

require("babel-polyfill");

/**
 * Generator 方法返回的 Iterator 对象，还有一个 return 方法
 * 可以返回给定的值
 */
(() => {
    function* generatorFunction() {
        yield '22';
        yield '33';
        yield '2233';
    };
    var generator = generatorFunction();

    // 提供参数 return
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.return('return')] = ", generator.return('return'));
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next(), '\n');

    // 不提供参数
    generator = generatorFunction();
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.return()] = ", generator.return());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 有 finally 代码块的话，return 会推迟到 finally
 * 代码块执行完之后才执行
 */
(() => {
    function* generatorFunction() {
        yield 1;
        try {
            yield 2;
            yield 3;
            yield 4;
        } finally {
            yield 5;
            yield 6;
            yield 7;
        }
        yield 8;
    };
    let generator = generatorFunction();
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.return(2233)] = ", generator.return(2233));
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    // 一定要等到 finally 执行完，才会执行 return
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
})();