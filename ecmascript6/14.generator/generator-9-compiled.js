"use strict";

/**
 * Created by：CaMnter
 */

require("babel-polyfill");

/*************************
 * 对象属性上的 Generator *
 *************************/

(function () {
    var target = {
        generatorA: regeneratorRuntime.mark(function generatorA() {
            return regeneratorRuntime.wrap(function generatorA$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return 22;

                        case 2:
                        case "end":
                            return _context.stop();
                    }
                }
            }, generatorA, this);
        }),

        generatorB: regeneratorRuntime.mark(function generatorB() {
            return regeneratorRuntime.wrap(function generatorB$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return 33;

                        case 2:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, generatorB, this);
        })
    };
    console.log("[generator]  [test-" + 1 + "]  [target.generatorA().next()] = ", target.generatorA().next());
    console.log("[generator]  [test-" + 1 + "]  [target.generatorB().next()] = ", target.generatorB().next(), '\n');
})();

/*********************
 * Generator 的 this *
 *********************/

/**
 * ES6 规定 Generator 返回的 Iterator 是 Generator 的实例
 * 也继承了 Generator 方法的 prototype 对象上的方法
 */

(function () {
    var _marked = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _marked[0], this);
    };
    generatorFunction.prototype.save = function () {
        return 'save';
    };
    var generator = generatorFunction();
    console.log("[generator]  [test-" + 2 + "]  [generator instanceof generatorFunction] = ", generator instanceof generatorFunction);
    console.log("[generator]  [test-" + 2 + "]  [generator.save()] = ", generator.save(), '\n');
})();

/**
 * Generator 作为普通构造函数，this 不会在 Iterator 中生效
 */
(function () {
    var _marked2 = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        this.save = 'save';

                    case 1:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _marked2[0], this);
    };
    var generator = generatorFunction();
    console.log("[generator]  [test-" + 3 + "]  [generator instanceof generatorFunction] = ", generator instanceof generatorFunction);
    console.log("[generator]  [test-" + 3 + "]  [generator.save] = ", generator.save, '\n');
})();

/**
 * 实例：
 * Generator 作为一个对象，又可以 next，又可以获得正常 this
 * 但是：对象不统一
 */
(function () {
    var _marked3 = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        this.save = 'save';
                        _context5.next = 3;
                        return this.you = 'you';

                    case 3:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _marked3[0], this);
    };
    var target = {};
    // this = target
    var generator = generatorFunction.call(target);
    console.log("[generator]  [test-" + 4 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 4 + "]  [generator.next()] = ", generator.next());
    // this 代码，都保存在 target 上了
    console.log("[generator]  [test-" + 4 + "]  [target] = ", target);
    console.log("[generator]  [test-" + 4 + "]  [target.save] = ", target.save);
    console.log("[generator]  [test-" + 4 + "]  [target.you] = ", target.you, '\n');
})();

/**
 * 实例：
 * Generator 作为一个对象，又可以 next，又可以获得正常 this
 * 但是：对象统一
 */
(function () {
    var _marked4 = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        this.save = 'save';
                        _context6.next = 3;
                        return this.you = 'you';

                    case 3:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _marked4[0], this);
    };
    // 传入 自身的 prototype
    var generator = generatorFunction.call(generatorFunction.prototype);
    console.log("[generator]  [test-" + 5 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 5 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 5 + "]  [generator] = ", generator);
    console.log("[generator]  [test-" + 5 + "]  [generator.save] = ", generator.save);
    console.log("[generator]  [test-" + 5 + "]  [generator.you] = ", generator.you, '\n');
})();

//# sourceMappingURL=generator-9-compiled.js.map