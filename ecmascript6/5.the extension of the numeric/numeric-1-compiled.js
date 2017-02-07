"use strict";

/**
 * Created by：CaMnter
 */

/***********************
 * 二进制和八进制表示法 *
 ***********************/

/**
 * ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b（或 0B ）和 0o（或 0O ）表示
 */
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[(二进制) 0b11111111] = " + 255);
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[(八进制) 0o111] = " + 73);
console.log("");

/**
 * 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀 0 表示，ES6 进一步明确，要使用前缀 0o 表示
 */
// 非严格模式
(function () {
  // console.log("[numeric]\t\t[test-" + 2 + "]\t\t[(八进制) 011] = " + 011);
  console.log("[numeric]\t\t[test-" + 2 + "]\t\t[(八进制) 0o11] = " + 9);
})(); // true
console.log("");
// 严格模式
(function () {
  'use strict';
  // console.log("[numeric]\t\t[test-" + 3 + "]\t\t[(八进制) 011] = " + 011);

  console.log("[numeric]\t\t[test-" + 3 + "]\t\t[(八进制) 0o11] = " + 9);
})();
console.log("");

/**
 * 要将 0b 和 0o 前缀的字符串数值转为十进制
 */
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Number(\"0b11111111\").toString(10)] = " + Number("0b11111111").toString(10));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Number(\"0o111\").toString(10)] = " + Number("0o111").toString(10));
console.log("");

/************************************
 * Number.isFinite() Number.isNaN() *
 ************************************/

/**
 * ES6 在 Number 对象上，新提供了 Number.isFinite() 和 Number.isNaN() 两个方法
 * Number.isFinite() 用来检查一个数值是否为有限的（ finite ）
 */

console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(267)] = " + Number.isFinite(267));
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(7.77)] = " + Number.isFinite(7.77));
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(NaN)] = " + Number.isFinite(NaN));
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(Infinity)] = " + Number.isFinite(Infinity));
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(-Infinity)] = " + Number.isFinite(-Infinity));
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(\"Save\")] = " + Number.isFinite("Save"));
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(\"267\")] = " + Number.isFinite("267"));
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[Number.isFinite(true)] = " + Number.isFinite(true));
console.log("");

/**
 * ES5 通过下面的代码，部署 Number.isFinite
 */

(function (global) {
  var global_isFinite = global.isFinite;

  Object.defineProperty(Number, 'isFinite', {
    value: function isFinite(value) {
      return typeof value === 'number' && global_isFinite(value);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
})(undefined);

isFinite(25); // true

/**
 * Number.isNaN() 用来检查一个值是否为 NaN
 */
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Number.isNaN(NaN)] = " + Number.isNaN(NaN));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Number.isNaN(267)] = " + Number.isNaN(267));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Number.isNaN('267')] = " + Number.isNaN('267'));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Number.isNaN(true)] = " + Number.isNaN(true));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Number.isNaN(267/NaN)] = " + Number.isNaN(9 / NaN));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Number.isNaN('true'/0)] = " + Number.isNaN('true' / 0));
console.log("[numeric]\t\t[test-" + 6 + "]\t\t[Number.isNaN('true'/'true')] = " + Number.isNaN('true' / 'true'));
console.log("");

/**
 * ES5 部署 Number.isNaN()
 */

(function (global) {
  var global_isNaN = global.isNaN;
  Object.defineProperty(Number, 'isNaN', {
    value: function isNaN(value) {
      return typeof value === 'number' && global_isNaN(value);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
})(undefined);

/**
 * 它们与传统的全局方法 isFinite() 和 isNaN() 的区别在于，传统方法先调用 Number() 将非数值的值转为数值，再
 * 进行判断，而这两个新方法只对数值有效，非数值一律返回 false
 */

console.log("[numeric]\t\t[test-" + 7 + "]\t\t[isFinite(267)] = " + isFinite(267));
console.log("[numeric]\t\t[test-" + 7 + "]\t\t[isNaN(267)] = " + isNaN(267));

//# sourceMappingURL=numeric-1-compiled.js.map