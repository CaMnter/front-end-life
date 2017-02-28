"use strict";

/**
 * Created by：CaMnter
 */

/*****************
 * 嵌套的箭头函数 *
 *****************/

/**
 * ES5
 *
 * 多重嵌套函数.
 */
function insert(target) {
    return {
        into: function into(array) {
            return {
                after: function after(value) {
                    array.splice(array.indexOf(value) + 1, 0, target);
                    return array;
                }
            };
        }
    };
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[insert(6).into([2, 7]).after(2)] = " + insert(6).into([2, 7]).after(2));
console.log("");

/**
 * ES6
 *
 * 箭头函数嵌套
 */
var insertFunction = function insertFunction(target) {
    return {
        into: function into(array) {
            return {
                after: function after(value) {
                    array.splice(array.indexOf(value) + 1, 0, target);
                    return array;
                }
            };
        }
    };
};
console.log("[function]\t\t[test-" + 2 + "]\t\t[insertFunction(6).into([2, 7]).after(2)] = " + insertFunction(6).into([2, 7]).after(2));
console.log("");

/**
 * 部署管道机制（pipeline）
 */
var outer = function outer(z) {
    return z + 1;
};
var inter = function inter(z) {
    return z * 2;
};
console.log("[function]\t\t[test-" + 3 + "]\t\t[outer(inter(6))] = " + outer(inter(6)));

/**
 * 方便地改写 λ 演算
 */
// ES5
// fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)));

// ES6
var fix = function fix(f) {
    return function (x) {
        return f(function (v) {
            return x(x)(v);
        });
    }(function (x) {
        return f(function (v) {
            return x(x)(v);
        });
    });
};

//# sourceMappingURL=function-11-compiled.js.map