"use strict";

/**
 * Created by：CaMnter
 */

/**********
 * 尾调用 *
 **********/

/**
 * 尾调用（Tail Call）是函数式编程的一个重要概念，
 * 本身非常简单，一句话就能说清楚，就是指
 *
 * 某个函数的最后一步是调用另一个函数
 */

function f0(z) {
    return 1 / z;
}

function f1(z) {
    return z * z;
}

// 属于 尾调用
function f2(z) {
    return f1(z);
}

// 不属于 尾调用
function f3(z) {
    var tempZ = f1(z);
    return tempZ;
}

// 不属于 尾调用
function f4(z) {
    return f1(z) + z;
}

// 不属于 尾调用
function f4(z) {
    f1(z);
}

/**
 * f4 等同于 f5
 *
 * 所以不属于
 */
// 不属于 尾调用
function f5(z) {
    f1(z);
    return undefined;
}

/**
 * 尾调用不一定出现在函数尾部，只要是最后一步操作即可
 *
 * f0 和 f1 都属于尾调用, 因为都是最后一步操作
 */
function f6(z) {
    if (z > 0) {
        return f1(z);
    }
    return f0(z);
}

/**************
 * 尾调用优化 *
 **************/

/**
 * 尾调用之所以与其他调用不同，就在于它的特殊的调用位置。
 *
 * 函数调用会在内存形成一个 “调用记录”，又称 “调用帧”（call frame），保存调用位置
 * 和内部变量等信息。如果在函数 A 的内部调用函数 B，那么在 A 的调用帧上方，还会形成一个 B 的调用帧。等到 B
 * 运行结束，将结果返回到 A，B 的调用帧才会消失。如果函数 B 内部还调用函数 C，那就还有一个 C 的调用帧，以
 * 此类推。所有的调用帧，就形成一个 “调用栈”（call stack）。
 *
 * 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到
 * 了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了
 */

function f() {
    var m = 1;
    var n = 2;
    return g(m + n);
}
f();

// 等同于
function f() {
    // return g(3);
}
f();

// 等同于
// g(3);

/**
 * 上面代码中，如果函数 g 不是尾调用，函数f就需要保存内部变量 m 和 n 的值、g 的调用位置等信息。但由于调用 g
 * 之后，函数 f 就结束了，所以执行到最后一步，完全可以删除 f(x) 的调用帧，只保留 g(3) 的调用帧
 *
 * 这就叫做 “尾调用优化”（Tail call optimization），即只保留内层函数的调用帧。如果所有函数都是尾调用，那么
 * 完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是 “尾调用优化” 的意义
 */

/**
 * 注: 只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行 “尾调用优化”
 */
function addOne(a) {
    var one = 1;
    function inner(b) {
        return b + one;
    }
    return inner(a);
}
/**
 * 上面的函数不会进行尾调用优化，因为内层函数 inner 用到了外层函数 addOne 的内部变量 one
 */

//# sourceMappingURL=function-12-compiled.js.map