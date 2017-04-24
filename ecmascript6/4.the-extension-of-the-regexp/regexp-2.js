/**
 * Created by：CaMnter
 */

/************
 * u 修饰符 *
 ************/

/**
 * ES6 对正则表达式添加了 u 修饰符，含义为 “Unicode模式” ，用来正确处理大于 \uFFFF 的 Unicode 字符。也
 * 就是说，会正确处理四个字节的 UTF-16 编码
 *
 * \uD83D\uDC2A 是一个四个字节的 UTF-16 编码，代表一个字符。但是，
 * ES5 不支持四个字节的 UTF-16 编码，会将其识别为两个字符
 * ES6 就会识别其为一个字符
 */
// /^\uD83D/u.test('\uD83D\uDC2A'); // false
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[/^\\uD83D/.test('\uD83D\uDC2A')] = " + /^\uD83D/.test('\uD83D\uDC2A'));

/**
 * 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于 0xFFFF 的 Unicode 字符，点字
 * 符不能识别，必须加上 u 修饰符。
 */
var s = '𠮷';
console.log("[regexp]\t\t[test-" + 1 + "]\t\t[/^.$/.test(s)] = " + /^.$/.test(s));
// /^.$/u.test(s) // true

/**
 * Unicode 字符表示法
 *
 * ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上 u 修饰符，才能识别
 * 如果不加 u 修饰符，正则表达式无法识别 \u{61} 这种表示法，只会认为这匹配 61 个连续的 u
 */
// /\u{61}/.test('a') // false
// /\u{61}/u.test('a') // true
// /\u{20BB7}/u.test('𠮷') // true

/**
 * 量词
 *
 * 使用 u 修饰符后，所有量词都会正确识别码点大于 0xFFFF 的 Unicode 字符
 *
 * 只有在使用 u 修饰符的情况下，Unicode 表达式当中的大括号才会被正确解读，否则会被解读为量词
 */
// /a{2}/.test('aa') // true
// /a{2}/u.test('aa') // true
// /'𠮷𠮷'{2}/.test('𠮷𠮷') // false
// /'𠮷𠮷'{2}/u.test('𠮷𠮷') // true
// /^\u{3}$/.test('uuu') // true

/**
 * 预定义模式
 *
 * u 修饰符也影响到预定义模式，能否正确识别码点大于 0xFFFF 的 Unicode 字符。
 *
 * 上面代码的 \S 是预定义模式，匹配所有不是空格的字符。只有加了 u 修饰符，它才能正确匹配码点大于 0xFFFF  的
 * Unicode 字符。
 *
 * \S 是预定义模式，匹配所有不是空格的字符。只有加了 u 修饰符，它才能正确匹配码点大于 0xFFFF 的 Unicode 字符。
 */
// /^\S$/.test('𠮷') // false
// /^\S$/u.test('𠮷') // true

// function codePointLength(text) {
//     var result = text.match(/[\s\S]/gu);
//     return result ? result.length : 0;
// }
//
// var s = '𠮷𠮷';
//
// s.length // 4
// codePointLength(s) // 2

/**
 * i 修饰符
 * 有些 Unicode 字符的编码不同，但是字型很相近，比如，\u004B 与 \u212A 都是大写的 K。
 * 不加 u 修饰符，就无法识别非规范的K字符。
 */
// /[a-z]/i.test('\u212A') // false
// /[a-z]/iu.test('\u212A') // true










