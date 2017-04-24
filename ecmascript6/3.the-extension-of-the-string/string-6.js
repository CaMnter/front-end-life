/**
 * Created by：CaMnter
 */


/************
 * 标签模板 *
 ************/


/**
 * 可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为 “标签模板” 功能
 * 标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数
 */
const ALL = "Save you from anything";
const SAVE = "Save";
const ANYTHING = "anything";

String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

function f1(info) {
    console.log("[string]\t\t[test-" + 1 + "]\t\t[info] = " + info);
    console.log("[string]\t\t[test-" + 1 + "]\t\t[arguments[1]] = " + arguments[1]);
}
f1`${ALL}`;
f1`Save you from anything`;
console.log("");

function f2(other, save, anything) {
    console.log("[string]\t\t[test-" + 2 + "]\t\t[other] = " + other);
    console.log("[string]\t\t[test-" + 2 + "]\t\t[save] = " + save);
    console.log("[string]\t\t[test-" + 2 + "]\t\t[anything] = " + anything);
    console.log("[string]\t\t[test-" + 2 + "]\t\t[result] = " + save + other.toString().replaceAll(",", "", false) + anything);
}
f2`${SAVE} you from ${ANYTHING}`;
f2(["", " you from ", ""], "Save", "anything");
console.log("");

/**
 * 将各个参数按照原来的位置拼合回去
 */
function f3(literals) {
    var result = '';
    var i = 0;
    for (let literal of literals) {
        console.log("[string]\t\t[test-" + 3 + "]\t\t[literal] = " + literal);
    }
    for (let argument of arguments) {
        console.log("[string]\t\t[test-" + 3 + "]\t\t[argument] = " + argument);
    }
    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}
console.log("[string]\t\t[test-" + 3 + "]\t\t[f3`${SAVE} you from ${ANYTHING}`] = " + f3`${SAVE} you from ${ANYTHING}`);
console.log("");

/**
 * 采用 rest 参数
 */
function f4(literals, ...values) {
    var output = "";
    for (var index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }
    output += literals[index];
    return output;
}
console.log("[string]\t\t[test-" + 4 + "]\t\t[f4`${SAVE} you from ${ANYTHING}`] = " + f4`${SAVE} you from ${ANYTHING}`);
console.log("");

/**
 * “标签模板” 的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容
 *
 * sender 变量往往是用户提供的，经过 saferHTML 函数处理，里面的特殊字符都会被转义
 *
 */

var message =
    saferHTML`<p>${sender} has sent you a message.</p>`;
function saferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
var sender = '<script>alert("abc")</script>'; // 恶意代码
var messageSimple = saferHTML`<p>${sender} has sent you a message.</p>`;
console.log("[string]\t\t[test-" + 5 + "]\t\t[messageSimple] = " + messageSimple);
console.log("");

console.log`[string]\t\t[test- + 6 + ]\t\t[ALL] =  + ${ALL}`;

