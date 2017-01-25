"use strict";

/**
 * Created by：CaMnter
 */

/*************************
 * 数值和布尔值的解构赋值 *
 *************************/

var _ = 26,
    numberToString = _.toString;

console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[numberToString === Number.prototype.toString] = " + (numberToString === Number.prototype.toString));
var _true = true,
    booleanToString = _true.toString;

console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[booleanToString === Boolean.prototype.toString] = " + (booleanToString === Boolean.prototype.toString));

/**
 * 解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于 undefined 和 null 无法转为对象，所以
 * 对它们进行解构赋值，都会报错
 */
// let { prop: v1 } = undefined; // TypeError
// let { prop: v2 } = null; // TypeError

//# sourceMappingURL=destructuring-6-compiled.js.map