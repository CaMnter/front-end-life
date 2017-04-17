/**
 * Created by：CaMnter
 */

/*****************************
 * Generator.prototype.throw *
 *****************************/

/**
 * Generator 函数返回的遍历器对象，都有一个 throw 方法
 * 可以在函数体外抛出错误，然后在 Generator 函数体内捕获
 */
(() => {
    let generatorFunction = function*() {
        try {
            yield;
        } catch (e) {
            console.log("[generator]  [test-" + 1 + "]  [内部捕获] = ", e);
        }
    };
    let generator = generatorFunction();
    generator.next();

    try {
        generator.throw('save');
        generator.throw('you');
    } catch (e) {
        console.log("[generator]  [test-" + 1 + "]  [外部捕获] = ", e, '\n');
    }
})();

/**
 * Generator.throw 可以接受参数
 * 还会被 Generator catch 语句接收
 * 建议抛 Error 对象
 */
(() => {
    let generatorFunction = function*() {
        try {
            yield;
        } catch (e) {
            console.log("[generator]  [test-" + 2 + "]  [内部捕获] = ", e, '\n');
        }
    };
    let generator = generatorFunction();
    generator.next();
    generator.throw(new Error('异空间错误：2233'));
})();

/**
 * throw 方法被捕获后，会附带执行下一条 yield 语句
 */
(() => {
    let generatorFunction = function*() {
        try {
            yield 22;
        } catch (e) {
            // Nothing to do
        }
        yield 33;
    }
    let generator = generatorFunction();
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    // 已经执行到第二个 yield
    console.log("[generator]  [test-" + 3 + "]  [generator.throw()] = ", generator.throw());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 如果 Generator 内部出现异常没捕获的话，就不会执行下去了
 * 下次 next 的 value = undefined，done = true
 */
(() => {
    function* generatorFunction() {
        // 停
        yield 'save';
        // 这里不会停
        console.log("[generator]  [test-" + 4 + "]  [generator console]");
        // 停
        throw new Error('');
        yield 22;
        yield 33;
    };
    function log(generator) {
        var v;
        try {
            v = generator.next();
            console.log("[generator]  [test-" + 4 + "]  [第一次 next]", v);
        } catch (e) {
            console.log("[generator]  [test-" + 4 + "]  [第一次 next - 捕捉错误]", e);
        }
        try {
            v = generator.next();
            console.log("[generator]  [test-" + 4 + "]  [第二次 next]", v);
        } catch (e) {
            console.log("[generator]  [test-" + 4 + "]  [第二次 next - 捕捉错误]", e);
        }
        // 后续都不执行了
        console.log("[generator]  [test-" + 4 + "]  [第三次 next]", generator.next());
        console.log("[generator]  [test-" + 4 + "]  [第四次 next]", generator.next());
        console.log("[generator]  [test-" + 4 + "]  [第四次 next]", generator.next());
    }

    log(generatorFunction());
})();