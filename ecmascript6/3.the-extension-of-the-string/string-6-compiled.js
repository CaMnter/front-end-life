"use strict";

var _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]),
    _templateObject2 = _taggedTemplateLiteral(["Save you from anything"], ["Save you from anything"]),
    _templateObject3 = _taggedTemplateLiteral(["", " you from ", ""], ["", " you from ", ""]),
    _templateObject4 = _taggedTemplateLiteral(["<p>", " has sent you a message.</p>"], ["<p>", " has sent you a message.</p>"]),
    _templateObject5 = _taggedTemplateLiteral(["[string]\t\t[test- + 6 + ]\t\t[ALL] =  + ", ""], ["[string]\\t\\t[test- + 6 + ]\\t\\t[ALL] =  + ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
var ALL = "Save you from anything";
var SAVE = "Save";
var ANYTHING = "anything";

String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, ignoreCase ? "gi" : "g"), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
};

function f1(info) {
    console.log("[string]\t\t[test-" + 1 + "]\t\t[info] = " + info);
    console.log("[string]\t\t[test-" + 1 + "]\t\t[arguments[1]] = " + arguments[1]);
}
f1(_templateObject, ALL);
f1(_templateObject2);
console.log("");

function f2(other, save, anything) {
    console.log("[string]\t\t[test-" + 2 + "]\t\t[other] = " + other);
    console.log("[string]\t\t[test-" + 2 + "]\t\t[save] = " + save);
    console.log("[string]\t\t[test-" + 2 + "]\t\t[anything] = " + anything);
    console.log("[string]\t\t[test-" + 2 + "]\t\t[result] = " + save + other.toString().replaceAll(",", "", false) + anything);
}
f2(_templateObject3, SAVE, ANYTHING);
f2(["", " you from ", ""], "Save", "anything");
console.log("");

/**
 * 将各个参数按照原来的位置拼合回去
 */
function f3(literals) {
    var result = '';
    var i = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = literals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var literal = _step.value;

            console.log("[string]\t\t[test-" + 3 + "]\t\t[literal] = " + literal);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var argument = _step2.value;

            console.log("[string]\t\t[test-" + 3 + "]\t\t[argument] = " + argument);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}
console.log("[string]\t\t[test-" + 3 + "]\t\t[f3`${SAVE} you from ${ANYTHING}`] = " + f3(_templateObject3, SAVE, ANYTHING));
console.log("");

/**
 * 采用 rest 参数
 */
function f4(literals) {
    var output = "";

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    for (var index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }
    output += literals[index];
    return output;
}
console.log("[string]\t\t[test-" + 4 + "]\t\t[f4`${SAVE} you from ${ANYTHING}`] = " + f4(_templateObject3, SAVE, ANYTHING));
console.log("");

/**
 * “标签模板” 的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容
 *
 * sender 变量往往是用户提供的，经过 saferHTML 函数处理，里面的特殊字符都会被转义
 *
 */

var message = saferHTML(_templateObject4, sender);
function saferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
var sender = '<script>alert("abc")</script>'; // 恶意代码
var messageSimple = saferHTML(_templateObject4, sender);
console.log("[string]\t\t[test-" + 5 + "]\t\t[messageSimple] = " + messageSimple);
console.log("");

console.log(_templateObject5, ALL);

//# sourceMappingURL=string-6-compiled.js.map