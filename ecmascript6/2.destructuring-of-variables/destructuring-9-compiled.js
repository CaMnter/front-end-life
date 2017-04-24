"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by：CaMnter
 */

/***********************
 * 变量的解构赋值的用途 *
 ***********************/

/**
 * 交换变量的值
 */
var v1 = 16;
var v2 = 26;
var _ref = [v2, v1];
v1 = _ref[0];
v2 = _ref[1];

console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("");

/**
 * 从函数返回多个值
 * 数组
 * 对象
 */
function f1() {
    return [261, 262, 263];
}

var _f = f1(),
    _f2 = _slicedToArray(_f, 3),
    v3 = _f2[0],
    v4 = _f2[1],
    v5 = _f2[2];

console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v4] = " + v4);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v5] = " + v5);
function f2() {
    return {
        v6: 265,
        v7: 266
    };
}

var _f3 = f2(),
    v6 = _f3.v6,
    v7 = _f3.v7;

console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v6] = " + v6);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v7] = " + v7);
console.log("");

/**
 * 函数参数的定义
 */
// 参数是一组有次序的值
function f3(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        x = _ref3[0],
        y = _ref3[1],
        z = _ref3[2];

    return x + y + z;
}
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[f3([1, 2, 3])] = " + f3([1, 2, 3]));
// 参数是一组无次序的值
function f4(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        z = _ref4.z;

    return x + y + z;
}
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[f4({z: 3, y: 2, x: 1})] = " + f4({
    z: 3,
    y: 2,
    x: 1
}));
console.log("");

/**
 * 提取 JSON 数据
 */
var json1 = {
    camnter: "CaMnter",
    number: 26,
    sign: "Save you from anything"
};
var sign = json1.sign,
    number = json1.number,
    camnter = json1.camnter;

console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[camnter] = " + camnter);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[sign] = " + sign);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[number] = " + number);
console.log("");

/**
 * 函数参数的默认值
 */
var o1 = {};
o1.save = function (tag, _ref5) {
    var _ref5$camnter = _ref5.camnter,
        camnter = _ref5$camnter === undefined ? "CaMnter" : _ref5$camnter,
        _ref5$number = _ref5.number,
        number = _ref5$number === undefined ? 26 : _ref5$number,
        _ref5$sign = _ref5.sign,
        sign = _ref5$sign === undefined ? "Save you from anything" : _ref5$sign;

    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[tag] = " + tag);
    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[camnter] = " + camnter);
    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[sign] = " + sign);
    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[number] = " + number);
    console.log("");
};
o1.save("saveFunction1", {});
o1.save("saveFunction2", { camnter: "saveFunction2-CaMnter" });
o1.save("saveFunction3", { camnter: "saveFunction3-CaMnter", number: "saveFunction3-26" });
o1.save("saveFunction4", {
    camnter: "saveFunction4-CaMnter",
    number: "saveFunction4-26",
    sign: "saveFunction4-Save you from anything"
});

/**
 * 遍历 Map 结构
 */
var map = new Map();
map.set('camnter', 'CaMnter');
map.set('number', '26');
map.set('sign', 'Save you from anything');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[key] = " + key + "\t\t[value] = " + value);
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

console.log("");
// 获取键名
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 1),
            key = _step2$value[0];

        console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[key] = " + key);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

console.log("");
// 获取键值
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            value = _step3$value[1];

        console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[value] = " + value);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

console.log("");

/**
 * 输入模块的指定方法
 */

var _require = require("source-map"),
    SourceMapConsumer = _require.SourceMapConsumer,
    SourceNode = _require.SourceNode;

//# sourceMappingURL=destructuring-9-compiled.js.map