"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/***********************************
 * ES6 Map 与其他数据结构的互相转换 *
 ***********************************/

/**
 * Map >> Array
 * 最方便的：扩展运算符 ...
 */
(function () {
    console.log("[structure]  [test-" + 1 + "]  [...new Map([['name', 'CaMnter'], ['save', 'Save you from anything']])] = ", [].concat(_toConsumableArray(new Map([['name', 'CaMnter'], ['save', 'Save you from anything']]))), '\n');
})();

/**
 * Array >> Map
 * 直接作为 Map 的参数即可
 */
(function () {
    console.log("[structure]  [test-" + 2 + "]  [new Map([[1, 'A'], [2, 'B']])] = ", new Map([[1, 'A'], [2, 'B']]), '\n');
})();

/**
 * Map >> Object
 *
 * 如果 key 是 string，那么正常转换
 * 如果 key 非 string，那么会将 key 转为 string
 */
function mapToObject(map) {
    var object = Object.create(null);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            object[key] = value;
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

    return object;
}
(function () {
    var intKeyMap = new Map([[1, 'A'], [2, 'B']]);
    var stringKeyMap = new Map([['name', 'CaMnter'], ['save', 'Save you from anything']]);

    // 会将 key 转为 string
    console.log("[structure]  [test-" + 3 + "]  [mapToObject(intKeyMap)] = ", mapToObject(intKeyMap));
    console.log("[structure]  [test-" + 3 + "]  [mapToObject(stringKeyMap)] = ", mapToObject(stringKeyMap), '\n');
})();

/**
 * Object >> Map
 */
function objectToMap(object) {
    var map = new Map();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = Object.keys(object)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            map.set(key, object[key]);
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

    return map;
}
(function () {
    var object = { 'name': 'CaMnter', 'save': 'Save you from anything' };
    console.log("[structure]  [test-" + 4 + "]  [objectToMap(object)] = ", objectToMap(object), '\n');
})();

/**
 * Map >> JSON
 *
 * 混合 key      ：[...Map] >> JSON.stringify()
 * 纯 string key ：Map >> Object >> JSON.stringify()
 */
(function () {
    // 混合 key
    var mixKeyMap = new Map([[1, 'A'], [true, 'B'], ['C', 'C'], [NaN, 'D']]);
    // 纯 string key
    var stringKeyMap = new Map([['name', 'CaMnter'], ['save', 'Save you from anything']]);
    console.log("[structure]  [test-" + 5 + "]  [objectToMap(object)] = ", JSON.stringify([].concat(_toConsumableArray(mixKeyMap))));
    console.log("[structure]  [test-" + 5 + "]  [objectToMap(object)] = ", JSON.stringify(mapToObject(stringKeyMap)), '\n');
})();

/**
 * JSON >> Map
 */
// 正常情况
function jsonToStringMap(jsonString) {
    return objectToMap(JSON.parse(jsonString));
}
// 不正常情况，如 [[1, 'A'], [true, 'B'], ['C', 'C'], [NaN, 'D']]
function jsonToMap(jsonString) {
    return new Map(JSON.parse(jsonString));
}

(function () {
    console.log("[structure]  [test-" + 6 + "]  [objectToMap(object)] = ", jsonToStringMap('{"name": "CaMnter", "save": "Save you from anything"}'));
    console.log("[structure]  [test-" + 6 + "]  [jsonToMap('[[1, \"A\"], [true, \"B\"], [\"C\", \"C\"]]')] = ", jsonToMap('[[1, "A"], [true, "B"], ["C", "C"]]'));
})();

//# sourceMappingURL=structure-7-compiled.js.map