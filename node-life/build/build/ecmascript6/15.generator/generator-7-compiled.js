'use strict';

/**
 * Created by：CaMnter
 */

/*******************
 * yield* 语句 - A *
 ******************/

require("babel-polyfill");

/**
 * Generator 方法内部，直接调用 Generator 是没效果的
 */
(function () {
    var _marked = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'save';

                    case 2:
                        _context.next = 4;
                        return 'you';

                    case 4:
                        generatorFunction();

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    };
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = generatorFunction()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
 * yield*
 */
(function () {
    var _marked2 = [otherGeneratorFunction, generatorFunctionA, generatorFunctionB].map(regeneratorRuntime.mark);

    function otherGeneratorFunction() {
        return regeneratorRuntime.wrap(function otherGeneratorFunction$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return 'from';

                    case 2:
                        _context2.next = 4;
                        return 'anything';

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _marked2[0], this);
    };
    function generatorFunctionA() {
        return regeneratorRuntime.wrap(function generatorFunctionA$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return 'save';

                    case 2:
                        _context3.next = 4;
                        return 'you';

                    case 4:
                        return _context3.delegateYield(otherGeneratorFunction(), 't0', 5);

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _marked2[1], this);
    };
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = generatorFunctionA()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log("[generator]  [test-" + 2 + "]  [value] = ", value);
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

    // 等同于

    function generatorFunctionB() {
        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value;

        return regeneratorRuntime.wrap(function generatorFunctionB$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return 'save';

                    case 2:
                        _context4.next = 4;
                        return 'you';

                    case 4:
                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _iteratorError3 = undefined;
                        _context4.prev = 7;
                        _iterator3 = otherGeneratorFunction()[Symbol.iterator]();

                    case 9:
                        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                            _context4.next = 16;
                            break;
                        }

                        value = _step3.value;
                        _context4.next = 13;
                        return value;

                    case 13:
                        _iteratorNormalCompletion3 = true;
                        _context4.next = 9;
                        break;

                    case 16:
                        _context4.next = 22;
                        break;

                    case 18:
                        _context4.prev = 18;
                        _context4.t0 = _context4['catch'](7);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context4.t0;

                    case 22:
                        _context4.prev = 22;
                        _context4.prev = 23;

                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }

                    case 25:
                        _context4.prev = 25;

                        if (!_didIteratorError3) {
                            _context4.next = 28;
                            break;
                        }

                        throw _iteratorError3;

                    case 28:
                        return _context4.finish(25);

                    case 29:
                        return _context4.finish(22);

                    case 30:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _marked2[2], this, [[7, 18, 22, 30], [23,, 25, 29]]);
    };
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = generatorFunctionB()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _value = _step4.value;

            console.log("[generator]  [test-" + 3 + "]  [value] = ", _value);
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
 * yield Generator 与 yield* Generator
 */
(function () {
    var _marked3 = [otherGeneratorFunction, generatorFunctionA, generatorFunctionB].map(regeneratorRuntime.mark);

    function otherGeneratorFunction() {
        return regeneratorRuntime.wrap(function otherGeneratorFunction$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return 2233;

                    case 2:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _marked3[0], this);
    };
    /**
     * yield Generator
     */
    function generatorFunctionA() {
        return regeneratorRuntime.wrap(function generatorFunctionA$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return 'save';

                    case 2:
                        _context6.next = 4;
                        return 'you';

                    case 4:
                        _context6.next = 6;
                        return otherGeneratorFunction();

                    case 6:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _marked3[1], this);
    };
    /**
     * yield* Generator
     */
    function generatorFunctionB() {
        return regeneratorRuntime.wrap(function generatorFunctionB$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return 'save';

                    case 2:
                        _context7.next = 4;
                        return 'you';

                    case 4:
                        return _context7.delegateYield(otherGeneratorFunction(), 't0', 5);

                    case 5:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _marked3[2], this);
    };

    var generatorA = generatorFunctionA();
    var generatorB = generatorFunctionB();

    console.log("[generator]  [test-" + 4 + "]  [generatorA.next().value] = ", generatorA.next().value);
    console.log("[generator]  [test-" + 4 + "]  [generatorA.next().value] = ", generatorA.next().value);
    // 返回一个 Iterator 对象
    console.log("[generator]  [test-" + 4 + "]  [generatorA.next().value] = ", generatorA.next().value);

    console.log("[generator]  [test-" + 4 + "]  [generatorB.next().value] = ", generatorB.next().value);
    console.log("[generator]  [test-" + 4 + "]  [generatorB.next().value] = ", generatorB.next().value);
    console.log("[generator]  [test-" + 4 + "]  [generatorB.next().value] = ", generatorB.next().value);
})();

/**
 * yield* Generator 等同于 for...of Generator
 */
(function () {
    var _marked4 = [concatA, concatB].map(regeneratorRuntime.mark);

    function concatA(previousGenerator, afterGenerator) {
        return regeneratorRuntime.wrap(function concatA$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return previousGenerator;

                    case 2:
                        _context8.next = 4;
                        return afterGenerator;

                    case 4:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _marked4[0], this);
    };
    // 等同于
    function concatB(previousGenerator, afterGenerator) {
        var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, value, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _value2;

        return regeneratorRuntime.wrap(function concatB$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        _context9.prev = 3;
                        _iterator5 = previousGenerator[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            _context9.next = 12;
                            break;
                        }

                        value = _step5.value;
                        _context9.next = 9;
                        return value;

                    case 9:
                        _iteratorNormalCompletion5 = true;
                        _context9.next = 5;
                        break;

                    case 12:
                        _context9.next = 18;
                        break;

                    case 14:
                        _context9.prev = 14;
                        _context9.t0 = _context9['catch'](3);
                        _didIteratorError5 = true;
                        _iteratorError5 = _context9.t0;

                    case 18:
                        _context9.prev = 18;
                        _context9.prev = 19;

                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }

                    case 21:
                        _context9.prev = 21;

                        if (!_didIteratorError5) {
                            _context9.next = 24;
                            break;
                        }

                        throw _iteratorError5;

                    case 24:
                        return _context9.finish(21);

                    case 25:
                        return _context9.finish(18);

                    case 26:
                        _iteratorNormalCompletion6 = true;
                        _didIteratorError6 = false;
                        _iteratorError6 = undefined;
                        _context9.prev = 29;
                        _iterator6 = afterGenerator[Symbol.iterator]();

                    case 31:
                        if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                            _context9.next = 38;
                            break;
                        }

                        _value2 = _step6.value;
                        _context9.next = 35;
                        return _value2;

                    case 35:
                        _iteratorNormalCompletion6 = true;
                        _context9.next = 31;
                        break;

                    case 38:
                        _context9.next = 44;
                        break;

                    case 40:
                        _context9.prev = 40;
                        _context9.t1 = _context9['catch'](29);
                        _didIteratorError6 = true;
                        _iteratorError6 = _context9.t1;

                    case 44:
                        _context9.prev = 44;
                        _context9.prev = 45;

                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }

                    case 47:
                        _context9.prev = 47;

                        if (!_didIteratorError6) {
                            _context9.next = 50;
                            break;
                        }

                        throw _iteratorError6;

                    case 50:
                        return _context9.finish(47);

                    case 51:
                        return _context9.finish(44);

                    case 52:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _marked4[1], this, [[3, 14, 18, 26], [19,, 21, 25], [29, 40, 44, 52], [45,, 47, 51]]);
    };
})();

//# sourceMappingURL=generator-7-compiled.js.map