'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/********************
 * ES6 Map 遍历方法 *
 ********************/

/**
 * keys()
 */
var data = [['name', 'CaMnter'], ['save', 'Save you from anything']];
var map = new Map(data);
(function () {
    var keys = map.keys();
    // MapIterator { 'name', 'save' }
    console.log("[structure]    [test-" + 1 + "]    [keys] = ", keys);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.log("[structure]    [test-" + 1 + "]    [key] = ", key);
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

    console.log('');
})();

/**
 * values()
 */
(function () {
    var values = map.values();
    // MapIterator { 'CaMnter', 'Save you from anything' }
    console.log("[structure]    [test-" + 2 + "]    [values] = ", values);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = map.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log("[structure]    [test-" + 2 + "]    [value] = ", value);
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

    console.log('');
})();

/**
 * entries()
 */
(function () {
    // MapIterator { [ 'name', 'CaMnter' ], [ 'save', 'Save you from anything' ] }
    console.log("[structure]    [test-" + 3 + "]    [entries] = ", map.entries());
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = map.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var entry = _step3.value;

            console.log("[structure]    [test-" + 3 + "]    [entry] = ", entry);
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

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = map.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step4$value = _slicedToArray(_step4.value, 2),
                k = _step4$value[0],
                v = _step4$value[1];

            console.log("[structure]    [test-" + 4 + "]    [k, v] = ", [k, v]);
        }

        // 直接写 map 等同于 map.entries()
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = map[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _step5$value = _slicedToArray(_step5.value, 2),
                key = _step5$value[0],
                value = _step5$value[1];

            console.log("[structure]    [test-" + 5 + "]    [key, value] = ", [key, value]);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    console.log('');
})();

/**
 * map[Symbol.iterator] === map.entries
 */
(function () {
    console.log("[structure]    [test-" + 6 + "]    [map[Symbol.iterator] === map.entries] = ", map[Symbol.iterator] === map.entries, '\n');
})();

/**
 * Map >> Array
 * 最快速的方法就是 ... 扩展运算符
 *
 * 甚至，直接 ...map 都可以
 */
(function () {
    console.log("[structure]    [test-" + 7 + "]    [...map.keys()] = ", [].concat(_toConsumableArray(map.keys())));
    console.log("[structure]    [test-" + 7 + "]    [...map.values()] = ", [].concat(_toConsumableArray(map.values())));
    console.log("[structure]    [test-" + 7 + "]    [...map.entries()] = ", [].concat(_toConsumableArray(map.entries())));
    // 直接 [...map]
    console.log("[structure]    [test-" + 7 + "]    [...map] = ", [].concat(_toConsumableArray(map)), '\n');
})();

/**
 * Map 没有 filter 和 map 方法
 * 但是结合 [...map] 转为数组后，可以数显 Map 的 filter 和 map 方法
 */
(function () {
    var map = new Map([[1, 'A'], [2, 'B'], [3, 'C'], [4, 'D']]);
    console.log("[structure]    [test-" + 8 + "]    [map] = ", map);
    var filterMap = new Map([].concat(_toConsumableArray(map)).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return k <= 2;
    }));
    console.log("[structure]    [test-" + 8 + "]    [filterMap] = ", filterMap);
    var mapMap = new Map([].concat(_toConsumableArray(map)).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        return [k, "array_map_" + v];
    }));
    console.log("[structure]    [test-" + 8 + "]    [mapMap] = ", mapMap);
})();

/**
 * Map foreach
 */
(function () {
    map.forEach(function (value, key, map) {
        return console.log("[structure]    [test-" + 9 + "]    Key: %s, Value: %s", key, value);
    });
    console.log('');
})();

/**
 * Map foreach binding this
 */
(function () {
    var reporter = {
        report: function report(key, value) {
            console.log("[structure]    [test-" + 10 + "]    Key: %s, Value: %s", key, value);
        }
    };

    map.forEach(function (value, key, map) {
        // this == reporter，绑定了
        this.report(key, value);
    }, reporter);
})();

//# sourceMappingURL=structure-6-compiled.js.map