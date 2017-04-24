"use strict";

/**
 * Created by：CaMnter
 */

/****************
 * Math.clz32() *
 ****************/

/**
 * JavaScript 的整数使用 32 位二进制形式表示，Math.clz32 方法返回一个数的 32 位无符号整数形式有多少个前
 * 导 0
 *
 * 1 的二进制形式是 0b1，只占1位，所以 32 位之中有 31 个前导 0
 * 1000 的二进制形式是 0b1111101000，一共有 10 位，所以 32 位之中有 22 个前导 0
 *
 * clz32 这个函数名就来自 "count leading zero bits in 32-bit binary representations of a number"
 *（计算 32 位整数的前导 0）的缩写
 */
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.clz32(0)] = " + Math.clz32(0));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.clz32(1)] = " + Math.clz32(1));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.clz32(1000)] = " + Math.clz32(1000));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.clz32(0b01000000000000000000000000000000)] = " + Math.clz32(1073741824));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.clz32(0b00100000000000000000000000000000)] = " + Math.clz32(536870912));
console.log("");

/**
 * 左移运算符（<<）与 Math.clz32 方法直接相关
 */
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(0)] = " + Math.clz32(0));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(1)] = " + Math.clz32(1));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(1 << 1)] = " + Math.clz32(1 << 1));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(1 << 2)] = " + Math.clz32(1 << 2));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(1 << 3)] = " + Math.clz32(1 << 3));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(1 << 6)] = " + Math.clz32(1 << 6));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(1 << 29)] = " + Math.clz32(1 << 29));
console.log("");

/**
 * 对于小数，Math.clz32 方法只考虑整数部分
 */
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(1.67)] = " + Math.clz32(1.67));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.clz32(2.67)] = " + Math.clz32(2.67));
console.log("");

/**
 * 对于空值或其他类型的值，Math.clz32 方法会将它们先转为数值，然后再计算
 */
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32()] = " + Math.clz32());
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32(NaN)] = " + Math.clz32(NaN));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32(Infinity)] = " + Math.clz32(Infinity));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32(null)] = " + Math.clz32(null));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32('Save')] = " + Math.clz32('Save'));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32([])] = " + Math.clz32([]));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32({})] = " + Math.clz32({}));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.clz32(true)] = " + Math.clz32(true));
console.log("");

/***************
 * Math.imul() *
 ***************/

/**
 * Math.imul 方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
 */
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.imul(2, 67)] = " + Math.imul(2, 67));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.imul(-2, 67)] = " + Math.imul(-2, 67));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.imul(-2, -67)] = " + Math.imul(-2, -67));
console.log("");

/**
 * 如果只考虑最后 32 位，大多数情况下，Math.imul(a, b) 与 a * b 的结果是相同的，即该方法等同于 (a * b)|0
 * 的效果（超过32位的部分溢出）。之所以需要部署这个方法，是因为 JavaScript 有精度限制，超过 2 的 53 次方的
 * 值无法精确表示。这就是说，对于那些很大的数的乘法，低位数值往往都是不精确的，Math.imul 方法可以返回正确的
 * 低位数值
 */
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[(0x7fffffff * 0x7fffffff)|0] = " + (0x7fffffff * 0x7fffffff | 0));
/**
 * 这个乘法算式，返回结果为 0。但是由于这两个二进制数的最低位都是 1，所以这个结果肯定是不正确的，因为根据二
 * 进制乘法，计算结果的二进制最低位应该也是 1。这个错误就是因为它们的乘积超过了 2 的 53 次方，JavaScript 无
 * 法保存额外的精度，就把低位的值都变成了 0。Math.imul 方法可以返回正确的值 1
 */
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Math.imul(0x7fffffff, 0x7fffffff)] = " + Math.imul(0x7fffffff, 0x7fffffff));
console.log("");

/*****************
 * Math.fround() *
 *****************/

/**
 * Math.fround 方法返回一个数的单精度浮点数形式
 */
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Math.fround(0)] = " + Math.fround(0));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Math.fround(1)] = " + Math.fround(1));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Math.fround(1.67)] = " + Math.fround(1.67));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Math.fround(6.7)] = " + Math.fround(6.7));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Math.fround(1.5)] = " + Math.fround(1.5));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Math.fround(NaN)] = " + Math.fround(NaN));
console.log("");

/**
 * 对于整数来说，Math.fround 方法返回结果不会有任何不同，区别主要是那些无法用 64 个二进制位精确表示的小数。
 * 这时，Math.fround 方法会返回最接近这个小数的单精度浮点数
 *
 * ES5 部署 Math.fround
 */
Math.fround = Math.fround || function (x) {
  return new Float32Array([x])[0];
};

/****************
 * Math.hypot() *
 ****************/

/**
 * Math.hypot 方法返回所有参数的平方和的平方根
 *
 * 如果参数不是数值，Math.hypot 方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN
 */
console.log("[numeric]\t\t[test-" + 7 + "]\t\t[Math.hypot(3, 4)] = " + Math.hypot(3, 4));
console.log("[numeric]\t\t[test-" + 7 + "]\t\t[Math.hypot(3, 4, 5)] = " + Math.hypot(3, 4, 5));
console.log("[numeric]\t\t[test-" + 7 + "]\t\t[Math.hypot(3, 4, 'Save')] = " + Math.hypot(3, 4, 'Save'));
console.log("[numeric]\t\t[test-" + 7 + "]\t\t[Math.hypot(3, '4')] = " + Math.hypot(3, '4'));
console.log("[numeric]\t\t[test-" + 7 + "]\t\t[Math.hypot(-3, -'4')] = " + Math.hypot(-3, -'4'));

//# sourceMappingURL=numeric-5-compiled.js.map