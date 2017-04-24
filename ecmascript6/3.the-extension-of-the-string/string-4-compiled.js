"use strict";

/**
 * Created by：CaMnter
 */

/****************************************
 * includes(), startsWith(), endsWith() *
 ****************************************/

/**
 * 传统上，JavaScript 只有 indexOf 方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种
 * 新方法
 */

/**
 * includes()：返回布尔值，表示是否找到了参数字符串。
 * startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
 * endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
 *
 * 第二个参数，表示开始搜索的位置。
 * endsWith 的行为与其他两个方法有所不同。它针对前 n 个字符，而其他两个方法针对从第n个位置直到字符串结束
 */

var S1 = "Save you from anything";
var SAVE = "Save";
var ANYTHING = "anything";
console.log("[string]\t\t[test-" + 1 + "]\t\t[S1.includes(SAVE)] = " + S1.includes(SAVE));
console.log("[string]\t\t[test-" + 1 + "]\t\t[S1.startsWith(SAVE)] = " + S1.startsWith(SAVE));
console.log("[string]\t\t[test-" + 1 + "]\t\t[S1.startsWith(ANYTHING)] = " + S1.endsWith(ANYTHING));
console.log("[string]\t\t[test-" + 1 + "]\t\t[S1.includes(ANYTHING, 10)] = " + S1.includes(ANYTHING, 10));
console.log("[string]\t\t[test-" + 1 + "]\t\t[S1.startsWith(ANYTHING, 14)] = " + S1.startsWith(ANYTHING, 14));
console.log("[string]\t\t[test-" + 1 + "]\t\t[S1.endsWith(SAVE,3)] = " + S1.endsWith(SAVE, 3));
console.log("");

/************
 * repeat() *
 ************/

/**
 * repeat 方法返回一个新字符串，表示将原字符串重复 n 次
 */
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat(0)] = " + SAVE.repeat(0));
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat(1)] = " + SAVE.repeat(1));
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat(2)] = " + SAVE.repeat(2));
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat(3.9)] = " + SAVE.repeat(3.9));
// SAVE.repeat(Infinity); // 报错
// SAVE.repeat(-1); // 报错
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat(-0.9)] = " + SAVE.repeat(-0.9));
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat(NaN)] = " + SAVE.repeat(NaN));
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat('Save')] = " + SAVE.repeat('Save'));
console.log("[string]\t\t[test-" + 2 + "]\t\t[SAVE.repeat('6')] = " + SAVE.repeat('6'));
console.log("");

/**************
 * 模板字符串 *
 **************/
console.log("[string]\t\t[test-" + 3 + "]\t\t[普通字符串] = " + 'Save you from anything');
console.log("[string]\t\t[test-" + 3 + "]\t\t[多行字符串] = " + "Save\nyou from anything");
console.log("[string]\t\t[test-" + 3 + "]\t\t[多行字符串${}] = " + (SAVE + "\nyou from " + ANYTHING));

/**
 * 模板字符串甚至还能嵌套
 */
var data = [{ first: '<CaMnter>', last: '<CM>' }, { first: '<Save>', last: '<you from anything>' }];

var tmpl = function tmpl(addrs) {
  return "\n  <table>\n  " + addrs.map(function (addr) {
    return "\n    <tr><td>" + addr.first + "</td></tr>\n    <tr><td>" + addr.last + "</td></tr>\n  ";
  }).join('') + "\n  </table>\n";
};
console.log("[string]\t\t[test-" + 3 + "]\t\t[tmpl(data)] = " + tmpl(data));

/**
 * 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写
 */
// 写法一
var returnString1 = 'return ' + '`Save you from ${arg}!`';
var f1 = new Function('arg', returnString1);
console.log("[string]\t\t[test-" + 3 + "]\t\t[f1('anything')] = " + f1('anything'));
// 写法二
var returnString2 = '(arg) => `Save you from ${arg}!`';
var f2 = eval.call(null, returnString2);
console.log("[string]\t\t[test-" + 3 + "]\t\t[f2('anything')] = " + f2('anything'));

//# sourceMappingURL=string-4-compiled.js.map