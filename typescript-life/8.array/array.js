"use strict";
/**
 * Created by：CaMnter
 */
var array1 = [1, 2, 3, 4];
console.log("array1 : " + array1);
var value;
for (value in array1) {
    console.log("array1 : " + value);
}
// 数组解构
var _a = [1, 2], arrayValue1 = _a[0], arrayValue2 = _a[1];
console.log("arrayValue1 arrayValue2 :  " + arrayValue1 + " " + arrayValue2);
// concat
var array2 = [1, 2].concat([3, 4]);
console.log("array2 : " + array2);
// every
// 检测数值元素的每个元素是否都符合条件
var array3 = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13].every(function (value, index, array) {
    return value > 10;
});
console.log("array3 : " + array3);
// filter
// 检测数值元素，并返回符合条件所有元素的数组
var array4 = [1, 2, 3, 4, 10, 11, 12, 13].filter(function (value, index, array) {
    return value > 10;
});
console.log("array4 : " + array4);
// forEach
// 数组每个元素都执行一次回调函数
var array5 = [1, 2, 3];
array5.forEach(function (value, index, array) {
    console.log("array5 : " + value);
});
// join
// 把数组的所有元素放入一个字符串
var array6 = [1, 2, 3];
console.log("array6 : " + array6.join(' | '));
// map
// 通过指定函数处理数组的每个元素，并返回处理后的数组
var array7 = [1, 2, 3].map(function (value, index, array) {
    return "string " + value;
});
console.log("array7 : " + array7);
// pop
// 删除数组的最后一个元素并返回删除的元素
var array8 = ['Save', 'you'];
console.log("array8 : " + array8.pop());
// slice
// 选取数组的的一部分，并返回一个新数组
var array9 = ['Save', 'you', 'from', 'anything'];
console.log("array9 : " + array9.slice(0, 1) + " " + array9.slice(2, array9.length));
// some
// 检测数组元素中是否有元素符合指定条件
var array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array10Some = array10.some(function (value) {
    return value > 10;
});
console.log("array10 : " + array10Some);
