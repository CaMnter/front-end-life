"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by：CaMnter
 */

/*****************
 * 对象的解构赋值 *
 *****************/

/**
 * 解构不仅可以用于数组，还可以用于对象
 */
var _v1$v = { v1: "v1", v2: "v2" },
    v1 = _v1$v.v1,
    v2 = _v1$v.v2;

console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("");

/**
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次
 * 序，变量必须与属性同名，才能取到正确的值
 */
var _v = { v4: "v4" },
    v3 = _v.v3,
    v4 = _v.v4;

console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v4] = " + v4);
console.log("");

/**
 * 如果变量名与属性名不一致
 */
var _v2 = { v5: "v4" },
    v6 = _v2.v5;

console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v6] = " + v6);
console.log("");
var o1 = { v7: "v7", v8: "v8" };
var v9 = o1.v7,
    v10 = o1.v8;

console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v9] = " + v9);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v10] = " + v10);
console.log("");
/**
 * 上面代码中，v7 v8 是匹配的模式，v9 v10 才是变量。真正被赋值的是变量 v9 v10 ，而不是模式 v7 v8
 */

/**
 * 注意，采用这种写法时，变量的声明和赋值是一体的。对于 let 和 const
 * 来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错
 *
 * var 就可以
 */
var v11 = void 0;
// let {v11} = {v11: 26}; // 报错
var _v3 = { v11: 26 },
    v = _v3.v11;
// let {v:v11} = {v:26}; // 报错

var _v4 = { v12: 261 },
    v12 = _v4.v12; // 不报错

var _v5 = { v: 262 },
    v12 = _v5.v; // 不报错

console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[v12] = " + v12);
console.log("");

/**
 * 上面代码中 let 命令下面一行的圆括号是必须的，否则会报错。因为解析器会将起首的大括号，理解成一个代码块，而不是赋值语句
 */
var v13 = void 0;
var _v6 = { v13: 261 };
v13 = _v6.v13;

var v14 = void 0;
var _v7 = { v14: 262 };
v14 = _v7.v14;

console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v13] = " + v13);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v14] = " + v14);
console.log("");

/**
 * 解构也可以用于嵌套结构的对象
 */
var o2 = {
  s1: ["Save", {
    v16: "you from anything"
  }]
};

var _o2$s = _slicedToArray(o2.s1, 2),
    v15 = _o2$s[0],
    v16 = _o2$s[1].v16;

console.log("[destructuring]\t\t[test-" + 7 + "]\t\t[v15] = " + v15);
console.log("[destructuring]\t\t[test-" + 7 + "]\t\t[v16] = " + v16);

var o3 = {
  s2: {
    s3: {
      v17: "v17",
      v18: "v18"
    }
  }
};
var _o3$s2$s = o3.s2.s3,
    v17 = _o3$s2$s.v17,
    v18 = _o3$s2$s.v18;

console.log("[destructuring]\t\t[test-" + 7 + "]\t\t[v17] = " + v17);
console.log("[destructuring]\t\t[test-" + 7 + "]\t\t[v18] = " + v18);
console.log("");

/**
 * 嵌套赋值
 */
var o3 = {};
var a1 = [];
var _v19$v = { v19: "v19", v20: "v20" };
o3.v19 = _v19$v.v19;
a1[0] = _v19$v.v20;

console.log("[destructuring]\t\t[test-" + 8 + "]\t\t[v19] = " + o3.v19);
console.log("[destructuring]\t\t[test-" + 8 + "]\t\t[v20] = " + a1[0]);

//# sourceMappingURL=destructuring-3-compiled.js.map