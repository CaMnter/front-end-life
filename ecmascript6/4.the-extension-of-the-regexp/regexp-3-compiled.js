'use strict';

/**
 * Created by：CaMnter
 */

/************
 * y 修饰符 *
 ************/

/**
 * ES6 还为正则表达式添加了 y 修饰符，叫做 “粘连”（sticky）修饰符
 *
 * y 修饰符的作用与 g 修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在
 * 于，g 修饰符只要剩余位置中存在匹配就可，而 y 修饰符确保匹配必须从剩余的第一个位置开始，这也就是 “粘连” 的
 * 涵义
 *
 * 一个使用 g 修饰符，另一个使用 y 修饰符。这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩
 * 余字符串都是 _ss_s。由于 g 修饰没有位置要求，所以第二次执行会返回结果，而 y 修饰符要求匹配必须从头部开始
 * 所以返回 null
 */

var s = "sss_ss_ss";
var r1 = /s+/g;
// var r2 = /s+/y;
r1.exec(s); // ["sss"]
// r2.exec(s) // ["ss"]

r1.exec(s); // ["ss"]
// r2.exec(s) // null

/**
 * 改一下正则表达式，保证每次都能头部匹配，y 修饰符就会返回结果了
 *
 * lastIndex 属性指定每次搜索的开始位置，g 修饰符从这个位置开始向后搜索，直到发现匹配为止
 */

var s2 = 'sss_ss_';
// var r = /s+_/y;

// r.exec(s2) // ["sss_"]
// r.exec(s2) // ["ss_"]

/**
 * 使用 lastIndex 属性，可以更好地说明 y 修饰符
 */

var REGEX = /x/g;
// 指定从 2 号位置（y）开始匹配
REGEX.lastIndex = 2;
// 匹配成功
var match = REGEX.exec('exex');
// 在3号位置匹配成功
match.index; // 3
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[match.index] = " + match.index);
// 下一次匹配从 4 号位开始
REGEX.lastIndex; // 4
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[REGEX.lastIndex] = " + REGEX.lastIndex);
// 4 号位开始匹配失败
REGEX.exec('exex'); // null

console.log("");

/**
 * y 修饰符同样遵守 lastIndex 属性，但是要求必须在 lastIndex 指定的位置发现匹配
 */
// const REGEX2 = /x/y;
// 指定从 2 号位置开始匹配
// REGEX2.lastIndex = 2;
// // 不是粘连，匹配失败
// REGEX2.exec('exex'); // null
// // 指定从 3 号位置开始匹配
// REGEX2.lastIndex = 3;
// // 3 号位置是粘连，匹配成功
// const match2 = REGEX2.exec('exex');
// match2.index // 3
// REGEX2.lastIndex // 4
// console.log("[regexp]\t\t[test-" + 2 + "]\t\t[match2.index] = " + match2.index);
// console.log("[regexp]\t\t[test-" + 2 + "]\t\t[REGEX2.lastIndex] = " + REGEX2.lastIndex);
// console.log("");

/**
 * y 修饰符号隐含了头部匹配的标志 ^
 */
// /x/y.exec('exe');

/**
 * 在 split 方法中使用 y 修饰符，原字符串必须以分隔符开头。这也意味着，只要匹配成功，数组的第一个成员肯定是
 * 空字符串
 */

// 没有找到匹配
// 'x##'.split(/#/y);
// [ 'x##' ]

// 找到两个匹配
// '##x'.split(/#/y);
// [ '', '', 'x' ]

/**
 * 后续的分隔符只有紧跟前面的分隔符，才会被识别
 */

// '#x#'.split(/#/y);
// // [ '', 'x#' ]
//
// '##'.split(/#/y);
// // [ '', '', '' ]

/**
 * 字符串对象的 replace 方法的例子
 */

// const REGEX3 = /a/gy;
// 最后一个 a 因为不是出现下一次匹配的头部，所以不会被替换
// 'aaxa'.replace(REGEX, '-') // '--xa'

/**
 * 单单一个 y 修饰符对 match 方法，只能返回第一个匹配，必须与 g 修饰符联用，才能返回所有匹配
 */

// 'a1a2a3'.match(/a\d/y); // ["a1"]
// 'a1a2a3'.match(/a\d/gy); // ["a1", "a2", "a3"]

/**
 * y 修饰符的一个应用，是从字符串提取 token（词元），y 修饰符确保了匹配之间不会有漏掉的字符
 */

// const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
// const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;
//
// tokenize(TOKEN_Y, '3 + 4')
// // [ '3', '+', '4' ]
// tokenize(TOKEN_G, '3 + 4')
// // [ '3', '+', '4' ]

function tokenize(TOKEN_REGEX, str) {
  var result = [];
  var match = void 0;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}

/**
 * 上面代码中，如果字符串里面没有非法字符，y 修饰符与 g 修饰符的提取结果是一样的。但是，一旦出现非法字符，两
 * 者的行为就不一样了
 *
 * g 修饰符会忽略非法字符，而 y 修饰符不会，这样就很容易发现错误
 */

tokenize(TOKEN_Y, '3x + 4');
// [ '3' ]
tokenize(TOKEN_G, '3x + 4');
// [ '3', '+', '4' ]

//# sourceMappingURL=regexp-3-compiled.js.map