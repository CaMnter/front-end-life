/**
 * Created by：CaMnter
 */

/**********************
 * 箭头函数 - 基本用法 *
 **********************/

var arrowFunction1 = v => v;
// 等同于
function af1(v) {
    return v;
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[arrowFunction1(67)] = " + arrowFunction1(67));

/**
 * 没有参数
 */
var arrowFunction2 = () => 77;
// 等同于
function af2() {
    return 77;
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[arrowFunction2()] = " + arrowFunction2());

var arrowFunction3 = (x, y) => x + y;
// 等同于
function af3(x, y) {
    return x + y;
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[arrowFunction3(6, 7)] = " + arrowFunction3(6, 7));
console.log("");

/**
 * 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 return 语句返回
 */
var arrowFunction4 = (x, y) => {
    x += x;
    y += y;
    return x + y;
};
console.log("[function]\t\t[test-" + 2 + "]\t\t[arrowFunction4(6 + 7)] = " + arrowFunction4(6, 7));
console.log("");

/**
 * 用的多
 * 
 * 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
 */
var arrowFunction5 = name => ({name: name, sign: "Save you from anything"});
console.log("[function]\t\t[test-" + 3 + "]\t\t[arrowFunction5('CaMnter').name] = " + arrowFunction5('CaMnter').name);
console.log("[function]\t\t[test-" + 3 + "]\t\t[arrowFunction5('CaMnter').sign] = " + arrowFunction5('CaMnter').sign);
console.log("");

/**
 * 箭头函数可以与变量解构结合使用
 */
var arrowFunction6 = ({name, sign}) => ({name: name, sign: sign});
console.log("[function]\t\t[test-" + 4 + "]\t\t[arrowFunction6({name: 'CaMnter', sign: 'Save you from anything'}).name] = " + arrowFunction6({
        name: 'CaMnter',
        sign: 'Save you from anything'
    }).name);
console.log("[function]\t\t[test-" + 4 + "]\t\t[arrowFunction6({name: 'CaMnter', sign: 'Save you from anything'}).sign] = " + arrowFunction6({
        name: 'CaMnter',
        sign: 'Save you from anything'
    }).sign);
console.log("");

/**
 * 箭头函数使得表达更加简洁
 */
const isEven = z => z % 2 == 0;
const square = z => z * z;

/**
 * 简化回调函数
 */
[2, 6, 7].map(function (z) {
    return '1' + z;
});
// 简化后
[2, 6, 7].map(z => '1' + z)
console.log("[function]\t\t[test-" + 5 + "]\t\t[[2, 6, 7].map(z => '1' + z)] = " + [2, 6, 7].map(z => '1' + z));


var r1 = [6, 2, 7].sort(function (a, b) {
    return a - b;
});
var r2 = [6, 2, 7].sort((a, b) => a - b);
console.log("[function]\t\t[test-" + 5 + "]\t\t[[6, 2, 7].sort((a, b) => a - b)] = " + [6, 2, 7].sort((a, b) => a - b));
console.log("");
const getArray1 = (...args) => args;
const getArray2 = (z, ...array) => [z, array]
console.log("[function]\t\t[test-" + 6 + "]\t\t[getArray1(2, 6, 7)] = " + getArray1(2, 6, 7));
// [5, [2, 6, 7]]
console.log("[function]\t\t[test-" + 6 + "]\t\t[getArray2(5, 2, 6, 7)] = " + getArray2(5, 2, 6, 7));




