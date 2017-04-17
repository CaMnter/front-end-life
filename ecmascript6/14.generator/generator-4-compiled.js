'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/*********************
 * Generator for..of *
 *********************/

/**
 * Generator 是一个生成 Iterator 的方法
 * 然而 for...of 就需要 Iterator
 */
(function () {
    var _marked = [generator].map(regeneratorRuntime.mark);

    function generator() {
        return regeneratorRuntime.wrap(function generator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'Save';

                    case 2:
                        _context.next = 4;
                        return 'you';

                    case 4:
                        _context.next = 6;
                        return 'from';

                    case 6:
                        _context.next = 8;
                        return 'anything';

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = generator()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            console.log("[generator]  [test-" + 1 + "]  [value] = ", value);
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
 * 斐波那契算法
 */
(function () {
    var _marked2 = [fibonacci].map(regeneratorRuntime.mark);

    function fibonacci() {
        var previous, current, _ref;

        return regeneratorRuntime.wrap(function fibonacci$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        previous = 0, current = 1;

                    case 1:
                        _ref = [current, previous + current];
                        previous = _ref[0];
                        current = _ref[1];
                        _context2.next = 6;
                        return current;

                    case 6:
                        _context2.next = 1;
                        break;

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _marked2[0], this);
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = fibonacci()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var total = _step2.value;

            if (total > 1000) {
                console.log('');
                break;
            }
            console.log("[generator]  [test-" + 2 + "]  [total] = ", total);
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
})();

/**
 * 遍历对象：第一种写法
 */
(function () {
    var target = {
        save: 'save',
        you: 'you',
        from: 'from',
        anything: 'anything'
    };
    target[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
        var SYMBOL_TYPE, _this, handler, proxy, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, key;

        return regeneratorRuntime.wrap(function _callee$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        SYMBOL_TYPE = 'symbol';
                        _this = target;
                        handler = {
                            ownKeys: function ownKeys(target) {
                                // 过滤掉 Symbol.???
                                return Reflect.ownKeys(target).filter(function (key) {
                                    return (typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== SYMBOL_TYPE;
                                });
                            }
                        };
                        proxy = new Proxy(_this, handler);
                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _iteratorError3 = undefined;
                        _context3.prev = 7;
                        _iterator3 = Object.keys(proxy)[Symbol.iterator]();

                    case 9:
                        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                            _context3.next = 16;
                            break;
                        }

                        key = _step3.value;
                        _context3.next = 13;
                        return [key, target[key]];

                    case 13:
                        _iteratorNormalCompletion3 = true;
                        _context3.next = 9;
                        break;

                    case 16:
                        _context3.next = 22;
                        break;

                    case 18:
                        _context3.prev = 18;
                        _context3.t0 = _context3['catch'](7);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context3.t0;

                    case 22:
                        _context3.prev = 22;
                        _context3.prev = 23;

                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }

                    case 25:
                        _context3.prev = 25;

                        if (!_didIteratorError3) {
                            _context3.next = 28;
                            break;
                        }

                        throw _iteratorError3;

                    case 28:
                        return _context3.finish(25);

                    case 29:
                        return _context3.finish(22);

                    case 30:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee, this, [[7, 18, 22, 30], [23,, 25, 29]]);
    });
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = target[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step4$value = _slicedToArray(_step4.value, 2),
                key = _step4$value[0],
                value = _step4$value[1];

            console.log("[generator]  [test-" + 3 + "]  [key, value] = [", key, ", ", value, "]");
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
 * 遍历对象：第二种写法
 */
(function () {
    var _marked3 = [generatorFunction].map(regeneratorRuntime.mark);

    var target = {
        save: 'save',
        you: 'you',
        from: 'from',
        anything: 'anything'
    };

    function generatorFunction(target) {
        var SYMBOL_TYPE, _this, handler, proxy, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, key;

        return regeneratorRuntime.wrap(function generatorFunction$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        SYMBOL_TYPE = 'symbol';
                        _this = target;
                        handler = {
                            ownKeys: function ownKeys(target) {
                                // 过滤掉 Symbol.???
                                return Reflect.ownKeys(target).filter(function (key) {
                                    return (typeof key === 'undefined' ? 'undefined' : _typeof(key)) !== SYMBOL_TYPE;
                                });
                            }
                        };
                        proxy = new Proxy(_this, handler);
                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        _context4.prev = 7;
                        _iterator5 = Object.keys(proxy)[Symbol.iterator]();

                    case 9:
                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            _context4.next = 16;
                            break;
                        }

                        key = _step5.value;
                        _context4.next = 13;
                        return [key, target[key]];

                    case 13:
                        _iteratorNormalCompletion5 = true;
                        _context4.next = 9;
                        break;

                    case 16:
                        _context4.next = 22;
                        break;

                    case 18:
                        _context4.prev = 18;
                        _context4.t0 = _context4['catch'](7);
                        _didIteratorError5 = true;
                        _iteratorError5 = _context4.t0;

                    case 22:
                        _context4.prev = 22;
                        _context4.prev = 23;

                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }

                    case 25:
                        _context4.prev = 25;

                        if (!_didIteratorError5) {
                            _context4.next = 28;
                            break;
                        }

                        throw _iteratorError5;

                    case 28:
                        return _context4.finish(25);

                    case 29:
                        return _context4.finish(22);

                    case 30:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _marked3[0], this, [[7, 18, 22, 30], [23,, 25, 29]]);
    }

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = generatorFunction(target)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _step6$value = _slicedToArray(_step6.value, 2),
                key = _step6$value[0],
                value = _step6$value[1];

            console.log("[generator]  [test-" + 4 + "]  [key, value] = [", key, ", ", value, "]");
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

    console.log('');
})();

/**
 * 一些运算符
 */
(function () {
    var _marked4 = [saveGenerator].map(regeneratorRuntime.mark);

    function saveGenerator() {
        return regeneratorRuntime.wrap(function saveGenerator$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return 'save';

                    case 2:
                        _context5.next = 4;
                        return 'you';

                    case 4:
                        _context5.next = 6;
                        return 'from';

                    case 6:
                        _context5.next = 8;
                        return 'anything';

                    case 8:
                        return _context5.abrupt('return');

                    case 11:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _marked4[0], this);
    }

    console.log("[generator]  [test-" + 5 + "]  [...saveGenerator()] = ", [].concat(_toConsumableArray(saveGenerator())));
    console.log("[generator]  [test-" + 5 + "]  [Array.from(saveGenerator())] = ", Array.from(saveGenerator()));

    var _saveGenerator = saveGenerator(),
        _saveGenerator2 = _slicedToArray(_saveGenerator, 4),
        s = _saveGenerator2[0],
        y = _saveGenerator2[1],
        f = _saveGenerator2[2],
        a = _saveGenerator2[3];

    console.log("[generator]  [test-" + 5 + "]  [s] = ", s);
    console.log("[generator]  [test-" + 5 + "]  [y] = ", y);
    console.log("[generator]  [test-" + 5 + "]  [f] = ", f);
    console.log("[generator]  [test-" + 5 + "]  [a] = ", a);
})();

//# sourceMappingURL=generator-4-compiled.js.map