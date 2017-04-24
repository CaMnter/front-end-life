"use strict";

/**
 * Created by：CaMnter
 */

/************************
 * String.fromCodePoint *
 ************************/

/**
 * ES5 提供 String.fromCharCode 方法，用于从码点返回对应字符，但是这个方法不能识别 32 位的 UTF-16 字
 * 符（ Unicode 编号大于 0xFFFF ）
 *
 * 如: 0x20BB7
 *
 * 最高位 2 被舍弃了，最后返回码点 U+0BB7 对应的字符，而不是码点U+20BB7对应的字符
 */

console.log("[string]\t\t[test-" + 1 + "]\t\t[String.fromCharCode(0x20BB7)] = " + String.fromCharCode(0x20BB7));

/**
 * ES6 提供了 String.fromCodePoint 方法，可以识别 0xFFFF 的字符，弥补了 String.fromCharCode 方法的不足
 * 如果 String.fromCodePoint 方法有多个参数，则它们会被合并成一个字符串返回
 */
console.log("[string]\t\t[test-" + 1 + "]\t\t[String.fromCodePoint(0x20BB7)] = " + String.fromCodePoint(0x20BB7));
console.log("[string]\t\t[test-" + 1 + "]\t\t[String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\\uD83D\\uDE80y'] = " + (String.fromCodePoint(0x78, 0x1f680, 0x79) === "x\uD83D\uDE80y"));
console.log("");

/*********************
 * 字符串的遍历器接口 *
 *********************/

/**
 * ES6 为字符串添加了遍历器接口，使得字符串可以被 for...of 循环遍历
 */
var SAVE = "Save";
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = SAVE[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var element = _step.value;

    console.log("[string]\t\t[test-" + 2 + "]\t\t[element] = " + element);
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

console.log("");

/**
 * 遍历器最大的优点是可以识别大于 0xFFFF 的码点，传统的 for 循环无法识别这样的码点
 */
var text = String.fromCodePoint(0x20BB7);
for (var i = 0; i < text.length; i++) {
  console.log("[string]\t\t[test-" + 3 + "]\t\t[fromCodePoint#element] = " + text[i]);
}
console.log("");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = text[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _element = _step2.value;

    console.log("[string]\t\t[test-" + 4 + "]\t\t[for...of#element] = " + _element);
  }

  /********
   * at() *
   ********/

  /**
   * ES5 对字符串对象提供 charAt 方法，返回字符串给定位置的字符。该方法不能识别码点大于 0xFFFF 的字符
   */
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

require('string.prototype.at');
console.log("[string]\t\t[test-" + 4 + "]\t\t['𠮷'.charAt(0)] = " + '𠮷'.charAt(0));
// https://github.com/es-shims/String.prototype.at
console.log("[string]\t\t[test-" + 4 + "]\t\t['𠮷'.at(0)] = " + '𠮷'.at(0));

//# sourceMappingURL=string-3-compiled.js.map