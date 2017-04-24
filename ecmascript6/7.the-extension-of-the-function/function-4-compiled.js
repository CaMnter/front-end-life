"use strict";

var _console, _console2;

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

function f1() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            sum += value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
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
var sortNumbers2 = function sortNumbers2() {
    for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        numbers[_key2] = arguments[_key2];
    }

    return numbers.sort();
};

/**
 * rest 参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量
 */
function f2(array) {
    for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        items[_key3 - 1] = arguments[_key3];
    }

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
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function(v) {}).length] = " + function (v) {}.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function(...v) {}).length] = " + function () {}.length);
console.log("[function]\t\t[test-" + 3 + "]\t\t[(function(u, v) {}).length] = " + function (u) {}.length);
console.log("");

/**************
 * 扩展运算符 *
 **************/

/**
 * ...数组
 * 
 * 扩展运算符（ spread ）是三个点（...）。它好比 rest 参数 的逆运算，将一个数组转为用逗号分隔的参数序列
 */
(_console = console).log.apply(_console, ["[function]\t\t[test-" + 5 + "]\t\t[...[2, 3, 3]] = "].concat([2, 3, 3]));
(_console2 = console).log.apply(_console2, ["[function]\t\t[test-" + 5 + "]\t\t[2, ...[3, 3, 3], 67] = " + 2].concat([3, 3, 3], [67]));
console.log("");

function push(array) {
    for (var _len4 = arguments.length, items = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        items[_key4 - 1] = arguments[_key4];
    }

    array.push.apply(array, items);
}

function add(x, y) {
    return x + y;
}

console.log("[function]\t\t[test-" + 6 + "]\t\t[add(...[2, 67])] = ", add.apply(undefined, [2, 67]));
console.log("");

/**
 * 扩展运算符与正常的函数参数可以结合使用
 */
function f(v, w, x, y, z) {
    return v + w + x + y + z;
}
var args = [2, 3, 3];
f.apply(undefined, [-1].concat(args, [2], [6, 7]));
console.log("[function]\t\t[test-" + 7 + "]\t\t[f(-1, ...args, 2, ...[6, 7])] = ", f.apply(undefined, [-1].concat(args, [2], [6, 7])));

//# sourceMappingURL=function-4-compiled.js.map