/**
 * Created by：CaMnter
 */

/***************
 * Object.is() *
 ***************/

/**
 * ==    会自动转换数据类型
 * ===   NaN 不等于自身, 以及 +0 等于 -0
 *
 * ES6 提出 “Same-value equality”（同值相等）算法，用来解决这个问题。Object.is 就是部署这个算法的新方法。
 * 它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
 */
console.log("[object]\t\t[test-" + 1 + "]\t\t[Object.is('Save', 'Save')] = " + Object.is('Save', 'Save'));
console.log("[object]\t\t[test-" + 1 + "]\t\t[Object.is({}, {})] = " + Object.is({}, {}));
console.log("");

/**
 * 可以判断 +0 和 -0 是不等的
 * 可以判断 NaN 等于 NaN
 */
console.log("[object]\t\t[test-" + 2 + "]\t\t[(+0 === -0)] = " + (+0 === -0));
console.log("[object]\t\t[test-" + 2 + "]\t\t[(NaN === NaN)] = " + (NaN === NaN));
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.is(+0, -0)] = " + Object.is(+0, -0));
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.is(NaN, NaN)] = " + Object.is(NaN, NaN));
console.log("");

// ES5 部署 Object.is
Object.defineProperty(Object, 'is', {
    value: function (x, y) {
        if (x === y) {
            // 针对 +0 不等于 -0 的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对 NaN 的情况
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.is(+0, -0)] = " + Object.is(+0, -0));
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.is(NaN, NaN)] = " + Object.is(NaN, NaN));