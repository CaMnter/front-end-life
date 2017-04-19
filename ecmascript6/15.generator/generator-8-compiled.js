'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/*******************
 * yield* 语句 - B *
 ******************/

require("babel-polyfill");

/**
 * yield* Generator 的话，会 for...of 这个 Generator
 * yield* Iterator 的话，也会 for...of 这个 Iterator
 * 数组也是有自己的 Iterator
 * 所有，yield* 数组，就会直接遍历这个数组
 */
(function () {
    var _marked = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.delegateYield(['save', 'you', 'from', 'anything'], 't0', 1);

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    };
    var generator = generatorFunction();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = generator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

    generator = generatorFunction();
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 只要有 Iterator 接口，就可以被 yield* 遍历
 */
(function () {
    var _marked2 = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.delegateYield('Save', 't0', 1);

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _marked2[0], this);
    };
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = generatorFunction()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var char = _step2.value;

            console.log("[generator]  [test-" + 2 + "]  [char] = ", char);
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
 * yield* Generator return
 */
(function () {
    var _marked3 = [otherGeneratorFunction, generatorFunction].map(regeneratorRuntime.mark);

    function otherGeneratorFunction() {
        return regeneratorRuntime.wrap(function otherGeneratorFunction$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return 22;

                    case 2:
                        _context3.next = 4;
                        return 33;

                    case 4:
                        return _context3.abrupt('return', 'otherGeneratorFunction');

                    case 5:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _marked3[0], this);
    };
    function generatorFunction() {
        var returnValue;
        return regeneratorRuntime.wrap(function generatorFunction$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return 11;

                    case 2:
                        return _context4.delegateYield(otherGeneratorFunction(), 't0', 3);

                    case 3:
                        returnValue = _context4.t0;

                        console.log("[generator]  [test-" + 3 + "]  [returnValue] = ", returnValue);
                        _context4.next = 7;
                        return 44;

                    case 7:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _marked3[1], this);
    };
    var generator = generatorFunction();
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next(), '\n');
})();

(function () {
    var _marked4 = [otherGeneratorFunction, generator].map(regeneratorRuntime.mark);

    function otherGeneratorFunction() {
        return regeneratorRuntime.wrap(function otherGeneratorFunction$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return 22;

                    case 2:
                        _context5.next = 4;
                        return 33;

                    case 4:
                        return _context5.abrupt('return', 'otherGeneratorFunction');

                    case 5:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _marked4[0], this);
    };
    function generator(targetGenerator) {
        var returnValue;
        return regeneratorRuntime.wrap(function generator$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        return _context6.delegateYield(targetGenerator, 't0', 1);

                    case 1:
                        returnValue = _context6.t0;

                        console.log("[generator]  [test-" + 4 + "]  [returnValue] = ", returnValue);

                    case 3:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _marked4[1], this);
    };
    console.log("[generator]  [test-" + 4 + "]  [...generator(otherGeneratorFunction())] = ", [].concat(_toConsumableArray(generator(otherGeneratorFunction()))), '\n');
})();

/**
 * 深度遍历
 */
(function () {
    var _marked5 = [depthTraversal].map(regeneratorRuntime.mark);

    var array = [11, [22, 33, [44, 55, [66, 77]]], [88, 99]];

    function depthTraversal(array) {
        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, element;

        return regeneratorRuntime.wrap(function depthTraversal$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        if (!Array.isArray(array)) {
                            _context7.next = 28;
                            break;
                        }

                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _iteratorError3 = undefined;
                        _context7.prev = 4;
                        _iterator3 = array[Symbol.iterator]();

                    case 6:
                        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                            _context7.next = 12;
                            break;
                        }

                        element = _step3.value;
                        return _context7.delegateYield(depthTraversal(element), 't0', 9);

                    case 9:
                        _iteratorNormalCompletion3 = true;
                        _context7.next = 6;
                        break;

                    case 12:
                        _context7.next = 18;
                        break;

                    case 14:
                        _context7.prev = 14;
                        _context7.t1 = _context7['catch'](4);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context7.t1;

                    case 18:
                        _context7.prev = 18;
                        _context7.prev = 19;

                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }

                    case 21:
                        _context7.prev = 21;

                        if (!_didIteratorError3) {
                            _context7.next = 24;
                            break;
                        }

                        throw _iteratorError3;

                    case 24:
                        return _context7.finish(21);

                    case 25:
                        return _context7.finish(18);

                    case 26:
                        _context7.next = 30;
                        break;

                    case 28:
                        _context7.next = 30;
                        return array;

                    case 30:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _marked5[0], this, [[4, 14, 18, 26], [19,, 21, 25]]);
    };
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = depthTraversal(array)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var value = _step4.value;

            console.log("[generator]  [test-" + 5 + "]  [value] = ", value);
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
 * 遍历完全二叉树
 */
(function () {
    var _marked6 = [inorder].map(regeneratorRuntime.mark);

    function Tree(left, current, right) {
        this.left = left;
        this.current = current;
        this.right = right;
    };
    function inorder(node) {
        return regeneratorRuntime.wrap(function inorder$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        if (!node) {
                            _context8.next = 5;
                            break;
                        }

                        return _context8.delegateYield(inorder(node.left), 't0', 2);

                    case 2:
                        _context8.next = 4;
                        return node.current;

                    case 4:
                        return _context8.delegateYield(inorder(node.right), 't1', 5);

                    case 5:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _marked6[0], this);
    };
    function makeTree(array) {
        if (array.length == 1) return new Tree(null, array[0], null);
        return new Tree(makeTree(array[0]), array[1], makeTree(array[2]));
    };
    var tree = makeTree([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
    console.log("[generator]  [test-" + 6 + "]  [tree] = ", tree);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = inorder(tree)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var node = _step5.value;

            console.log("[generator]  [test-" + 6 + "]  [node] = ", node);
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
})();

//# sourceMappingURL=generator-8-compiled.js.map