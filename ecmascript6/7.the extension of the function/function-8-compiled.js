"use strict";

/**
 * Created by：CaMnter
 */

/*************
 * name 属性 *
 *************/

/**
 * 函数的 name 属性，返回该函数的函数名
 */

function f1() {}
console.log("[function]\t\t[test-" + 1 + "]\t\t[f1.name] = " + f1.name);

/**
 * ES6 对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5 的 name 属性，会返回空字符
 * 串，而 ES6 的 name 属性会返回实际的函数名
 */
var f2 = function f2() {};
console.log("[function]\t\t[test-" + 1 + "]\t\t[f2.name] = " + f2.name);
var f3 = function f4() {};
console.log("[function]\t\t[test-" + 1 + "]\t\t[f3.name] = " + f3.name);

/**
 * Function 构造函数返回的函数实例，name 属性的值为 anonymous
 */
console.log("[function]\t\t[test-" + 1 + "]\t\t[(new Function).name] = " + new Function().name);

/**
 * bind 返回的函数，name 属性值会加上 bound 前缀
 */
function f5() {};
console.log("[function]\t\t[test-" + 1 + "]\t\t[f5.bind({}).name] = " + f5.bind({}).name);
console.log("[function]\t\t[test-" + 1 + "]\t\t[(function () {}).bind({}).name] = " + function () {}.bind({}).name);

//# sourceMappingURL=function-8-compiled.js.map