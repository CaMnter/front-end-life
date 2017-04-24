/**
 * Created by：CaMnter
 */

/*****************************************
 * Number.parseInt() Number.parseFloat() *
 *****************************************/

/**
 * ES6 将全局方法 parseInt() 和 parseFloat() ，移植到 Number 对象上面，行为完全保持不变
 */
// ES5
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[parseInt(\"267\")] = " + parseInt("267"));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[parseFloat(\"267.267\")] = " + parseFloat("267.267"));
// ES6
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Number.parseInt(\"267\")] = " + Number.parseInt("267"));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Number.parseInt(\"267.267\")] = " + Number.parseFloat("267.267"));
// ===
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Number.parseInt === parseInt] = " + (Number.parseInt === parseInt));
console.log("[numeric]\t\t[test-" + 1 + "]\t\t[Number.parseFloat === parseFloat] = " + (Number.parseFloat === parseFloat));

console.log("");

/**********************
 * Number.isInteger() *
 **********************/

/**
 * Number.isInteger() 用来判断一个值是否为整数。需要注意的是，在 JavaScript 内部，整数和浮点数是同样的储
 * 存方法，所以 3 和 3.0 被视为同一个值
 */
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Number.isInteger(267)] = " + Number.isInteger(267));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Number.isInteger(267.0)] = " + Number.isInteger(267.0));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Number.isInteger(267.1)] = " + Number.isInteger(267.1));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Number.isInteger(\"267\")] = " + Number.isInteger("267"));
console.log("[numeric]\t\t[test-" + 2 + "]\t\t[Number.isInteger(true)] = " + Number.isInteger(true));
console.log("");

/**
 * ES5 部署 Number.isInteger()
 */
(function (global) {
    var floor = Math.floor,
        isFinite = global.isFinite;

    Object.defineProperty(Number, 'isInteger', {
        value: function isInteger(value) {
            return typeof value === 'number' && isFinite(value) &&
                value > -9007199254740992 && value < 9007199254740992 &&
                floor(value) === value;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
})(this);

/******************
 * Number.EPSILON *
 ******************/

/**
 * ES6 在 Number 对象上面，新增一个极小的常量 Number.EPSILON
 */
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.EPSILON] = " + Number.EPSILON);
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[Number.EPSILON.toFixed(20)] = " + Number.EPSILON.toFixed(20));

/**
 * 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的
 */
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[0.1 + 0.2] = " + (0.1 + 0.2));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[0.1 + 0.2 - 0.3] = " + (0.1 + 0.2 - 0.3));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[(0.1 + 0.2 - 0.3).toFixed(20)] = " + (0.1 + 0.2 - 0.3).toFixed(20));

/**
 * 但是如果这个误差能够小于 Number.EPSILON，我们就可以认为得到了正确结果
 * Number.EPSILON 的实质是一个可以接受的误差范围
 */
function withinErrorMargin(left, right) {
    return Math.abs(left - right) < Number.EPSILON;
}
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[withinErrorMargin(0.1 + 0.2, 0.3)] = " + withinErrorMargin(0.1 + 0.2, 0.3));
console.log("[numeric]\t\t[test-" + 3 + "]\t\t[withinErrorMargin(0.2 + 0.2, 0.3)] = " + withinErrorMargin(0.2 + 0.2, 0.3));


