"use strict";

/**
 * Created by：CaMnter
 */

/****************
 * Math.trunc() *
 ****************/

/**
 * Math.trunc 方法用于去除一个数的小数部分，返回整数部分
 */
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.trunc(2.67)] = " + Math.trunc(2.67));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.trunc(-2.67)] = " + Math.trunc(-2.67));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.trunc(-2.67)] = " + Math.trunc(-0.267));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.trunc('2.67')] = " + Math.trunc('2.67'));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.trunc(NaN)] = " + Math.trunc(NaN));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.trunc('Save')] = " + Math.trunc('Save'));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.trunc()] = " + Math.trunc());
console.log("");

/**
 * ES5 部署 Math.trunc
 */
Math.trunc = Math.trunc || function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};

/***************
 * Math.sign() *
 ***************/

/**
 * Math.sign 方法用来判断一个数到底是正数、负数、还是零
 *
 * 参数为正数，返回 +1
 * 参数为负数，返回 -1
 * 参数为  0，返回  0
 * 参数为 -0，返回 -0
 * 其他值，返回 NaN
 */
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.sign(-2.67)] = " + Math.sign(-2.67));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.sign(2.67)] = " + Math.sign(2.67));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.sign(0)] = " + Math.sign(0));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.sign(-0)] = " + Math.sign(-0));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[NaN] = " + Math.sign(NaN));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t['Save'] = " + Math.sign('Save'));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.sign()] = " + Math.sign());
console.log("");

/***************
 * Math.cbrt() *
 ***************/

/**
 * Math.cbrt 方法用于计算一个数的立方根
 */
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.cbrt(-1)] = " + Math.cbrt(-1));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.cbrt(0)] = " + Math.cbrt(0));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.cbrt(1)] = " + Math.cbrt(1));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.cbrt('8')] = " + Math.cbrt('8'));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.cbrt(8)] = " + Math.cbrt(8));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Math.cbrt('Save')] = " + Math.cbrt('Save'));

/**
 * ES5 部署 Math.cbrt
 */
Math.cbrt = Math.cbrt || function (x) {
  var y = Math.pow(Math.abs(x), 1 / 3);
  return x < 0 ? -y : y;
};

//# sourceMappingURL=numeric-4-compiled.js.map