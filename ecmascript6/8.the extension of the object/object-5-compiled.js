"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by：CaMnter
 */

/*****************
 * Object.assign *
 *****************/

/**
 * Object.assign 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
 *
 * 第一个参数是目标对象
 * 后面的参数都是源对象
 *
 * 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
 */

var t1 = { s: 2, a: 0 };
var s1 = { v: 0, e: 0 };
var s2 = { v: 6, e: 7 };
var r1 = Object.assign(t1, s1, s2);
console.log("[object]\t\t[test-" + 1 + "]\t\t[r1] = ", r1);
console.log('');

/**
 * 如果只有一个参数，Object.assign 会直接返回该参数
 */
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.assign(t1) === t1] = " + (Object.assign(t1) === t1));
console.log('');

/**
 * 如果不是 对象, 就会先转为对象
 */
console.log("[object]\t\t[test-" + 3 + "]\t\t[Object.assign(t1) === t1] = " + _typeof(Object.assign(267)));
console.log('');

/**
 * undefined 和 null 无法转成对象，所以如果它们作为参数，就会报错
 */
// Object.assign(null);
// Object.assign(undefined);


/**
 * undefined 和 null 不在首参就好了
 */
console.log("[object]\t\t[test-" + 4 + "]\t\t[Object.assign(t1, null) === t1] = ", Object.assign(t1, null) === t1);
console.log("[object]\t\t[test-" + 4 + "]\t\t[Object.assign(t1, undefined) === t1] = ", Object.assign(t1, undefined) === t1);
console.log('');

var s3 = 'Save';
var s4 = true;
var s5 = 10;

var r2 = Object.assign({}, s3, s4, s5);
console.log("[object]\t\t[test-" + 5 + "]\t\t[r2] = ", r2);
console.log('');

/**
 * 布尔值、数值、字符串分别转成对应的包装对象
 * 原始值都在包装对象的内部属性 [[PrimitiveValue]] 上面
 *
 * 这个属性是不会被 Object.assign 拷贝的。只有字符串的包装对象，会
 * 产生可枚举的实义属性，那些属性则会被拷贝
 */
Object(true); // {[[PrimitiveValue]]: true}
Object(10); //  {[[PrimitiveValue]]: 10}
Object('abc'); // {0: "S", 1: "a", 2: "v", 3: "e", length: 4, [[PrimitiveValue]]: "Save"}

/**
 * Object.assign 拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性
 * （ enumerable: false ）
 *
 * Object.assign 要拷贝的对象只有一个不可枚举属性 invisible，这个属性
 * 并没有被拷贝进去
 */
var r3 = Object.assign({ b: 'c' }, Object.defineProperty({}, 'invisible', {
  enumerable: false,
  value: 'hello'
}));
console.log("[object]\t\t[test-" + 6 + "]\t\t[r3] = ", r3, '\n');

/**
 * 属性名为 Symbol 值的属性，也会被 Object.assign 拷贝
 */
var r4 = Object.assign({ a: 'b' }, _defineProperty({}, Symbol('c'), 'd'));
console.log("[object]\t\t[test-" + 7 + "]\t\t[r4] = ", r4, '\n');

//# sourceMappingURL=object-5-compiled.js.map