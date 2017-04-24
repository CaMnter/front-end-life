/**
 * Created by：CaMnter
 */

/************************
 * 替代数组的 apply 方法 *
 ************************/

/**
 * 示例一: Math.max
 */

// ES5
console.log("[function]\t\t[test-" + 1 + "]\t\t[Math.max.apply(null, [2, 6, 7])] = " + Math.max.apply(null, [2, 6, 7]));

// ES6
console.log("[function]\t\t[test-" + 1 + "]\t\t[Math.max(...[2, 6, 7])] = " + Math.max(...[2, 6, 7]));
// ES6 的写法等同于普通调用
console.log("[function]\t\t[test-" + 1 + "]\t\t[Math.max(2, 6, 7)] = " + Math.max(2, 6, 7));
console.log("");

/**
 * 示例二: push 函数
 */

// ES5
var a1 = [0, 1, 2];
var a2 = [3, 4, 5];
Array.prototype.push.apply(a1, a2);
console.log("[function]\t\t[test-" + 2 + "]\t\t[a1] = " + a1);

var a3 = [10, 11, 12];
var a4 = [13, 14, 15];
a3.push(...a4);
console.log("[function]\t\t[test-" + 2 + "]\t\t[a3] = " + a3);
console.log("");

/**
 * 示例三: Date
 */
// ES5
console.log("[function]\t\t[test-" + 3 + "]\t\t[new (Date.bind.apply(Date, [null, 2017, 7, 17]))] = " + new (Date.bind.apply(Date, [null, 2017, 7, 17])));
// 普通写法
console.log("[function]\t\t[test-" + 3 + "]\t\t[new Date(2017, 7, 17)] = " + new Date(2017, 7, 17));
// ES6
console.log("[function]\t\t[test-" + 3 + "]\t\t[new Date(...[2017, 7, 17])] = " + new Date(...[2017, 7, 17]));



