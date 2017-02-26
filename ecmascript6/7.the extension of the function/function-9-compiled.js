"use strict";

/**
 * Created by：CaMnter
 */

/**********************
 * 箭头函数 - 基本用法 *
 **********************/

var arrowFunction1 = function arrowFunction1(v) {
  return v;
};
// 等同于
function af1(v) {
  return v;
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[arrowFunction1(67)] = " + arrowFunction1(67));

/**
 * 没有参数
 */
var arrowFunction2 = function arrowFunction2() {
  return 77;
};
// 等同于
function af2() {
  return 77;
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[arrowFunction2()] = " + arrowFunction2());

var arrowFunction3 = function arrowFunction3(x, y) {
  return x + y;
};
// 等同于
function af3(x, y) {
  return x + y;
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[arrowFunction3(6, 7)] = " + arrowFunction3(6, 7));
console.log("");

/**
 * 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 return 语句返回
 */
var arrowFunction4 = function arrowFunction4(x, y) {
  x += x;
  y += y;
  return x + y;
};
console.log("[function]\t\t[test-" + 2 + "]\t\t[arrowFunction4(6 + 7)] = " + arrowFunction4(6, 7));
console.log("");

/**
 * 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
 */
var arrowFunction5 = function arrowFunction5(name) {
  return { name: name, sign: "Save you from anything" };
};
console.log("[function]\t\t[test-" + 3 + "]\t\t[arrowFunction5('CaMnter').name] = " + arrowFunction5('CaMnter').name);
console.log("[function]\t\t[test-" + 3 + "]\t\t[arrowFunction5('CaMnter').sign] = " + arrowFunction5('CaMnter').sign);
console.log("");

/**
 * 箭头函数可以与变量解构结合使用
 */
var arrowFunction6 = function arrowFunction6(_ref) {
  var name = _ref.name,
      sign = _ref.sign;
  return { name: name, sign: sign };
};
console.log("[function]\t\t[test-" + 4 + "]\t\t[arrowFunction6({name: 'CaMnter', sign: 'Save you from anything'}).name] = " + arrowFunction6({
  name: 'CaMnter',
  sign: 'Save you from anything'
}).name);
console.log("[function]\t\t[test-" + 4 + "]\t\t[arrowFunction6({name: 'CaMnter', sign: 'Save you from anything'}).sign] = " + arrowFunction6({
  name: 'CaMnter',
  sign: 'Save you from anything'
}).sign);
console.log("");

/**
 * 箭头函数使得表达更加简洁
 */
var isEven = function isEven(z) {
  return z % 2 == 0;
};
var square = function square(z) {
  return z * z;
};

/**
 * 简化回调函数
 */
[2, 6, 7].map(function (z) {
  return '1' + z;
});
// 简化后
[2, 6, 7].map(function (z) {
  return '1' + z;
});
console.log("[function]\t\t[test-" + 5 + "]\t\t[[2, 6, 7].map(z => '1' + z)] = " + [2, 6, 7].map(function (z) {
  return '1' + z;
}));

var r1 = [6, 2, 7].sort(function (a, b) {
  return a - b;
});
var r2 = [6, 2, 7].sort(function (a, b) {
  return a - b;
});
console.log("[function]\t\t[test-" + 5 + "]\t\t[[6, 2, 7].sort((a, b) => a - b)] = " + [6, 2, 7].sort(function (a, b) {
  return a - b;
}));
console.log("");
var getArray1 = function getArray1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
var getArray2 = function getArray2(z) {
  for (var _len2 = arguments.length, array = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    array[_key2 - 1] = arguments[_key2];
  }

  return [z, array];
};
console.log("[function]\t\t[test-" + 6 + "]\t\t[getArray1(2, 6, 7)] = " + getArray1(2, 6, 7));
// [5, [2, 6, 7]]
console.log("[function]\t\t[test-" + 6 + "]\t\t[getArray2(5, 2, 6, 7)] = " + getArray2(5, 2, 6, 7));

//# sourceMappingURL=function-9-compiled.js.map