/**
 * Created by：CaMnter
 */

/*******************
 * 扩展运算符的应用 *
 *******************/

/**
 * 1. 合并数组
 */
var a1 = [3, 4, 5, 6, 7];
var a2 = [8, 9];
var a3 = [10];
// ES5
console.log("[function]\t\t[test-" + 1 + "]\t\t[[1, 2].concat(a1)] = " + [1, 2].concat(a1));
// ES6
console.log("[function]\t\t[test-" + 1 + "]\t\t[[1, 2, ...a1]] = " + [1, 2, ...a1]);

// ES5
console.log("[function]\t\t[test-" + 1 + "]\t\t[a1.concat(a2, a3)] = " + a1.concat(a2, a3));
// ES6
console.log("[function]\t\t[test-" + 1 + "]\t\t[[...a1, ...a2, ...a3]] = " + [...a1, ...a2, ...a3]);
console.log("");

/**
 * 2. 与解构赋值结合
 */
var list = [0, 1, 2, 3, 4, 5, 6, 7];
// ES5
a = list[0];
rest = list.slice(1);
// ES6
[a, ...rest] = list;

// example
const [v1, ...v2] = [1, 2, 3, 4, 5];
console.log("[function]\t\t[test-" + 2 + "]\t\t[v1] = " + v1);
console.log("[function]\t\t[test-" + 2 + "]\t\t[v2] = " + v2);
const [v3, ...v4] = [];
console.log("[function]\t\t[test-" + 2 + "]\t\t[v3] = " + v3);
console.log("[function]\t\t[test-" + 2 + "]\t\t[v4] = " + v4);
const [v5, ...v6] = ["Save"];
console.log("[function]\t\t[test-" + 2 + "]\t\t[v5] = " + v5);
console.log("[function]\t\t[test-" + 2 + "]\t\t[v6] = " + v6);
console.log("");

/**
 * 3. 函数的返回值
 *
 * JavaScript 的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。扩展运算符提供了解决这个问题的
 * 一种变通方法
 */
var returnArray = [2017, 7, 17];
var date = new Date(...returnArray);

/**
 * 4. 字符串
 */
console.log("[function]\t\t[test-" + 3 + "]\t\t[[...'Save']] = " + [...'Save']);

/**
 * 能够正确识别 32 位的 Unicode 字符
 *
 * \uD83D\uDE80 会被识别为两个字符,这是错误的
 */
console.log("[function]\t\t[test-" + 3 + "]\t\t['x\uD83D\uDE80y'.length] = " + 'x\uD83D\uDE80y'.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t['x\uD83D\uDE80y'.split('').reverse().join('')] = " + 'x\uD83D\uDE80y'.split('').reverse().join(''));
console.log("[function]\t\t[test-" + 3 + "]\t\t[[...'x\uD83D\uDE80y'].length] = " + [...'x\uD83D\uDE80y'].length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[[...'x\uD83D\uDE80y'].reverse().join('')] = " + [...'x\uD83D\uDE80y'].reverse().join(''));
console.log("");
function stringLength(string) {
    return [...string].length;
}

/**
 * 5. 实现了 Iterator 接口的对象
 *
 * 对象是不行的, Map Set Generator 都可以
 */
let o1 = {
    '0': "S",
    '1': "a",
    '2': "v",
    '3': "e",
    length: 4
}
// let o1Array = [...o1]; // error

let m1 = new Map([
    ['S', 'S'],
    ['a', 'a'],
    ['v', 'v'],
    ['e', 'e']
]);
console.log("[function]\t\t[test-" + 4 + "]\t\t[[...m1.keys()]] = " + [...m1.keys()]);

/**
 * 变量 go 是一个 Generator 函数，执行后返回的是一个遍历器对象，对这个遍历器对象执行扩展运算符，就会将内部
 * 遍历得到的值，转为一个数组
 */
var go = function*() {
    yield 'S';
    yield 'a';
    yield 'v';
    yield 'e';
};
console.log("[function]\t\t[test-" + 4 + "]\t\t[[...go()]] = " + [...go()]);



