"use strict";

/**
 * Created by：CaMnter
 */

/******************
 * Generator next *
 ******************/

require("babel-polyfill");

/**
 * yield 语句本身没有 具体返回值，一直返回 undefined
 * next 方法可以加一个参数，作为上一次 yield 的返回值
 */

/**
 * 实例：初始化遍历
 */
(function () {
    var _marked = [resetTraverse].map(regeneratorRuntime.mark);

    function resetTraverse() {
        var i, reset;
        return regeneratorRuntime.wrap(function resetTraverse$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        i = 1;

                    case 1:
                        if (!true) {
                            _context.next = 9;
                            break;
                        }

                        _context.next = 4;
                        return i;

                    case 4:
                        reset = _context.sent;

                        if (reset) {
                            i = 0;
                        }

                    case 6:
                        i++;
                        _context.next = 1;
                        break;

                    case 9:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    }

    var generator = resetTraverse();
    for (var i = 0; i < 2; i++) {
        console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    }
    console.log("[generator]  [test-" + 1 + "]  [generator.next(true)] = ", generator.next(true));
    for (var _i = 0; _i < 2; _i++) {
        console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    }
    console.log('');
})();

/**
 * 复杂例子
 */
(function () {
    var _marked2 = [func].map(regeneratorRuntime.mark);

    function func(v) {
        var x, y;
        return regeneratorRuntime.wrap(function func$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return v + 1;

                    case 2:
                        _context2.t0 = _context2.sent;
                        x = 2 * _context2.t0;
                        _context2.next = 6;
                        return x / 3;

                    case 6:
                        y = _context2.sent;
                        return _context2.abrupt("return", v + x + y);

                    case 8:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _marked2[0], this);
    }

    var generatorA = func(2);
    // 暂停到 yield (v + 1)，调用后 返回 v + 1
    // 得到 3
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());
    // 暂停到 yield (x / 3)，调用后 返回 x / 3
    // x = 2 * (yield (v + 1))，yield (v + 1) = undefined
    // x = 2 * undefined = NaN
    // x / 3 = NaN
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());
    // 暂停到 return，调用后 返回 v + x + y，return 调用后结束
    // x = 2 * (yield (v + 1))，yield (v + 1) = undefined
    // x = 2 * undefined = NaN
    // y = yield (x / 3)，yield (x / 3) = undefined
    // y = undefined
    // v + x + y = 2 + NaN + undefined = NaN
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());

    var generatorB = func(2);
    // 暂停到 yield (v + 1)，调用后 返回 v + 1
    // 得到 3
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next());
    // 暂停到 yield (x / 3)，调用后 返回 x / 3
    // x = 2 * (yield (v + 1))，yield (v + 1) = 3
    // x = 2 * 3 = 6
    // x / 3 = 2
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next(3));
    // 暂停到 return，调用后 返回 v + x + y，return 调用后结束
    // x = 2 * (yield (v + 1))，yield (v + 1) = 3
    // x = 2 * 3 = 6
    // y = yield (x / 3)，yield (x / 3) = 3
    // y = 3
    // v + x + y = 2 + 6 + 3 = 11
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next(3), '\n');
})();

/**
 * 第一次 next 的参数值是失效的
 *
 * 以上面的为例：yield (v + 1)，调用后 返回 v + 1，完全不涉及到 yield (v + 1) 的值，只关心了 yield
 * 后面的 v + 1 的值
 *
 * 如果想要第一调用 next 方法时，参数值生效
 * 需要在 Generator 包一层
 *
 * 实质上就是完成了：
 * 创建 Generator 方法 + 手动调用一次 next
 * 然后这个参数作为 创建 Generator 方法 时的初始值
 */
(function () {
    function wrapperGenerator(generatorFunction) {
        return function () {
            var generator = generatorFunction.apply(undefined, arguments);
            generator.next();
            return generator;
        };
    }

    var wrapped = wrapperGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.t0 = console;
                        _context3.t1 = "[generator]  [test-" + 4 + "]  [yield] = ";
                        _context3.next = 4;
                        return;

                    case 4:
                        _context3.t2 = _context3.sent;

                        _context3.t0.log.call(_context3.t0, _context3.t1, _context3.t2);

                        return _context3.abrupt("return", "done");

                    case 7:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee, this);
    }));

    var generator = wrapped();
    generator.next('Save');
    console.log("[generator]  [test-" + 4 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 向 Generator 输入值的例子
 */
(function () {
    var _marked3 = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        console.log("[generator]  [test-" + 5 + "]  [start]");
                        _context4.t0 = console;
                        _context4.t1 = "[generator]  [test-" + 5 + "]  [ 1. yield ] = ";
                        _context4.next = 5;
                        return;

                    case 5:
                        _context4.t2 = _context4.sent;

                        _context4.t0.log.call(_context4.t0, _context4.t1, _context4.t2);

                        _context4.t3 = console;
                        _context4.t4 = "[generator]  [test-" + 5 + "]  [ 2. yield ] = ";
                        _context4.next = 11;
                        return;

                    case 11:
                        _context4.t5 = _context4.sent;

                        _context4.t3.log.call(_context4.t3, _context4.t4, _context4.t5);

                        _context4.t6 = console;
                        _context4.t7 = "[generator]  [test-" + 5 + "]  [ 3. yield ] = ";
                        _context4.next = 17;
                        return;

                    case 17:
                        _context4.t8 = _context4.sent;

                        _context4.t6.log.call(_context4.t6, _context4.t7, _context4.t8);

                        _context4.t9 = console;
                        _context4.t10 = "[generator]  [test-" + 5 + "]  [ 4. yield ] = ";
                        _context4.next = 23;
                        return;

                    case 23:
                        _context4.t11 = _context4.sent;

                        _context4.t9.log.call(_context4.t9, _context4.t10, _context4.t11);

                    case 25:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _marked3[0], this);
    }

    var generator = generatorFunction();
    generator.next();
    var save = 'Save';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = save[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var char = _step.value;

            generator.next(char);
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
})();

//# sourceMappingURL=generator-3-compiled.js.map