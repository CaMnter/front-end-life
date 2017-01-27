/**
 * Created by：CaMnter
 */

/************************
 * 字符的 Unicode 表示法 *
 ************************/

/**
 * JavaScript 允许采用 \u???? 形式表示一个字符，其中 ???? 表示字符的码点
 */
console.log("[string]\t\t[test-" + 1 + "]\t\t[\\u0061] = \u0061");

/**
 * 这种表示法只限于 \u0000——\uFFFF 之间的字符。超出这个范围的字符，必须用两个双字节的形式表达
 */
console.log("[string]\t\t[test-" + 1 + "]\t\t[\\uD842\\uDFB7] = \uD842\uDFB7");

/**
 * 如果直接在\u后面跟上超过 0xFFFF 的数值
 *
 * 如:
 * \uFFFF6 , JavaScript会理解成 \uFFFF + 6。由于 \uFFFF 是一个不可打印字符，所以只会显示一个空格，后面跟着一个 6
 */
console.log("[string]\t\t[test-" + 1 + "]\t\t[\\uFFFF6] = \uFFFF6");

/**
 * ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符
 */
// console.log("[string]\t\t[test-" + 1 + "]\t\t[\\u{FFFF6}] = \u{FFFF6}");
// console.log("[string]\t\t[test-" + 1 + "]\t\t[\\u{6F}] = \u{6F}");
// console.log("[string]\t\t[test-" + 1 + "]\t\t[hell\\u{6F}] = hell\u{6F}");

/**
 * JavaScript 共有 6 种方法可以表示一个字符
 */
console.log("[string]\t\t[test-" + 1 + "]\t\t['\\z' === 'z'] = " + ('\z' === 'z'));
console.log("[string]\t\t[test-" + 1 + "]\t\t['\\172' === 'z'] = " + ('\172' === 'z'));
console.log("[string]\t\t[test-" + 1 + "]\t\t['\\x7A' === 'z'] = " + ('\x7A' === 'z'));
console.log("[string]\t\t[test-" + 1 + "]\t\t['\\u007A' === 'z'] = " + ('\u007A' === 'z'));
// console.log("[string]\t\t[test-" + 1 + "]\t\t['\\u{7A}' === 'z'] = "+('\u{7A}' === 'z'));