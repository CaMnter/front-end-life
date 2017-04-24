"use strict";

/**
 * Created by：CaMnter
 */

/*******************
 * 函数参数的默认值 *
 *******************/

/**
 * ES5 不支持函数默认值
 * 只能绕弯实现
 */
var SAVE = "Save you from anything";
function f1(value) {
  if (typeof value === 'undefined') {
    value = SAVE;
  }
  console.log("[function]\t\t[test-" + 1 + "]\t\t[value] = " + value);
}
f1();
f1('Save');
console.log("");

/**
 * ES6 支持
 */
function f2() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SAVE;

  console.log("[function]\t\t[test-" + 2 + "]\t\t[value] = " + value);
}
f1();
f1('Save');
console.log("");

/**
 * 参数变量 是默认声明的，在函数体中，
 * 不能用 let 或 const 再次声明，否则会报错
 */
function f3(v) {
  // let v = 67;          // error
  // const v = 67;        // error
  var v = 67;
}

/***************************
 * 与解构赋值默认值结合使用 *
 ***************************/

function f4(_ref) {
  var index = _ref.index,
      _ref$sign = _ref.sign,
      sign = _ref$sign === undefined ? SAVE : _ref$sign;

  console.log("[function]\t\t[test-" + 3 + "]\t\t[index] = " + index);
  console.log("[function]\t\t[test-" + 3 + "]\t\t[sign] = " + sign);
}
f4({ index: 67 });
f4({ index: 67, sign: 'Save' });
f4({});
console.log("");

/**
 * 对象的解构赋值默认值的例子
 */

/**
 * 不可省略参数
 */
function fetch(url, _ref2) {
  var _ref2$body = _ref2.body,
      body = _ref2$body === undefined ? '' : _ref2$body,
      _ref2$method = _ref2.method,
      method = _ref2$method === undefined ? 'GET' : _ref2$method,
      _ref2$header = _ref2.header,
      header = _ref2$header === undefined ? {} : _ref2$header;

  console.log("[function]\t\t[test-" + 4 + "]\t\t[method] = " + method);
}
fetch('https://www.camnter.com', {});
fetch('https://www.camnter.com', { method: 'POST' });
// fetch('https://www.camnter.com');  error
console.log("");

/**
 * 可省略参数
 */
function fetch2(rl) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$body = _ref3.body,
      body = _ref3$body === undefined ? '' : _ref3$body,
      _ref3$method = _ref3.method,
      method = _ref3$method === undefined ? 'GET' : _ref3$method,
      _ref3$header = _ref3.header,
      header = _ref3$header === undefined ? {} : _ref3$header;

  console.log("[function]\t\t[test-" + 5 + "]\t\t[method] = " + method);
}
fetch2('https://www.camnter.com');

/**
 * 写法一
 *
 * 参数是一个 空对象 {}
 * 设置了对象解构赋值的默认值
 */
function f5() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$x = _ref4.x,
      x = _ref4$x === undefined ? 0 : _ref4$x,
      _ref4$y = _ref4.y,
      y = _ref4$y === undefined ? 0 : _ref4$y;

  return [x, y];
}

/**
 * 写法二
 *
 * 参数是一个 对象 {x,y}
 * 没设置了对象解构赋值的默认值
 */
function f6() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
      x = _ref5.x,
      y = _ref5.y;

  return [x, y];
}

console.log("[function]\t\t[test-" + 6 + "]\t\t[f5()] = " + f5());
console.log("[function]\t\t[test-" + 6 + "]\t\t[f6()] = " + f6());
console.log('');
console.log("[function]\t\t[test-" + 7 + "]\t\t[f5({x: 7, y: 6})] = " + f5({ x: 7, y: 6 }));
console.log("[function]\t\t[test-" + 7 + "]\t\t[f6({x: 7, y: 6})] = " + f6({ x: 7, y: 6 }));
console.log('');
console.log("[function]\t\t[test-" + 8 + "]\t\t[f5({x: 7})] = " + f5({ x: 7 }));
console.log("[function]\t\t[test-" + 8 + "]\t\t[f6({x: 7})] = " + f6({ x: 7 }));
console.log('');
console.log("[function]\t\t[test-" + 9 + "]\t\t[f5({})] = " + f5({}));
console.log("[function]\t\t[test-" + 9 + "]\t\t[f6({})] = " + f6({}));
console.log('');
console.log("[function]\t\t[test-" + 10 + "]\t\t[f5({v: 6})] = " + f5({ v: 6 }));
console.log("[function]\t\t[test-" + 10 + "]\t\t[f6({v: 6})] = " + f6({ v: 6 }));
console.log('');

//# sourceMappingURL=function-1-compiled.js.map