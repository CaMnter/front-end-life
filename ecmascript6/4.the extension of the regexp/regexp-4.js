/**
 * Created by：CaMnter
 */

/***************
 * sticky 属性 *
 ***************/

/**
 * 与 y 修饰符相匹配，ES6 的正则对象多了 sticky 属性，表示是否设置了 y 修饰符
 */
// var r = /hellow\d/y;
// console.log("[regexp]\t\t[test-" + 1 + "]\t\t[r.sticky] = " + r.sticky);
console.log("");

/**************
 * flags 属性 *
 **************/

/**
 * ES6 为正则表达式新增了 flags 属性，会返回正则表达式的修饰符
 */

// ES5 的 source属性
// 返回正则表达式的正文
console.log("[regexp]\t\t[test-" + 2 + "]\t\t[/abc/ig.source] = " + /abc/ig.source);
// "abc"cd

// ES6的flags属性
// 返回正则表达式的修饰符
console.log("[regexp]\t\t[test-" + 2 + "]\t\t[/abc/ig.flags] = " + /abc/ig.flags);
// 'gi'
console.log("");

/*******************
 * RegExp.escape() *
 *******************/

/**
 * 字符串必须转义，才能作为正则模式
 */

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
let s2 = '/path/to/resource.html?search=query';
console.log("[regexp]\t\t[test-" + 3 + "]\t\t[escapeRegExp(s2)] = " + escapeRegExp(s2));

const ESCAPE = require('regexp.escape');
ESCAPE.shim();
let s3 = "Save . you . from . anything";
//noinspection JSUnresolvedFunction
let escapeS3 = ESCAPE(s3);
console.log("[regexp]\t\t[test-" + 3 + "]\t\t[escapeS3] = " + escapeS3);

var str = 'hello. how are you?';
var regex = new RegExp(ESCAPE(str), 'g');
console.log("[regexp]\t\t[test-" + 3 + "]\t\t[String(regex)] = " + String(regex));
console.log("");

/*************************
 * s 修饰符：dotAll 模式 *
 *************************/

/**
 * 正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是行终止符（line terminator character）除外
 */

/**
 * 以下四个字符属于 ”行终止符“
 *      U+000A 换行符（\n）
 *      U+000D 回车符（\r）
 *      U+2028 行分隔符（line separator）
 *      U+2029 段分隔符（paragraph separator）
 */

// . 不匹配 \n，所以正则表达式返回 false
console.log("[regexp]\t\t[test-" + 4 + "]\t\t[/foo.bar/.test('foo\\nbar')] = " + /foo.bar/.test('foo\nbar'));
// 有一种变通的写法
console.log("[regexp]\t\t[test-" + 4 + "]\t\t[/foo[^]bar/.test('foo\\nbar')] = " + /foo[^]bar/.test('foo\nbar'));

/**
 * 引入 /s 修饰符，使得.可以匹配任意单个字符
 */
// console.log("[regexp]\t\t[test-" + 4 + "]\t\t[/foo.bar/s.test('foo\\nbar')] = " + /foo.bar/s.test('foo\nbar'));

/**
 * 这被称为 dotAll 模式，即点（dot）代表一切字符。所以，正则表达式还引入了一个 dotAll 属性，返回一个布尔
 * 值，表示该正则表达式是否处在 dotAll 模式
 */
// const re = /foo.bar/s;
// console.log("[regexp]\t\t[test-" + 4 + "]\t\t[re.test('foo\nbar')] = " + re.test('foo\nbar'));
// console.log("[regexp]\t\t[test-" + 4 + "]\t\t[re.dotAll] = " + re.dotAll);
// console.log("[regexp]\t\t[test-" + 4 + "]\t\t[re.flags] = " + re.flags);

/**
 * /s 修饰符和多行修饰符 /m 不冲突，两者一起使用的情况下，.匹配所有字符，而 ^ 和 $ 匹配
 * 每一行的行首和行尾
 */




