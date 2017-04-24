/**
 * Created by：CaMnter
 */

/**********
 * 默认值 *
 **********/

/**
 * 解构赋值允许指定默认值
 */
var [v1 = true] = [];
var [v2, v3 = 'b'] = ['a']; // v2='a', v3='b'
var [v4, v5 = 'b'] = ['a', undefined]; // v4='a', v5='b'
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v4] = " + v4);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v5] = " + v5);
console.log("");

/**
 * 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不
 * 严格等于 undefined，默认值是不会生效的
 */
var [v6= 'save'] = [undefined];
var [v7 = 26] = [null];
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v6] = " + v6);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v7] = " + v7);
console.log("");

/**
 * 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
 */
function f1() {
    console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[f1]");
}
let [v8 = f1()] = [26];
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v8] = " + v8);
let v9;
if ([1][0] === undefined) {
    v9 = f1();
} else {
    v9 = [233][0];
}
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v9] = " + v9);
console.log("");

let [v10 = 1, v11 = v10] = [];     // v10=1; v11=1
let [v12 = 1, v13 = v12] = [2];    // v12=2; v13=2
let [v14 = 1, v15 = v14] = [1, 2]; // v14=1; v15=2
// let [v16 = v17, v17 = 1] = [];     // ReferenceError
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v10] = " + v10);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v11] = " + v11);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v12] = " + v12);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v13] = " + v13);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v14] = " + v14);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v15] = " + v15);
