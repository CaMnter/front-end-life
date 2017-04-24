"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/**************
 * includes() *
 **************/

/**
 * Array.prototype.includes 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的 includes 方法类
 * 似。该方法属于 ES7，但 Babel 转码器已经支持
 */

/**
 * ES6 以下部署 includes
 */
var arrayIncludes = function () {
  return Array.prototype.includes ? function (array, value) {
    return array.includes(value);
  } : function (array, value) {
    return array.some(function (el) {
      return el === value;
    });
  };
}();

/**
 * 第二个参数表示搜索的起始位置，默认为 0 。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度
 * （比如第二个参数为 -4，但数组长度为 3），则会重置为从 0 开始
 */
console.log("[array]\t\t[test-" + 1 + "]\t\t[arrayIncludes(['Save', 'you', 'from', 'anything'], 'Save')] = " + arrayIncludes(['Save', 'you', 'from', 'anything'], 'Save'));
console.log("");

/**************
 * 数组的空位 *
 **************/

/**
 * 数组的空位指，数组的某一个位置没有任何值。比如，Array 构造函数返回的数组都是空位
 */
console.log("[array]\t\t[test-" + 2 + "]\t\t[new Array(3)] = " + new Array(7));
console.log("");

/**
 * 空位不是 undefined，一个位置的值等于 undefined，依然是有值的。空位是没有任何值，in 运算符可以说明这一点
 */
console.log("[array]\t\t[test-" + 3 + "]\t\t[(0 in [undefined])] = " + (0 in [undefined]));
console.log("[array]\t\t[test-" + 3 + "]\t\t[(0 in [, , , , ,])] = " + (0 in [,,,,,]));
console.log("");

/**
 * ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位
 *
 * forEach(), filter(), every() 和some()都会跳过空位
 * map() 会跳过空位，但会保留这个值
 * join() 和 toString() 会将空位视为 undefined，而 undefined 和 null 会被处理成空字符串
 */
[,, 'S'].forEach(function (value, index) {
  return console.log("[array]\t\t[test-" + 4 + "]\t\t[value] = " + value);
});
console.log("[array]\t\t[test-" + 4 + "]\t\t[[, , 'S'].filter(x => x == true)] = " + [,, 'S'].filter(function (x) {
  return true;
}));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[, , 'S'].every(x => x == 'S')] = " + [,, 'S'].every(function (x) {
  return x == 'S';
}));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[, , 'S'].some(x => x != 'S')] = " + [,, 'S'].some(function (x) {
  return x != 'S';
}));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[, , 'S'].map(x => 67)] = " + [,, 'S'].map(function (x) {
  return 67;
}));
console.log("");
console.log("[array]\t\t[test-" + 5 + "]\t\t[['S', , 'a'].join(`#`)] = " + ['S',, 'a'].join("#"));
console.log("[array]\t\t[test-" + 5 + "]\t\t[['S', , 'a'].toString()] = " + ['S',, 'a'].toString());
console.log("");

/**
 * ES6 则是明确将空位转为 undefined
 */

/**
 * Array.from 方法会将数组的空位，转为 undefined，也就是说，这个方法不会忽略空位
 */
console.log("[array]\t\t[test-" + 6 + "]\t\t[Array.from(['S', , 'a'])] = " + Array.from(['S',, 'a']));

/**
 * 扩展运算符（...）也会将空位转为 undefined
 */
console.log("[array]\t\t[test-" + 6 + "]\t\t[[...['S', , 'a', , 'v', , , 'e']]] = " + ['S',, 'a',, 'v',,, 'e'].concat());

/**
 * copyWithin() 会连空位一起拷贝
 */
console.log("[array]\t\t[test-" + 6 + "]\t\t[[, 'S', 'a', , 'v', 'e'].copyWithin(2, 0)] = " + [, 'S', 'a',, 'v', 'e'].copyWithin(2, 0));

/**
 * fill() 会将空位视为正常的数组位置
 */
console.log("[array]\t\t[test-" + 6 + "]\t\t[new Array(6).fill('S')] = " + new Array(6).fill('S'));

/**
 * for...of 循环也会遍历空位
 */
var array = [,,,,,];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var index = _step.value;

    console.log("[array]\t\t[test-" + 6 + "]\t\t[index] = " + index);
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
 * entries()、keys()、values()、find() 和 findIndex() 会将空位处理成 undefined
 */
console.log("[array]\t\t[test-" + 7 + "]\t\t[[...[, 'S'].entries()]] = " + [].concat(_toConsumableArray([, 'S'].entries())));
console.log("[array]\t\t[test-" + 7 + "]\t\t[[...[, 'S'].keys()]] = " + [].concat(_toConsumableArray([, 'S'].keys())));
// console.log("[array]\t\t[test-" + 7 + "]\t\t[[...[, 'S'].values()]] = " + [...[, 'S'].values()]);
console.log("[array]\t\t[test-" + 7 + "]\t\t[[, 'S'].find(x => true)] = " + [, 'S'].find(function (x) {
  return true;
}));
console.log("[array]\t\t[test-" + 7 + "]\t\t[[, 'S'].findIndex(x => true)] = " + [, 'S'].findIndex(function (x) {
  return true;
}));

//# sourceMappingURL=array-4-compiled.js.map