/**
 * Created by：CaMnter
 */

/*****************
 * codePointAt() *
 *****************/

/**
 * JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为 2 个字节。对于那些需要 4 个字节储存的
 * 字符（ Unicode 码点大于 0xFFFF 的字符），JavaScript 会认为它们是两个字符
 */
// 汉字 “𠮷”（注意，这个字不是”吉祥“的”吉“）的码点是 0x20BB7，UTF-16 编码为 0xD842 0xDFB7（十进制为 55362 57271
// 需要 4 个字节储存
var s1 = "𠮷";
console.log("[string]\t\t[test-" + 1 + "]\t\t[s1.length] = " + s1.length);
console.log("[string]\t\t[test-" + 1 + "]\t\t[s1.charAt(0)] = " + s1.charAt(0));
console.log("[string]\t\t[test-" + 1 + "]\t\t[s1.charAt(1)] = " + s1.charAt(1));
console.log("[string]\t\t[test-" + 1 + "]\t\t[s1.charCodeAt(0)] = " + s1.charCodeAt(0));
console.log("[string]\t\t[test-" + 1 + "]\t\t[s1.charCodeAt(1)] = " + s1.charCodeAt(1));
console.log("");

/**
 * JavaScript 不能正确处理，字符串长度会误判为 2，而且 charAt 方法无法读取整个字符，charCodeAt 方法只能分
 * 别返回前两个字节和后两个字节的值
 *
 * ES6 提供了 codePointAt 方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点
 */
var s2 = "𠮷a";
console.log("[string]\t\t[test-" + 2 + "]\t\t[s2.codePointAt(0)] = " + s2.codePointAt(0));
console.log("[string]\t\t[test-" + 2 + "]\t\t[s2.codePointAt(1)] = " + s2.codePointAt(1));
console.log("[string]\t\t[test-" + 2 + "]\t\t[s2.codePointAt(2)] = " + s2.codePointAt(2));
console.log("[string]\t\t[test-" + 2 + "]\t\t[s2.codePointAt(0).toString(16)] = " + s2.codePointAt(0).toString(16));
console.log("[string]\t\t[test-" + 2 + "]\t\t[s2.codePointAt(2).toString(16)] = " + s2.codePointAt(2).toString(16));
console.log("");

/**
 * codePointAt 方法的参数，仍然是不正确的。比如，上面代码中，字符 a 在字符串 s2 的正确位置序号应该是 1，但
 * 是必须向 codePointAt 方法传入 2。解决这个问题的一个办法是使用 for...of 循环，因为它会正确识别 32 位的
 * UTF-16 字符
 */
for (let ch of s2) {
    console.log("[string]\t\t[test-" + 3 + "]\t\t[ch.codePointAt(0).toString(16)] = " + ch.codePointAt(0).toString(16));
}
console.log("");

/**
 * codePointAt 方法是测试一个字符由两个字节还是由四个字节组成的最简单方法
 */
function is32Bit(char) {
    return char.codePointAt(0) > 0xFFFF;
}
console.log("[string]\t\t[test-" + 4 + "]\t\t[is32Bit(\"𠮷\")] = " + is32Bit("𠮷"));
console.log("[string]\t\t[test-" + 4 + "]\t\t[is32Bit(\"a\")] = " + is32Bit("a"));

