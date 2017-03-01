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

//# sourceMappingURL=function-12-compiled.js.map