"use strict";

/**
 * Created by：CaMnter
 */

/*****************************
 * Generator.prototype.throw *
 *****************************/

require("babel-polyfill");

/**
 * Generator 函数返回的遍历器对象，都有一个 throw 方法
 * 可以在函数体外抛出错误，然后在 Generator 函数体内捕获
 */
(function () {
    var generatorFunction = regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return;

                    case 3:
                        _context.next = 8;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context["catch"](0);

                        console.log("[generator]  [test-" + 1 + "]  [内部捕获] = ", _context.t0);

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 5]]);
    });
    var generator = generatorFunction();
    generator.next();

    try {
        generator.throw('save');
        generator.throw('you');
    } catch (e) {
        console.log("[generator]  [test-" + 1 + "]  [外部捕获] = ", e, '\n');
    }
})();

/**
 * Generator.throw 可以接受参数
 * 还会被 Generator catch 语句接收
 * 建议抛 Error 对象
 */
(function () {
    var generatorFunction = regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return;

                    case 3:
                        _context2.next = 8;
                        break;

                    case 5:
                        _context2.prev = 5;
                        _context2.t0 = _context2["catch"](0);

                        console.log("[generator]  [test-" + 2 + "]  [内部捕获] = ", _context2.t0, '\n');

                    case 8:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 5]]);
    });
    var generator = generatorFunction();
    generator.next();
    generator.throw(new Error('异空间错误：2233'));
})();

/**
 * throw 方法被捕获后，会附带执行下一条 yield 语句
 */
(function () {
    var generatorFunction = regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return 22;

                    case 3:
                        _context3.next = 7;
                        break;

                    case 5:
                        _context3.prev = 5;
                        _context3.t0 = _context3["catch"](0);

                    case 7:
                        _context3.next = 9;
                        return 33;

                    case 9:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 5]]);
    });
    var generator = generatorFunction();
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    // 已经执行到第二个 yield
    console.log("[generator]  [test-" + 3 + "]  [generator.throw()] = ", generator.throw());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 如果 Generator 内部出现异常没捕获的话，就不会执行下去了
 * 下次 next 的 value = undefined，done = true
 */
(function () {
    var _marked = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return 'save';

                    case 2:
                        // 这里不会停
                        console.log("[generator]  [test-" + 4 + "]  [generator console]");
                        // 停
                        throw new Error('');

                    case 6:
                        _context4.next = 8;
                        return 33;

                    case 8:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _marked[0], this);
    };
    function log(generator) {
        var v;
        try {
            v = generator.next();
            console.log("[generator]  [test-" + 4 + "]  [第一次 next]", v);
        } catch (e) {
            console.log("[generator]  [test-" + 4 + "]  [第一次 next - 捕捉错误]", e);
        }
        try {
            v = generator.next();
            console.log("[generator]  [test-" + 4 + "]  [第二次 next]", v);
        } catch (e) {
            console.log("[generator]  [test-" + 4 + "]  [第二次 next - 捕捉错误]", e);
        }
        // 后续都不执行了
        console.log("[generator]  [test-" + 4 + "]  [第三次 next]", generator.next());
        console.log("[generator]  [test-" + 4 + "]  [第四次 next]", generator.next());
        console.log("[generator]  [test-" + 4 + "]  [第四次 next]", generator.next());
    }

    log(generatorFunction());
})();

//# sourceMappingURL=generator-5-compiled.js.map