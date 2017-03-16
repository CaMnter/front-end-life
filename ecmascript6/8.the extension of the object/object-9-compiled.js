"use strict";

/**
 * Created by：CaMnter
 */

/***************************
 * Object.setPrototypeOf() *
 ***************************/

/**
 * 用来设置一个对象的 prototype 对象
 *
 * ES6 正式推荐的设置原型对象的方法
 */

/**
 * 原理等同于
 */
function setProtoType(object, prototype) {
  object.__proto__ = prototype;
  return object;
}

/**
 * 例子
 */
var newPrototype = { x: 2, save: 'Save' };
var o1 = {};
Object.setPrototypeOf(o1, newPrototype);
newPrototype.x = 12;
newPrototype.y = 6;
newPrototype.z = 7;
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.x] = ", o1.x);
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.y] = ", o1.y);
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.z] = ", o1.z);
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.save] = ", o1.save, '\n');

/***************************
 * Object.getPrototypeOf() *
 ***************************/
function CaMnter() {
  this.name = "CaMnter";
}
var camnter = new CaMnter();
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.getPrototypeOf(camnter) === CaMnter.prototype] = ", Object.getPrototypeOf(camnter) === CaMnter.prototype);

//# sourceMappingURL=object-9-compiled.js.map