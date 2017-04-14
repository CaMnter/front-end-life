'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by：CaMnter
 */

/**********************
 * Generator 函数基本 *
 *********************/

/**
 * Generator 函数是 ES6 提供的一种异步编程解决方案
 *
 * Generator 函数是一个状态机，封装了多个内部状态
 * 执行 Generator 函数会返回一个遍历器对象，Generator 函数除了状态机，还是一个遍历器对象生成函数
 * 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态
 */

/**
 * Generator 函数是一个普通函数，但是有两个 特征：
 * function 关键字 与 函数名 之间有 * 号
 * yield 语句，定义不同的内部状态
 */

(function () {
    var _marked = [saveGenerator].map(regeneratorRuntime.mark);

    function saveGenerator() {
        return regeneratorRuntime.wrap(function saveGenerator$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'save';

                    case 2:
                        _context.next = 4;
                        return 'you';

                    case 4:
                        _context.next = 6;
                        return 'from';

                    case 6:
                        return _context.abrupt('return', 'anything');

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    };

    // 调用方法生成 Iterator 对象
    var save = saveGenerator();
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next());
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next());
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next());
    console.log("[generator]  [test-" + 1 + "]  [save.next()] = ", save.next(), '\n');

    /*
     * 是 Iterator 就能用 for...of
     * return 不返回值
     */
    save = saveGenerator();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = save[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            console.log("[generator]  [test-" + 2 + "]  [value] = ", value);
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
 * Generator 的 星号 可以随便写在 function 和 方法名之间
 */
(function () {
    var _marked2 = [A, B, C, D].map(regeneratorRuntime.mark);

    function A() {
        return regeneratorRuntime.wrap(function A$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _marked2[0], this);
    }

    function B() {
        return regeneratorRuntime.wrap(function B$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _marked2[1], this);
    }

    function C() {
        return regeneratorRuntime.wrap(function C$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _marked2[2], this);
    }

    function D() {
        return regeneratorRuntime.wrap(function D$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _marked2[3], this);
    }
})();

/*********
 * yield *
 *********/

/**
 * Generator 返回的 Iterator 之所有调用 next 方法才会进入到下一个内部状态
 * 是因为： 提供了一种可以暂停执行的函数，yield 语句就是暂停标记
 *
 * 注意：是调用 next 才执行 yield 后面的语句，而不是 next 执行 yield ???
 * yield 也可以实现 "惰性求值"（ Lazy Evaluation ）的语法功能
 */
(function () {
    var _marked3 = [lazyLoading].map(regeneratorRuntime.mark);

    function lazyLoading() {
        return regeneratorRuntime.wrap(function lazyLoading$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return 2200 + 33;

                    case 2:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _marked3[0], this);
    };
    console.log("[generator]  [test-" + 3 + "]  [lazyLoading().next()] = ", lazyLoading().next(), '\n');
})();

/**
 * yield 与 return :
 * 遇到 yield，函数暂停执行，下一次再从该位置继续向后执行
 * 而 return 语句不具备位置记忆的功能，只能执行一次 return
 */

/**
 * Generator 可以不用 yield
 */
(function () {
    var _marked4 = [generator].map(regeneratorRuntime.mark);

    function generator() {
        return regeneratorRuntime.wrap(function generator$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        console.log("[generator]  [test-" + 4 + "]  [function* generator()]", '\n');

                    case 1:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _marked4[0], this);
    }

    generator().next();
})();

/**
 * yield 不能再普通方法中定义
 */
(function () {
    // function func() {
    //     yield 2233
    // }
})();

/**
 * 实例：深度遍历
 */
(function () {
    var NUMBER = 'number';
    var array = [1, [[2, 3], 4], [5, 6]];
    var depthTraversal = regeneratorRuntime.mark(function depthTraversal(array) {
        var length, i, element;
        return regeneratorRuntime.wrap(function depthTraversal$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        length = array.length;
                        i = 0;

                    case 2:
                        if (!(i < length)) {
                            _context8.next = 13;
                            break;
                        }

                        element = array[i];

                        if (!((typeof element === 'undefined' ? 'undefined' : _typeof(element)) !== NUMBER)) {
                            _context8.next = 8;
                            break;
                        }

                        return _context8.delegateYield(depthTraversal(element), 't0', 6);

                    case 6:
                        _context8.next = 10;
                        break;

                    case 8:
                        _context8.next = 10;
                        return element;

                    case 10:
                        i++;
                        _context8.next = 2;
                        break;

                    case 13:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, depthTraversal, this);
    });
    console.log("[generator]  [test-" + 5 + "]  [array] = ", array);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = depthTraversal(array)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log("[generator]  [test-" + 5 + "]  [value] = ", value);
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

//# sourceMappingURL=generator-1-compiled.js.map