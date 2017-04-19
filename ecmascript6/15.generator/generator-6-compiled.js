'use strict';

/**
 * Created by：CaMnter
 */

/******************************
 * Generator.prototype.return *
 ******************************/

require("babel-polyfill");

/**
 * Generator 方法返回的 Iterator 对象，还有一个 return 方法
 * 可以返回给定的值
 */
(function () {
    var _marked = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return '22';

                    case 2:
                        _context.next = 4;
                        return '33';

                    case 4:
                        _context.next = 6;
                        return '2233';

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    };
    var generator = generatorFunction();

    // 提供参数 return
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.return('return')] = ", generator.return('return'));
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next(), '\n');

    // 不提供参数
    generator = generatorFunction();
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.return()] = ", generator.return());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 有 finally 代码块的话，return 会推迟到 finally
 * 代码块执行完之后才执行
 */
(function () {
    var _marked2 = [generatorFunction].map(regeneratorRuntime.mark);

    function generatorFunction() {
        return regeneratorRuntime.wrap(function generatorFunction$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return 1;

                    case 2:
                        _context2.prev = 2;
                        _context2.next = 5;
                        return 2;

                    case 5:
                        _context2.next = 7;
                        return 3;

                    case 7:
                        _context2.next = 9;
                        return 4;

                    case 9:
                        _context2.prev = 9;
                        _context2.next = 12;
                        return 5;

                    case 12:
                        _context2.next = 14;
                        return 6;

                    case 14:
                        _context2.next = 16;
                        return 7;

                    case 16:
                        return _context2.finish(9);

                    case 17:
                        _context2.next = 19;
                        return 8;

                    case 19:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _marked2[0], this, [[2,, 9, 17]]);
    };
    var generator = generatorFunction();
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.return(2233)] = ", generator.return(2233));
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
    // 一定要等到 finally 执行完，才会执行 return
    console.log("[generator]  [test-" + 2 + "]  [generator.next()] = ", generator.next());
})();

//# sourceMappingURL=generator-6-compiled.js.map