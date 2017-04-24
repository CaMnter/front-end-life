"use strict";

/**
 * Created by：CaMnter
 */

/****************
 * Math.expm1() *
 ****************/

/**
 * Math.expm1(x) 返回 ex - 1，即 Math.exp(x) - 1
 */
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.expm1(-1)] = " + Math.expm1(-1));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.expm1(0)] = " + Math.expm1(0));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.expm1(1)] = " + Math.expm1(1));
console.log("");

/**
 * ES5 部署 Math.expm1
 */
Math.expm1 = Math.expm1 || function (x) {
  return Math.exp(x) - 1;
};

/****************
 * Math.log1p() *
 ****************/

/**
 * Math.log1p(x) 方法返回 1 + x 的自然对数，即 Math.log(1 + x)。如果 x 小于 -1，返回 NaN
 */
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.log1p(1)] = " + Math.log1p(1));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.log1p(0)] = " + Math.log1p(0));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.log1p(-1)] = " + Math.log1p(-1));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.log1p(-2)] = " + Math.log1p(-2));
console.log("");

/**
 * ES5 部署 Math.log1p
 */
Math.log1p = Math.log1p || function (x) {
  return Math.log(1 + x);
};

/****************
 * Math.log10() *
 ****************/

/**
 * Math.log10(x) 返回以 10 为底的 x 的对数。如果 x 小于 0，则返回 NaN
 */
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.log10(2)] = " + Math.log10(2));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.log10(1)] = " + Math.log10(1));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.log10(0)] = " + Math.log10(0));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.log10(-2)] = " + Math.log10(-2));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Math.log10(100000)] = " + Math.log10(100000));
console.log("");

/**
 * ES5 部署 Math.log10
 */
Math.log10 = Math.log10 || function (x) {
  return Math.log(x) / Math.LN10;
};

/***************
 * Math.log2() *
 ***************/

/**
 * Math.log2(x) 返回以 2 为底的 x 的对数。如果 x 小于 0，则返回 NaN
 */
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.log2(3)] = " + Math.log2(3));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.log2(2)] = " + Math.log2(2));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.log2(1)] = " + Math.log2(1));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.log2(0)] = " + Math.log2(0));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.log2(-2)] = " + Math.log2(-2));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.log2(267)] = " + Math.log2(267));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Math.log2(1 << 27)] = " + Math.log2(1 << 27));
console.log("");

/**
 * ES5 部署 Math.log2
 */
Math.log2 = Math.log2 || function (x) {
  return Math.log(x) / Math.LN2;
};

/****************
 * 三角函数方法 *
 ***************/

/**
 * ES6 新增了 6 个三角函数方法
 *
 * Math.sinh(x) 返回x的双曲正弦
 * Math.cosh(x) 返回x的双曲余弦
 * Math.tanh(x) 返回x的双曲正切
 * Math.asinh(x) 返回x的反双曲正弦
 * Math.acosh(x) 返回x的反双曲余弦
 * Math.atanh(x) 返回x的反双曲正切
 */

//# sourceMappingURL=numeric-6-compiled.js.map