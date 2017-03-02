/**
 * Created by：CaMnter
 */

/**********
 * 尾递归 *
 **********/

/**
 * 如果尾调用自身，就称为 尾递归
 *
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生 “栈溢出” 错误（stack overflow）。但对于
 * 尾递归来说，由于只存在一个调用帧，所以永远不会发生 “栈溢出” 错误
 */

/**
 * 最多需要保存 n 个调用记录，复杂度 O(n)
 *
 * 不属于 尾递归, 因为不是直接 return 方法, 而且 return z*方法
 */
function f1(z) {
    if (z === 1)return 1;
    return z * f1(z - 1);
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[f1(5)] = " + f1(5));
console.log("");

/**
 * 尾递归  复杂度 O(1)
 */
function f2(z, total) {
    if (z === 1)return total;
    return f2(z - 1, z * total);
}
console.log("[function]\t\t[test-" + 2 + "]\t\t[f2(5, 1)] = " + f2(5, 1));
console.log("");


/**
 * 非尾递归 Fibonacci
 */
function fibonacciA(z) {
    if (z <= 1)return 1;
    return fibonacciA(z - 1) + fibonacciA(z - 2);
}
console.log("[function]\t\t[test-" + 3 + "]\t\t[fibonacciA(10)] = " + fibonacciA(10));

// 溢出
// console.log("[function]\t\t[test-" + 3 + "]\t\t[fibonacciA(100)] = " + fibonacciA(100));
// console.log("[function]\t\t[test-" + 3 + "]\t\t[fibonacciA(777)] = " + fibonacciA(777));
console.log("");


/**
 * @return {number}
 */
function FibonacciB(z, last = 1, total = 1) {
    if (z <= 1) {
        return total;
    }

    return FibonacciB(z - 1, total, last + total);
}
console.log("[function]\t\t[test-" + 3 + "]\t\t[FibonacciB(100)] = " + FibonacciB(100));
console.log("[function]\t\t[test-" + 3 + "]\t\t[FibonacciB(1000)] = " + FibonacciB(1000));
console.log("[function]\t\t[test-" + 3 + "]\t\t[FibonacciB(1000)] = " + FibonacciB(1000));