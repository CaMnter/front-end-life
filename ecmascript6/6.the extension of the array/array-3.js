/**
 * Created by：CaMnter
 */

/*************************
 * find() 和 findIndex() *
 *************************/

/**
 * 数组实例的 find 方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回
 * 调函数，直到找出第一个返回值为 true 的成员，然后返回该成员。如果没有符合条件的成员，则返回 undefined
 */
console.log("[array]\t\t[test-" + 1 + "]\t\t[[-2, -6, -7, 2, 6, 7].find(n => n < 0)] = " + [-2, -6, -7, 2, 6, 7].find(n => n < 0));
console.log("");

/**
 * find 方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组
 */
console.log("[array]\t\t[test-" + 2 + "]\t\t[[-2, -6, -7, 2, 6, 7].find(n => n < 0)] = " + [-2, -6, -7, 2, 6, 7].find(function (value, index, array) {
        console.log("[array]\t\t[test-" + 2 + "]\t\t[value] = " + value + "\t\t[index] = " + index + "\t\t[array] = " + array);
        return value > 2;
    }));
console.log("");

/**
 * findIndex 方法的用法与 find 方法非常类似，返回第一个符合条件的数组成员的 [位置]，如果所有成员都不符合条件
 * 则返回-1
 */
console.log("[array]\t\t[test-" + 3 + "]\t\t[[-2, -6, -7, 2, 6, 7].find(n => n > 2)] = " + [-2, -6, -7, 2, 6, 7].find(n => n > 2));
console.log("[array]\t\t[test-" + 3 + "]\t\t[[-2, -6, -7, 2, 6, 7].find(n => n > 26)] = " + [-2, -6, -7, 2, 6, 7].find(n => n > 26));
console.log("[array]\t\t[test-" + 3 + "]\t\t[[-2, -6, -7, 2, 6, 7].findIndex(n => n > 2)] = " + [-2, -6, -7, 2, 6, 7].findIndex(n => n > 2));
console.log("[array]\t\t[test-" + 3 + "]\t\t[[-2, -6, -7, 2, 6, 7].findIndex(n => n > 26)] = " + [-2, -6, -7, 2, 6, 7].findIndex(n => n > 26));
console.log("");

/**
 * 这两个方法都可以发现 NaN，弥补了数组的 IndexOf 方法的不足
 */
console.log("[array]\t\t[test-" + 4 + "]\t\t[[NaN].indexOf(NaN)] = " + [NaN].indexOf(NaN));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[NaN].find(v => Object.is(NaN, v))] = " + [NaN].find(v => Object.is(NaN, v)));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[NaN].findIndex(v => Object.is(NaN, v))] = " + [NaN].findIndex(v => Object.is(NaN, v)));
console.log("");


/**********
 * fill() *
 **********/

/**
 * fill 方法使用给定值，填充一个数组
 */
console.log("[array]\t\t[test-" + 5 + "]\t\t[['S', 'a', 'v', 'e'].fill(7)] = " + ['S', 'a', 'v', 'e'].fill(7));
console.log("[array]\t\t[test-" + 5 + "]\t\t[new Array(7).fill(7)] = " + new Array(7).fill(7));
console.log("");

/**
 * fill 方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去
 * fill 方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
 */
console.log("[array]\t\t[test-" + 5 + "]\t\t[['S', 'a', 'v', 'e'].fill(7, 3, 4)] = " + ['S', 'a', 'v', 'e'].fill(7, 3, 4));
console.log("");


/*********************************
 * entries()，keys() 和 values() *
 *********************************/

/**
 * keys() 是对键名的遍历
 * values() 是对键值的遍历
 * entries() 是对键值对
 */

for (let key of ['S', 'a', 'v', 'e'].keys()) {
    console.log("[array]\t\t[test-" + 6 + "]\t\t[key] = " + key);
}
console.log("");
for (let value of ['S', 'a', 'v', 'e']) {
    console.log("[array]\t\t[test-" + 7 + "]\t\t[value] = " + value);
}
console.log("");
for (let [key,value] of ['S', 'a', 'v', 'e'].entries()) {
    console.log("[array]\t\t[test-" + 8 + "]\t\t[key] = " + key + "\t\t[value] = " + value);
}
console.log("");

let entries = ['S', 'a', 'v', 'e'].entries();
console.log("[array]\t\t[test-" + 8 + "]\t\t[entries.next().value] = " + entries.next().value);
console.log("[array]\t\t[test-" + 8 + "]\t\t[entries.next().value] = " + entries.next().value);
console.log("[array]\t\t[test-" + 8 + "]\t\t[entries.next().value] = " + entries.next().value);
console.log("[array]\t\t[test-" + 8 + "]\t\t[entries.next().value] = " + entries.next().value);
console.log("[array]\t\t[test-" + 8 + "]\t\t[entries.next().value] = " + entries.next().value);



