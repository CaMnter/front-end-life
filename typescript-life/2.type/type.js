"use strict";
/**
 * Created by：CaMnter
 */
// any
var anyValue = 0;
anyValue = '';
// number
// 二进制
var binaryLiteral = 10;
// 八进制
var octalLiteral = 484;
// 十进制
var decLiteral = 7;
// 十六进制
var hexLiteral = 0xf00d;
// string
var sign = "Save you from anything " + decLiteral;
// boolean
var flag = true;
// array
var arrayA = [1, 2];
var arrayB = [1, 2];
// 元组
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
var specialArray;
// specialArray = []; // 错误，因为指定了长度 2，第一个为 string 第二个为 number
// specialArray = [7, 'Save you from anything']; // 错误，因为指定了长度 2，第一个为 string 第二个为 number
specialArray = ['Save you from anything', 7];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Blue;
console.log(color);
// void
function f() {
    console.log('function');
}
// null
var nullValue = null;
console.log("\u300Ctypeof\u300D\u300CnullValue\u300D" + typeof nullValue);
// never
// 在函数中它通常表现为抛出异常或无法执行到终止点
var x;
var y;
// 运行正确，never 类型可以赋值给 never类型
x = (function () {
    throw new Error('exception');
})();
// 运行正确，never 类型可以赋值给 数字类型
y = (function () {
    throw new Error('exception');
})();
// 返回值为 never 的函数可以是抛出异常的情况
function error(message) {
    throw new Error(message);
}
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop() {
    while (true) {
    }
}
