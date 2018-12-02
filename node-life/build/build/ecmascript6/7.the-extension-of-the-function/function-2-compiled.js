"use strict";

/**
 * Created by：CaMnter
 */

/*******************
 * 参数默认值的位置 *
 *******************/

/**
 * 有默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入 undefined
 *
 * undefined 会触发默认值
 * null 不会
 */
function f1() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
    var y = arguments[1];

    console.log("[function]\t\t[test-" + 1 + "]\t\t[x] = " + x + "\t\t[y] = " + y);
}
f1();
f1(6);
// f1(, 1); // 报错
f1(null, 67);
f1(NaN, 67);
f1(undefined, 67);
console.log("");

function f2(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    var z = arguments[2];

    console.log("[function]\t\t[test-" + 2 + "]\t\t[x] = " + x + "\t\t[y] = " + y + "\t\t[z] = " + z);
}
f2();
f2(6);
f2(6, 7);
// f2(6, , 8); // 报错
f2(6, undefined, 7);
console.log("");

/**********************
 * 函数的 length 属性 *
 **********************/

/**
 * 函数的 length 属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length 属性将失真
 *
 * 设置了默认值的参数不是尾参数，那么 length 属性也不再计入后面的参数了
 */
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function (x) {}).length] = " + function (x) {}.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function (x = 6) {}).length] = " + function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
}.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function (x = 6, y, z) {}).length] = " + function () {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var y = arguments[1];
    var z = arguments[2];
}.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function (x, y, z = 7) {}).length] = " + function (x, y) {
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
}.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function (x, y = 6, z) {}).length] = " + function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var z = arguments[2];
}.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function(...args) {}).length] = " + function () {}.length);

//# sourceMappingURL=function-2-compiled.js.map