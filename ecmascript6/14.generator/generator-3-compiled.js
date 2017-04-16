"use strict";

/**
 * Created by：CaMnter
 */

/******************
 * Generator next *
 ******************/

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
    // 调用前暂停到 yield (v + 1)，调用后 返回 v + 1，然后暂停到下个 yield (x / 3)
    // 得到 3
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());
    // 调用前暂停到 yield (x / 3)，调用后 返回 x / 3，然后暂停到 return
    // x = 2 * (yield (v + 1))，yield (v + 1) = undefined，
    // x = 2 * undefined = NaN
    // x / 3 = NaN
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());
    // 调用前暂停到 return，调用后 返回 v + x + y，return 调用后结束
    // x = 2 * (yield (v + 1))，yield (v + 1) = undefined，
    // x = 2 * undefined = NaN
    // y = yield (x / 3)，yield (x / 3) = undefined，
    // y = undefined
    // v + x + y = 2 + NaN + undefined = NaN
    console.log("[generator]  [test-" + 2 + "]  [generatorA.next()] = ", generatorA.next());

    var generatorB = func(2);
    // 调用前暂停到 yield (v + 1)，调用后 返回 v + 1，然后暂停到下个 yield (x / 3)
    // 得到 3
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next());
    // 调用前暂停到 yield (x / 3)，调用后 返回 x / 3，然后暂停到 return
    // x = 2 * (yield (v + 1))，yield (v + 1) = 3，
    // x = 2 * 3 = 6
    // x / 3 = 2
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next(3));
    // 调用前暂停到 return，调用后 返回 v + x + y，return 调用后结束
    // x = 2 * (yield (v + 1))，yield (v + 1) = 3，
    // x = 2 * 3 = 6
    // y = yield (x / 3)，yield (x / 3) = 3，
    // y = 3
    // v + x + y = 2 + 6 + 3 = 11
    console.log("[generator]  [test-" + 3 + "]  [generatorB.next()] = ", generatorB.next(3));
})();

//# sourceMappingURL=generator-3-compiled.js.map