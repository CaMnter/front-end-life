'use strict';

var _o2, _o5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by：CaMnter
 */

/****************
 * 属性名表达式 *
 ****************/

/**
 * 主要是方括号 []
 */

// 标识符作为属性名
var o1 = {};
o1.name = 'camnter';
/**
 * ES6
 * 表达式作为属性名，这时要将表达式放在方括号之内
 */
var o2 = {};
o2['na' + 'me'] = 'camnter';
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.name] = " + o1.name);
console.log("[object]\t\t[test-" + 1 + "]\t\t[o2.name] = " + o2.name);
console.log("");

// 标识符 定义属性
var o3 = {
  name: "camnter"
};
/**
 * （表达式）作为对象的属性名
 */
var name = 'name';
var o4 = _defineProperty({}, name, 'camnter');
console.log("[object]\t\t[test-" + 2 + "]\t\t[o3.name] = " + o3.name);
console.log("[object]\t\t[test-" + 2 + "]\t\t[o4.name] = " + o4.name);
console.log("");

var o5 = (_o2 = {}, _defineProperty(_o2, name, 'camnter'), _defineProperty(_o2, 'sign', "Save you from anything"), _o2);
console.log("[object]\t\t[test-" + 3 + "]\t\t[o5.name] = " + o5.name);
console.log("[object]\t\t[test-" + 3 + "]\t\t[o5.sign] = " + o5.sign);
console.log("");

/**
 * 表达式定义方法名
 */
var o6 = _defineProperty({}, 's' + 'ave', function () {
  return 'Save you from anything';
});
console.log("[object]\t\t[test-" + 4 + "]\t\t[o6.save()] = " + o6.save());
console.log("");

/**
 * 属性名表达式 与 简洁表示法
 * 不能同时使用
 */
var att1 = 'att1';
var att2 = 'att2';
// var o7 = {[att1]}; // error
var o8 = _defineProperty({}, att1, att1);

/**
 * [keyA] 和 [keyB] 得到的都是 [object Object]，所以 [keyB] 会把 [keyA] 覆盖掉
 * 而 o9 最后只有一个 [object Object] 属性
 */
var keyA = { a: 1 };
var keyB = { b: 2 };

var o9 = (_o5 = {}, _defineProperty(_o5, keyA, 'valueA'), _defineProperty(_o5, keyB, 'valueB'), _o5);
console.log("[object]\t\t[test-" + 4 + "]\t\t[o9[keyA]] = " + o9[keyA] + "\t\t[o9[keyB]] = " + o9[keyA]);

//# sourceMappingURL=object-2-compiled.js.map