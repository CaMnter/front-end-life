/**
 * Created by：CaMnter
 */


/*************
 * rest 参数 *
 *************/

/**
 * ...变量名
 *
 * ES6 引入 rest 参数（形式为 “...变量名” ），用于获取函数的多余参数，这样就不需要使用 arguments 对象了。
 * rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 */

function f1(...values) {
    let sum = 0;
    for (var value of values) {
        sum += value;
    }
    return sum;
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[f1(2, 6, 7)] = " + f1(2, 6, 7));
console.log("");


/**
 * rest 参数代替 arguments 变量
 * rest 参数的写法更自然也更简洁
 */
// arguments 变量的写法
function sortNumbers1() {
    return Array.prototype.slice.call(arguments).sort();
}
// rest 参数的写法
const sortNumbers2 = (...numbers) => numbers.sort();

/**
 * rest 参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量
 */
function f2(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}

var a1 = [];
f2(a1, 2, 6, 7);
console.log("[function]\t\t[test-" + 2 + "]\t\t[a1] = " + a1);

/**
 * rest 参数后, 不能有其他参数
 */
// 报错
// function f3(a, ...b, c) {
// ...
// }

/**
 * 函数 length 属性不包含, rest 参数
 */
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function(v) {}).length] = " + (function (v) {
    }).length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function(...v) {}).length] = " + (function (...v) {
    }).length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function(u, v) {}).length] = " + (function (u, ...v) {
    }).length)
console.log("");


/**************
 * 扩展运算符 *
 **************/

/**
 * ...数组
 * 
 * 扩展运算符（ spread ）是三个点（...）。它好比 rest 参数 的逆运算，将一个数组转为用逗号分隔的参数序列
 */
console.log("[function]\t\t[test-" + 5 + "]\t\t[...[2, 3, 3]] = ", ...[2, 3, 3]);
console.log("[function]\t\t[test-" + 5 + "]\t\t[2, ...[3, 3, 3], 67] = " + 2, ...[3, 3, 3], 67);
console.log("");

function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

console.log("[function]\t\t[test-" + 6 + "]\t\t[add(...[2, 67])] = ", add(...[2, 67]));
console.log("");

/**
 * 扩展运算符与正常的函数参数可以结合使用
 */
function f(v, w, x, y, z) {
    return v + w + x + y + z;
}
var args = [2, 3, 3];
f(-1, ...args, 2, ...[6, 7]);
console.log("[function]\t\t[test-" + 7 + "]\t\t[f(-1, ...args, 2, ...[6, 7])] = ", f(-1, ...args, 2, ...[6, 7]));

