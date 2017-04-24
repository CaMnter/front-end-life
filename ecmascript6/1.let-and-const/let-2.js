/**
 * Created by：CaMnter
 */

/*****************
 * 不存在变量提升 *
 *****************/

/**
 * let 不像 var 那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
 */
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

/**
 * 上面代码中，变量 foo 用 var 命令声明，会发生变量提升，即脚本开始运行时，变量 foo 已经
 * 存在了，但是没有值，所以会输出 undefined。变量 bar 用 let 命令声明，不会发生变量提升。这
 * 表示在声明它之前，变量 bar 是不存在的，这时如果用到它，就会抛出一个错误。
 */
