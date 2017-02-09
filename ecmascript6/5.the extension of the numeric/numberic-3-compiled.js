"use strict";

/**
 * Created by：CaMnter
 */

/*************************************
 * 安全整数和 Number.isSafeInteger() *
 *************************************/

/**
 * JavaScript 能够准确表示的整数范围在- 2^53 到 2^53 之间（不含两个端点），超过这个范围，无法精确表示这个值
 */
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Math.pow(2, 53)] = " + Math.pow(2, 53));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[(Math.pow(2, 53) === Math.pow(2, 53) + 1)] = " + (Math.pow(2, 53) === Math.pow(2, 53) + 1));
console.log("");

/**
 * ES6 引入了 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER 这两个常量，用来表示这个范围的上下限
 */
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Number.MAX_SAFE_INTEGER] = " + Number.MAX_SAFE_INTEGER);
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Number.MIN_SAFE_INTEGER] = " + Number.MIN_SAFE_INTEGER);
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[(Number.MAX_SAFE_INTEGER === -Number.MIN_SAFE_INTEGER)] = " + (Number.MAX_SAFE_INTEGER === -Number.MIN_SAFE_INTEGER));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1)] = " + (Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1));
console.log("");

/**
 * Number.isSafeInteger() 则是用来判断一个整数是否落在这个范围之内
 */
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger('Save')] = " + Number.isSafeInteger('Save'));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(null)] = " + Number.isSafeInteger(null));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(NaN)] = " + Number.isSafeInteger(NaN));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(Infinity)] = " + Number.isSafeInteger(Infinity));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(-Infinity)] = " + Number.isSafeInteger(-Infinity));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(6)] = " + Number.isSafeInteger(6));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(2.67)] = " + Number.isSafeInteger(2.67));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(9007199254740990)] = " + Number.isSafeInteger(9007199254740990));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(9007199254740992)] = " + Number.isSafeInteger(9007199254740992));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)] = " + Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(Number.MIN_SAFE_INTEGER)] = " + Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(Number.MAX_SAFE_INTEGER)] = " + Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)] = " + Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log("");

/**
 * ES5 部署 Number.isSafeInteger()
 */
Number.isSafeInteger = function (n) {
  return typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && n <= Number.MAX_SAFE_INTEGER;
};

/**
 * 如果只验证运算结果是否为安全整数，很可能得到错误结果
 */
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Number.isSafeInteger(9007199254740993)] = " + Number.isSafeInteger(9007199254740993));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Number.isSafeInteger(990)] = " + Number.isSafeInteger(990));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[Number.isSafeInteger(9007199254740993 - 990)] = " + Number.isSafeInteger(9007199254740993 - 990));
console.log("[numeric]\t\t[test-" + 4 + "]\t\t[(9007199254740993 - 990)] = " + (9007199254740993 - 990) + ", 是错误的 , 正确值为 = " + 9007199254740003);
console.log("");

/**
 * 下面的函数可以同时验证两个运算数和运算结果
 */
function trusty(left, right, result) {
  if (Number.isSafeInteger(left) && Number.isSafeInteger(right) && Number.isSafeInteger(result)) {
    return result;
  }
  throw new RangeError('Operation cannot be trusted!');
}
console.log("[numeric]\t\t[test-" + 5 + "]\t\t[trusty(3, 3, 6)] = " + trusty(3, 3, 6));
trusty(9007199254740993, 990, 9007199254740993 - 990);

//# sourceMappingURL=numberic-3-compiled.js.map