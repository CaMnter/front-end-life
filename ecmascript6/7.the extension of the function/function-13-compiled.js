"use strict";

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
  if (z === 1) return 1;
  return z * f1(z - 1);
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[f1(5)] = " + f1(5));
console.log("");

/**
 * 尾递归  复杂度 O(1)
 */
function f2(z, total) {
  if (z === 1) return total;
  return f2(z - 1, z * total);
}
console.log("[function]\t\t[test-" + 2 + "]\t\t[f2(5, 1)] = " + f2(5, 1));
console.log("");

/**
 * 非尾递归 Fibonacci
 */
function fibonacciA(z) {
  if (z <= 1) return 1;
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
function FibonacciB(z) {
  var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var total = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (z <= 1) {
    return total;
  }

  return FibonacciB(z - 1, total, last + total);
}
console.log("[function]\t\t[test-" + 3 + "]\t\t[FibonacciB(100)] = " + FibonacciB(100));
console.log("[function]\t\t[test-" + 3 + "]\t\t[FibonacciB(1000)] = " + FibonacciB(1000));
console.log("[function]\t\t[test-" + 3 + "]\t\t[FibonacciB(1000)] = " + FibonacciB(1000));
console.log("");

/*****************
 * 递归函数的改写 *
 *****************/

/**
 * 尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。
 * 做到这一点的方法，就是把所有用到的内部变量改写成函数的参数
 *
 * factorial 需要用到一个中间变量 total ，那就把这个中间变量改写成函数的参数。
 * 这样做的缺点就是不太直观，第一眼很难看出来
 * 需要传入 两个值
 */

/**
 * 方法一
 * 是在尾递归函数之外，再提供一个正常形式的函数。
 */

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

function factorialC(n) {
  return tailFactorial(n, 1);
}

console.log("[function]\t\t[test-" + 4 + "]\t\t[factorialC(167)] = " + factorialC(167));
console.log("");

/**
 * 函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化
 */
function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}

var factorialD = currying(tailFactorial, 1);
console.log("[function]\t\t[test-" + 5 + "]\t\t[factorialD(167)] = " + factorialD(167));
console.log("");

/**
 * 第二种
 * 就是采用 ES6 的函数默认值。
 */
function factorialE(n) {
  var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (n === 1) return total;
  return factorialE(n - 1, n * total);
}
console.log("[function]\t\t[test-" + 6 + "]\t\t[factorialE(167)] = " + factorialE(167));

//# sourceMappingURL=function-13-compiled.js.map