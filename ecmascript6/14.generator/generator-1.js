/**
 * Created by：CaMnter
 */

/**********************
 * Generator 函数基本 *
 *********************/

/**
 * Generator 函数是 ES6 提供的一种异步编程解决方案
 *
 * Generator 函数是一个状态机，封装了多个内部状态
 * 执行 Generator 函数会返回一个遍历器对象，Generator 函数除了状态机，还是一个遍历器对象生成函数
 * 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态
 */

/**
 * Generator 函数是一个普通函数，但是有两个 特征：
 * function 关键字 与 函数名 之间有 * 号
 * yield 语句，定义不同的内部状态
 */

(() => {
    function* saveGenerator() {
        yield 'save';
        yield 'you';
        yield 'from';
        return 'anything'
    };

    // 调用方法生成 Iterator 对象
    var save = saveGenerator();
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next());
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next());
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next());
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next(), '\n');

    /*
     * 是 Iterator 就能用 for...of
     * return 不返回值
     */
    save = saveGenerator();
    for (let value of save) {
        console.log("[generator]  [test-" + 2 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * Generator 的 星号 可以随便写在 function 和 方法名之间
 */
(() => {
    function* A() {
    }

    function * B() {
    }

    function *C() {
    }

    function*D() {

    }
})();


/*********
 * yield *
 *********/

/**
 * Generator 返回的 Iterator 之所有调用 next 方法才会进入到下一个内部状态
 * 是因为： 提供了一种可以暂停执行的函数，yield 语句就是暂停标记
 *
 * 注意：是调用 next 才执行 yield 后面的语句，而不是 next 执行 yield ???
 * yield 也可以实现 "惰性求值"（ Lazy Evaluation ）的语法功能
 */
(() => {
    function* lazyLoading() {
        yield 2200 + 33;
    };
    console.log("[generator]  [test-" + 3 + "]  [lazyLoading().next()] = ", lazyLoading().next(), '\n');
})();

/**
 * yield 与 return :
 * 遇到 yield，函数暂停执行，下一次再从该位置继续向后执行
 * 而 return 语句不具备位置记忆的功能，只能执行一次 return
 */

/**
 * Generator 可以不用 yield
 */
(() => {
    function* generator() {
        console.log("[generator]  [test-" + 4 + "]  [function* generator()]", '\n');
    }

    generator().next();
})();

/**
 * yield 不能再普通方法中定义
 */
(() => {
    // function func() {
    //     yield 2233
    // }
})();

/**
 * 实例：深度遍历
 */
(() => {
    const NUMBER = 'number';
    let array = [1, [[2, 3], 4], [5, 6]];
    let depthTraversal = function *(array) {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            let element = array[i];
            if (typeof element !== NUMBER) {
                yield *depthTraversal(element);
            } else {
                yield element;
            }
        }
    };
    console.log("[generator]  [test-" + 5 + "]  [array] = ", array);
    for (let value of depthTraversal(array)) {
        console.log("[generator]  [test-" + 5 + "]  [value] = ", value);
    }
})();