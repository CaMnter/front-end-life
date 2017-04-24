'use strict';

/**
 * Created by：CaMnter
 */

/******************
 * RegExp构造函数 *
 ******************/

/**
 * 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
 */

var r1 = new RegExp('save', 'i');
var r2 = /save/i;
var r3 = new RegExp(/save/i);
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[new RegExp('save', 'i')] = " + r1);
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[/save/i] = " + r2);
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[new RegExp(/save/i)] = " + r3);

/**
 * 但是，ES5 不允许此时使用第二个参数，添加修饰符，否则会报错。
 */
// var regex = new RegExp(/save/, 'i'); // ES5 上报错

/**
 * ES6 改变了这种行为。如果 RegExp 构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而
 * 且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符
 */
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[new RegExp(/save/ig, 'i').flags] = " + new RegExp(/save/ig, 'i').flags);

/*******************
 * 字符串的正则方法 *
 *******************/

/**
 * 字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()  ()
 *
 * ES6 将这 4 个方法，在语言内部全部调用 RegExp 的实例方法，从而做到所有与正则相关的方法，全都定义
 * 在 RegExp 对象上
 *
 * String.prototype.match 调用 RegExp.prototype[Symbol.match]
 * String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
 * String.prototype.search 调用 RegExp.prototype[Symbol.search]
 * String.prototype.split 调用 RegExp.prototype[Symbol.split]
 */

//# sourceMappingURL=regexp-1-compiled.js.map