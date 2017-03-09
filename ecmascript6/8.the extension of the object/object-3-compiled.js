"use strict";

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by：CaMnter
 */

/********************
 * 方法的 name 属性 *
 ********************/

/**
 * 函数的name属性，返回函数名
 * 对象方法也是函数
 */
var o1 = {
  o1f1: function o1f1() {}
};
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.o1f1.name] = " + o1.o1f1.name);
console.log('');

/**
 * setter getter
 *
 * 该方法的属性的描述对象的 get 和 set 属性上面，返回值是方法名前加上 get 和 set
 */
var o2 = {
  get o2f1() {},
  set o2f1(v) {}
};
// 要这么取
var o2f1 = Object.getOwnPropertyDescriptor(o2, 'o2f1');
console.log("[object]\t\t[test-" + 2 + "]\t\t[o2f1.get.name] = " + o2f1.get.name);
console.log("[object]\t\t[test-" + 2 + "]\t\t[o2f1.set.name] = " + o2f1.set.name);
console.log("");

/**
 * 特殊情况:
 * 1. bind 方法创造的函数，name 属性返回 bound 加上原函数的名
 * 2. Function 构造函数创造的函数，name 属性返回 anonymous
 */
var f1 = function f1() {};
var o3 = {};
console.log("[object]\t\t[test-" + 3 + "]\t\t[(new Function()).name] = " + new Function().name);
console.log("[object]\t\t[test-" + 3 + "]\t\t[f1.bind(o3).name] = " + f1.bind(o3).name);
console.log("");

/**
 * 对象的方法是一个 Symbol 值，那么 name 属性返回的是这个 Symbol 值的描述
 */
var key1 = Symbol('description');
var key2 = Symbol();
var obj = (_obj = {}, _defineProperty(_obj, key1, function () {}), _defineProperty(_obj, key2, function () {}), _obj);
console.log("[object]\t\t[test-" + 4 + "]\t\t[obj[key1].name] = " + obj[key1].name);
console.log("[object]\t\t[test-" + 4 + "]\t\t[obj[key2].name] = " + obj[key2].name);

//# sourceMappingURL=object-3-compiled.js.map