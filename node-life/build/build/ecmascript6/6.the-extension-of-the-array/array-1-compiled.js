"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/****************
 * Array.from() *
 ****************/

/**
 * Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的
 * 对象（包括 ES6 新增的数据结构 Set 和 Map ）
 */

var json1 = {
  "0": "S",
  "1": "a",
  "2": "v",
  "3": "e",
  "all": "Save",
  length: 4
};
var json2 = {
  "0": "S",
  "1": "a",
  "2": "v",
  "3": "e",
  "all": "Save",
  length: 5
};

// ES5
console.log("[array]\t\t[test-" + 1 + "]\t\t[[].slice.call(json1)] = " + [].slice.call(json1));
console.log("[array]\t\t[test-" + 1 + "]\t\t[[].slice.call(json2)] = " + [].slice.call(json2));
console.log("");

// ES6
console.log("[array]\t\t[test-" + 2 + "]\t\t[Array.from(json1)] = " + Array.from(json1));
console.log("[array]\t\t[test-" + 2 + "]\t\t[Array.from(json2)] = " + Array.from(json2));
console.log("");

(function f1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log("[array]\t\t[test-" + 3 + "]\t\t[Array.from(arguments)] = " + Array.from(arguments));
})("Save", "you", "from", "anything");
console.log("");

/**
 * 只要是部署了 Iterator 接口的数据结构，Array.from 都能将其转为数组
 */
console.log("[array]\t\t[test-" + 4 + "]\t\t[Array.from('Save you from anything')] = " + Array.from('Save you from anything'));
var set1 = new Set(['S', 'a', 'v', 'e']);
console.log("[array]\t\t[test-" + 4 + "]\t\t[Array.from(set1)] = " + Array.from(set1));
console.log("");

/**
 * 扩展运算符（...）也可以将某些数据结构转为数组
 */
console.log("[array]\t\t[test-" + 4 + "]\t\t[[...'Save']] = " + [].concat(_toConsumableArray('Save')));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[[...set1]]] = " + [].concat(_toConsumableArray(set1)));
var map1 = new Map();
map1.set("name", "CaMnter");
map1.set("sign", "Save you from anything");
console.log("[array]\t\t[test-" + 4 + "]\t\t[[[...map1]]] = " + [].concat(_toConsumableArray(map1)));
console.log("");

/**
 * ES5 部署 Array.from
 */
var toArray = function () {
  return Array.from ? Array.from : function (obj) {
    return [].slice.call(obj);
  };
}();

/**
 * Array.from 还可以接受第二个参数，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返
 * 回的数组
 */
var PREFIX = "#";
console.log("[array]\t\t[test-" + 4 + "]\t\t[Array.from(set1, x => PREFIX + x)] = " + Array.from(set1, function (x) {
  return PREFIX + x;
}));
console.log("[array]\t\t[test-" + 4 + "]\t\t[Array.from(set1).map(x => PREFIX + x)] = " + Array.from(set1).map(function (x) {
  return PREFIX + x;
}));
console.log("[array]\t\t[test-" + 4 + "]\t\t[Array.from(set1, (x) => PREFIX + x)] = " + Array.from(set1, function (x) {
  return PREFIX + x;
}));
console.log("");

/**
 * 将数组中布尔值为 false 的成员转为 0
 */
console.log("[array]\t\t[test-" + 5 + "]\t\t[Array.from([2, , , , , , , , , , , , , , 6, 7], v => v || 0)] = " + Array.from([2,,,,,,,,,,,,,, 6, 7], function (v) {
  return v || 0;
}));
console.log("");

/**
 * 返回各种数据的类型
 */
function getTypes() {
  return Array.from(arguments, function (v) {
    return typeof v === "undefined" ? "undefined" : _typeof(v);
  });
}
console.log("[array]\t\t[test-" + 6 + "]\t\t[getTypes(null, [], {}, NaN, false, 2.67,set1,map1)] = " + getTypes(null, [], {}, NaN, false, 2.67, set1, map1));
console.log("");

/**
 * Array.from() 可以将各种值转为真正的数组，并且还提供 map 功能。这实际上意味着，只要有一个原始的数据结
 * 构，你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法
 *
 * Array.from 的第一个参数指定了第二个参数运行的次数。
 * 这种特性可以让该方法的用法变得非常灵活
 */
console.log("[array]\t\t[test-" + 7 + "]\t\t[Array.from({length: 6}, () => 'Save')] = " + Array.from({ length: 6 }, function () {
  return 'Save';
}));
console.log("");

/**
 * Array.from() 的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字
 * 符，可以避免 JavaScript 将大于 \uFFFF 的 Unicode 字符，算作两个字符的 bug
 */
function countSymbols(string) {
  return Array.from(string).length;
}
console.log("[array]\t\t[test-" + 7 + "]\t\t[countSymbols('𠮷Save')] = " + countSymbols('𠮷Save'));

//# sourceMappingURL=array-1-compiled.js.map