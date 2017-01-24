"use strict";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

/**
 * Created by：CaMnter
 */

/***********************
 * 对象的解构指定默认值 *
 ***********************/

var _ref = {},
    _ref$v = _ref.v1,
    v1 = _ref$v === undefined ? 6 : _ref$v;
var _v = { v2: 6 },
    v2 = _v.v2,
    _v$v = _v.v3,
    v3 = _v$v === undefined ? 6 : _v$v;
var _ref2 = {},
    _ref2$v = _ref2.v4,
    v5 = _ref2$v === undefined ? 6 : _ref2$v;
var _v2 = { v6: 26 },
    _v2$v = _v2.v6,
    v7 = _v2$v === undefined ? 6 : _v2$v;
var _ref3 = {},
    _ref3$networkSave = _ref3.networkSave,
    save1 = _ref3$networkSave === undefined ? 'Save you from anything' : _ref3$networkSave;

console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v5] = " + v5);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v7] = " + v7);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[save1] = " + save1);
console.log("");

/**
 * 1.默认值生效的条件是，对象的属性值严格等于 undefined
 * 2.如果 属性等于 null，就不严格相等于 undefined，导致默认值不会生
 * 3.如果解构失败，变量的值等于 undefined
 */
var _v3 = { v8: undefined },
    _v3$v = _v3.v8,
    v8 = _v3$v === undefined ? 26 : _v3$v;
var _v4 = { v9: null },
    _v4$v = _v4.v9,
    v9 = _v4$v === undefined ? 26 : _v4$v;
var _v5 = { v10000: 'v10' },
    v10 = _v5.v10;

console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v8] = " + v8);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v9] = " + v9);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v10] = " + v10);
console.log("");

// var {v11: {v12}} = {v13: 'v13'}; // 报错
/**
 * 等号左边对象的 v11 属性，对应一个子对象,其中有个属性是 v13
 * 右边解析 {v13: 'v13'} 的时候,v11 就是一个 undefined,无法取到对象属性 v12,直接报错
 */
var v14 = { v15: 'v15' };
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v14.v15] = " + v14.v15);
console.log("");

/**
 * JavaScript 引擎会将 {...} 理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript
 * 将其解释为代码块，才能解决这个问题
 * 放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系
 */
var v16;
// {v16} = {v16: 26}; Error
// Right
var _v6 = { v16: 26 };
v16 = _v6.v16;
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v16] = " + v16);

/**
 * 虽然毫无意义，但是语法是合法的
 */

_objectDestructuringEmpty([true, false]);

var _Save = 'Save';

_objectDestructuringEmpty(_Save);

/**
 * 将现有对象的方法，赋值到某个变量
 * Math 对象的对数、正弦、余弦三个方法
 */
_objectDestructuringEmpty([]);

var mathLog = Math.log,
    mathSin = Math.sin,
    mathCos = Math.cos;

console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathLog] = " + mathLog);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathSin] = " + mathSin);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathCos] = " + mathCos);

/**
 * 数组
 */
var a;
/**
 * Created by：CaMnter
 */

/***********************
 * 对象的解构指定默认值 *
 ***********************/

var _ref4 = {},
    _ref4$v = _ref4.v1,
    v1 = _ref4$v === undefined ? 6 : _ref4$v;
var _v7 = { v2: 6 },
    v2 = _v7.v2,
    _v7$v = _v7.v3,
    v3 = _v7$v === undefined ? 6 : _v7$v;
var _ref5 = {},
    _ref5$v = _ref5.v4,
    v5 = _ref5$v === undefined ? 6 : _ref5$v;
var _v8 = { v6: 26 },
    _v8$v = _v8.v6,
    v7 = _v8$v === undefined ? 6 : _v8$v;
var _ref6 = {},
    _ref6$networkSave = _ref6.networkSave,
    save1 = _ref6$networkSave === undefined ? 'Save you from anything' : _ref6$networkSave;

console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v5] = " + v5);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v7] = " + v7);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[save1] = " + save1);
console.log("");

/**
 * 1.默认值生效的条件是，对象的属性值严格等于 undefined
 * 2.如果 属性等于 null，就不严格相等于 undefined，导致默认值不会生
 * 3.如果解构失败，变量的值等于 undefined
 */
var _v9 = { v8: undefined },
    _v9$v = _v9.v8,
    v8 = _v9$v === undefined ? 26 : _v9$v;
var _v10 = { v9: null },
    _v10$v = _v10.v9,
    v9 = _v10$v === undefined ? 26 : _v10$v;
var _v11 = { v10000: 'v10' },
    v10 = _v11.v10;

console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v8] = " + v8);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v9] = " + v9);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v10] = " + v10);
console.log("");

// var {v11: {v12}} = {v13: 'v13'}; // 报错
/**
 * 等号左边对象的 v11 属性，对应一个子对象,其中有个属性是 v13
 * 右边解析 {v13: 'v13'} 的时候,v11 就是一个 undefined,无法取到对象属性 v12,直接报错
 */
var v14 = { v15: 'v15' };
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v14.v15] = " + v14.v15);
console.log("");

/**
 * JavaScript 引擎会将 {...} 理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript
 * 将其解释为代码块，才能解决这个问题
 * 放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系
 */
var v16;
// {v16} = {v16: 26}; Error
// Right
var _v12 = { v16: 26 };
v16 = _v12.v16;
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v16] = " + v16);
console.log("");

/**
 * 虽然毫无意义，但是语法是合法的
 */

_objectDestructuringEmpty([true, false]);

var _Save2 = 'Save';

_objectDestructuringEmpty(_Save2);

/**
 * 将现有对象的方法，赋值到某个变量
 * Math 对象的对数、正弦、余弦三个方法
 */
_objectDestructuringEmpty([]);

var ml = Math.log,
    ms = Math.sin,
    mc = Math.cos;

console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathLog] = " + ml);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathSin] = " + ms);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathCos] = " + mc);
console.log("");

/**
 * 数组
 */
var s2 = ["Save", "you", "from", "anything"];
var s2Length = s2.length,
    firstElement = s2[0],
    lastElement = s2[s2.length - 1];

console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[s2Length] = " + s2Length);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[firstElement] = " + firstElement);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[lastElement] = " + lastElement);

//# sourceMappingURL=destructuring-4-compiled.js.map