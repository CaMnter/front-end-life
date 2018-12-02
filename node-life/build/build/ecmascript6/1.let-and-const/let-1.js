/**
 * Created by：CaMnter
 */

/************
 * let 命令 *
 ************/

/*****
 * 1 *
 *****/

/**
 * ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只
 * 在 let 命令所在的代码块内有效
 */
{
    let a = 6;
    var b = 16;
}
// console.log(a); // 报错
console.log("[let]\t\t[test-" + 1 + "]\t\t[i] = " + b);
console.log("");


/*****
 * 2 *
 *****/

/**
 * for循环的计数器，就很合适使用let命令。
 */
for (let i = 0; i < 6; i++) {
    console.log("[let]\t\t[test-" + 2 + "]\t\t[i] = " + i);
}
/**
 * 计数器 i 只在 for 循环体内有效，在循环体外引用就会报错。
 */
// console.log("[let]\t\t[test-" + 2 + "]\t\t[i] = " + i); // 报错
console.log("");


/*****
 * 3 *
 *****/

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log("[let]\t\t[test-" + 3 + "]\t\t[i] = " + i);
        console.log("");
    }
}
/**
 * 变量 i 是 var 声明的，在全局范围内都有效。所以每一次循环，新的 i 值都
 * 会覆盖旧值，导致最后输出的是最后一轮的 i 的值
 */
a[6]();

/*****
 * 4 *
 *****/

/**
 * 如果使用 let，声明的变量仅在块级作用域内有效，最后输出的是 6
 */
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log("[let]\t\t[test-" + 4 + "]\t\t[i] = " + i);
        console.log("");
    }
}
a[6]();
/**
 * 上面代码中，变量 i 是 let 声明的，当前的i只在本轮循环有效，所以每一次循环的 i 其实都是一个新的变
 * 量，所以最后输出的是 6。你可能会问，如果每一轮循环的变量 i 都是重新声明的，那它怎么知道上一轮循环的
 * 值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量 i
 * 时，就在上一轮循环的基础上进行计算。
 */


