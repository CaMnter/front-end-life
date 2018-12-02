/**
 * Created by：CaMnter
 */

/**************
 * Array.of() *
 **************/

/**
 * Array.of 方法用于将一组值，转换为数组
 */

/**
 * 这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异
 *
 * 参数 <2 时, 参数表示 数组长度
 * 参数 >2 时, 参数表示 数组的元素
 */
console.log("[array]\t\t[test-" + 1 + "]\t\t[Array()] = " + Array());
console.log("[array]\t\t[test-" + 1 + "]\t\t[Array(6)] = " + Array(6));
console.log("[array]\t\t[test-" + 1 + "]\t\t[Array(2, 6, 7)] = " + Array(2, 6, 7));
console.log("");

console.log("[array]\t\t[test-" + 2 + "]\t\t[Array.of(2, 6, 7)] = " + Array.of(2, 6, 7));
console.log("[array]\t\t[test-" + 2 + "]\t\t[Array.of(7)] = " + Array.of(7));
console.log("[array]\t\t[test-" + 2 + "]\t\t[Array.of(7).length] = " + Array.of(7).length);
console.log("");

/**
 * Array.of 基本上可以用来替代 Array() 或 new Array()
 * 并且不存在由于参数不同而导致的重载。它的行为非常统一
 */
console.log("[array]\t\t[test-" + 3 + "]\t\t[Array.of()] = " + Array.of());
console.log("[array]\t\t[test-" + 3 + "]\t\t[Array.of(undefined)] = " + Array.of(undefined));
console.log("[array]\t\t[test-" + 3 + "]\t\t[Array.of(7)] = " + Array.of(7));
console.log("[array]\t\t[test-" + 3 + "]\t\t[Array.of(6, 7)] = " + Array.of(6, 7));
console.log("");

/**
 * ES5 部署 Array.of
 */
function ArrayOf() {
    return [].slice.call(arguments);
}


/****************
 * copyWithin() *
 ****************/

/**
 * 数组实例的 copyWithin 方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回
 * 当前数组
 *
 * Array.prototype.copyWithin(target, start = 0, end = this.length)
 * -  target（必需）：从该位置开始替换数据。
 * -  start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
 * -  end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
 */
console.log("[array]\t\t[test-" + 4 + "]\t\t[[0, 1, 2, 3, 4].copyWithin(0, 3)] = " + [0, 1, 2, 3, 4].copyWithin(0, 3));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[0, 1, 2, 3, 4].copyWithin(0, 3, 4)] = " + [0, 1, 2, 3, 4].copyWithin(0, 3, 4));
console.log("[array]\t\t[test-" + 4 + "]\t\t[[0, 1, 2, 3, 4].copyWithin(0, 3, 4)] = " + [0, 1, 2, 3, 4].copyWithin(0, -2, -1));
console.log("");
// 将 7 号位复制到 6 号位
let array1 = [].copyWithin.call({
    length: 8,
    7: 2
}, 6, 7);
console.log("[array]\t\t[test-" + 5 + "]\t\t[array1[7]] = " + array1[7]);
console.log("[array]\t\t[test-" + 5 + "]\t\t[array1[6]] = " + array1[6]);
console.log("[array]\t\t[test-" + 5 + "]\t\t[new Int32Array([0, 1, 2, 3, 4]).copyWithin(0, 2)] = " + new Int32Array([0, 1, 2, 3, 4]).copyWithin(0, 2));
console.log("");

/**
 * ES5 部署 copyWithin
 * 利用 [].copyWithin.call()
 */
console.log("[array]\t\t[test-" + 6 + "]\t\t[[].copyWithin.call(new Int32Array([0, 1, 2, 3, 4]), 0, 3, 4)] = " + [].copyWithin.call(new Int32Array([0, 1, 2, 3, 4]), 0, 3, 4));



