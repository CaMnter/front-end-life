"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/**********************************
 * Iterator 接口与 Generator 函数 *
 *********************************/

require("babel-polyfill");

(function () {
    var generator = {};
    // Symbol.iterator 可以直接写 generator 函数
    generator[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 2;

                    case 2:
                        _context.next = 4;
                        return 3;

                    case 4:
                        _context.next = 6;
                        return 3;

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
    console.log("[iterator]  [test-" + 1 + "]  [...generator] = ", [].concat(_toConsumableArray(generator)));

    // 简洁写法
    var smartGenerator = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return 'save';

                    case 2:
                        _context2.next = 4;
                        return 'you';

                    case 4:
                        _context2.next = 6;
                        return 'from';

                    case 6:
                        _context2.next = 8;
                        return 'anything';

                    case 8:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = smartGenerator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

/*********************************
 * 遍历器对象的 return()，throw() *
 *********************************/

/**
 * Iterator 对象除了 next 方法外还有 return 和 throw 方法
 *
 * next 必须
 * return 非必须
 * throw 非必须
 */

/**
 * return 的场合
 *
 * 如果 for...of 循环提前退出（ 出错，break 或 continue 等 ）
 * 就会调用 return
 *
 * 如果一个对象在完成遍历前，需要清理或释放资源，就可以部署 return 方法
 *
 * 注意，return 方法必须返回一个对象
 */
(function () {
    function readLinesSync(file) {
        return {
            next: function next() {
                if (file.isAtEndOfFile()) {
                    file.close();
                    return { done: true };
                }
            },
            return: function _return() {
                file.close();
                return { done: true };
            }
        };
    }
})();

/********
 * 数组 *
 ********/

/**
 * 实例一：
 * 对象上用 数组的 Iterator 和 数据
 */
(function () {
    var source = ['save', 'you', 'from', 'anything'];
    var target = {};
    target[Symbol.iterator] = source[Symbol.iterator].bind(source);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = target[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log("[iterator]  [test-" + 2 + "]  [value] = ", value);
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
 * for...in
 * for...of
 */
(function () {
    var target = ['save', 'you', 'from', 'anything'];
    // index
    for (var index in target) {
        console.log("[iterator]  [test-" + 3 + "]  [index] = ", index);
    }
    // value
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = target[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var value = _step3.value;

            console.log("[iterator]  [test-" + 3 + "]  [value] = ", value);
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

/**
 * for...of 循环调用遍历器接口
 * 数组的遍历器接口 只返回 索引是数字的属性
 */
(function () {
    var target = ['save', 'you', 'from', 'anything'];
    target.forever = 'forever';
    console.log("[iterator]  [test-" + 4 + "]  [target] = ", target);
    // forever 不是数组 index
    for (var index in target) {
        console.log("[iterator]  [test-" + 4 + "]  [index] = ", index);
    }
    // for...of 不返回
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = target[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var value = _step4.value;

            console.log("[iterator]  [test-" + 4 + "]  [value] = ", value);
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
})();

//# sourceMappingURL=iterator-4-compiled.js.map