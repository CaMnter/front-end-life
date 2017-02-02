/**
 * Created by：CaMnter
 */

/****************
 * String.raw() *
 ****************/

/**
 * ES6 还为原生的 String 对象，提供了一个 raw 方法
 *
 * String.raw 方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符
 * 串，对应于替换变量后的模板字符串
 */
console.log("[string]\t\t[test-" + 1 + "]\t\t[info] = " + String.raw`Save \n ${3+3}`);
console.log("[string]\t\t[test-" + 1 + "]\t\t[info] = " + String.raw`Save \n \u000A`);
console.log("[string]\t\t[test-" + 1 + "]\t\t[info] = " + String.raw`Save \n \\u000A`);

/**
 * 源码
 */

String.raw = function (strings, ...values) {
    var output = "";
    for (var index = 0; index < values.length; index++) {
        output += strings.raw[index] + values[index];
    }

    output += strings.raw[index];
    return output;
};

/**
 * String.raw 方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用
 */

/**
 * String.raw 方法也可以作为正常的函数使用。这时，它的第一个参数，应该是一个具有 raw 属性的对象，且 raw 属性的值应该是一个数组
 */
console.log("[string]\t\t[test-" + 1 + "]\t\t[String.raw({ raw: 'test' }, 0, 1, 2)] = " + String.raw({ raw: 'test' }, 0, 1, 2));
console.log("[string]\t\t[test-" + 1 + "]\t\t[String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2)] = " + String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2));


