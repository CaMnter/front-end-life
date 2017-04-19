"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by：CaMnter
 */

/*****************
 * 类似数组的对象 *
 *****************/

/**
 * 正确识别 32 位 UTF-16 字符
 */
(function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = "z\uD83D\uDC0A"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            console.log("[iterator]  [test-" + 1 + "]  [value] = ", value);
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
 * 类似数组的对象
 */
(function () {
    var arrayLike = { length: 4, 0: 'save', 1: 'you', 2: 'from', 3: 'anything' };
    // 报错
    try {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = arrayLike[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var value = _step2.value;
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
    } catch (e) {
        console.log("[iterator]  [test-" + 2 + "]  [e] = ", e);
    }
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = Array.from(arrayLike)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _value = _step3.value;

            console.log("[iterator]  [test-" + 2 + "]  [value] = ", _value);
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

    console.log('');
})();

/********
 * 对象 *
 ********/

/**
 * for...of 不能遍历对象
 * for...in 能拿到对象的属性名，相当于 keys
 */

/**
 * for...in 配合对象本身去遍历对象属性值
 *
 * 或者
 *
 * 对象.keys() + for...of
 */
var camnter = {
    s: 'save',
    y: 'you',
    f: 'from',
    a: 'anything'
};
(function () {
    for (var key in camnter) {
        console.log("[iterator]  [test-" + 3 + "]  [key] = ", key, "  [value] = ", camnter[key]);
    }

    // Object.keys(target) + for...of
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = Object.keys(camnter)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _key = _step4.value;

            console.log("[iterator]  [test-" + 3 + "]  [key] = ", _key, "  [value] = ", camnter[_key]);
        }
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

    console.log('');
})();

/**
 * 用 Generator 包装对象
 */
(function () {
    var _marked = [entries].map(regeneratorRuntime.mark);

    function entries(object) {
        var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, key;

        return regeneratorRuntime.wrap(function entries$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        _context.prev = 3;
                        _iterator5 = Object.keys(object)[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            _context.next = 12;
                            break;
                        }

                        key = _step5.value;
                        _context.next = 9;
                        return [key, object[key]];

                    case 9:
                        _iteratorNormalCompletion5 = true;
                        _context.next = 5;
                        break;

                    case 12:
                        _context.next = 18;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](3);
                        _didIteratorError5 = true;
                        _iteratorError5 = _context.t0;

                    case 18:
                        _context.prev = 18;
                        _context.prev = 19;

                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }

                    case 21:
                        _context.prev = 21;

                        if (!_didIteratorError5) {
                            _context.next = 24;
                            break;
                        }

                        throw _iteratorError5;

                    case 24:
                        return _context.finish(21);

                    case 25:
                        return _context.finish(18);

                    case 26:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
    }

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = entries(camnter)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _step6$value = _slicedToArray(_step6.value, 2),
                key = _step6$value[0],
                value = _step6$value[1];

            console.log("[iterator]  [test-" + 4 + "]  [key] = ", key, "  [value] = ", camnter[key]);
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }
})();

/********
 * 比较 *
 ********/

/**
 * forEach 无法中途跳出，break 命令或 return 命令都不行
 * for...in 循环主要是为遍历对象而设计的，不适用于遍历数组
 *
 * for...of 除了遍历没有实现 Iterator 接口的对象外，都可以快速遍历
 *
 * 对于 没有实现 Iterator 接口的对象，可以实现 实现 [Symbol.iterator] （ 作为一个开发必备的设计素养 ）
 * 当然也可以 对象.keys() + for...of
 */

//# sourceMappingURL=iterator-5-compiled.js.map