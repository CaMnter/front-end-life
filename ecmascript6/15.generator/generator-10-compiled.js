"use strict";

/**
 * Created by：CaMnter
 */

require("babel-polyfill");

/*******************************************
 * Generator 应用场景 - 异步操作的同步化表达 *
 *******************************************/

/**
 * 场景一：异步操作的同步化表达
 *
 * 异步操作的后续操作可以放在 yield 下面
 */
(function () {
    var _marked = [loadUI].map(regeneratorRuntime.mark);

    function loadUI() {
        return regeneratorRuntime.wrap(function loadUI$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        showLoadingScreen();
                        _context.next = 3;
                        return loadUIDataAsynchronously();

                    case 3:
                        hideLoadingScreen();

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    };
    function showLoadingScreen() {
        console.log("[generator]  [test-" + 1 + "]  [showLoadingScreen]");
    };
    function loadUIDataAsynchronously() {
        console.log("[generator]  [test-" + 1 + "]  [loadUIDataAsynchronously]");
    };
    function hideLoadingScreen() {
        console.log("[generator]  [test-" + 1 + "]  [hideLoadingScreen]", '\n');
    };

    // 第一个 yield 停止
    var loader = loadUI();
    // 执行 loadUIDataAsynchronously 方法后，停留在 yield loadUIDataAsynchronously()
    loader.next();
    // 走过 yield loadUIDataAsynchronously()，到下个 yield 停止
    loader.next();
})();

/**
 * 场景二：Ajax 后同步
 */
(function () {
    var _marked2 = [main].map(regeneratorRuntime.mark);

    function main() {
        var result, response;
        return regeneratorRuntime.wrap(function main$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return request("https://www.camnter.com");

                    case 2:
                        result = _context2.sent;

                        // 等待 Ajax 请求成功后，才 next。才走以下流程
                        response = JSON.parse(result);

                        console.log("[generator]  [test-" + 2 + "]  [response] = ", response);

                    case 5:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _marked2[0], this);
    }

    function request(url) {
        // makeAjaxCall(url, function (response) {
        //     it.next(response);
        // });
    }

    var it = main();
    it.next();
})();

/**
 * 场景三：读取文件，每一行都得 next 才读
 */
(function () {
    var _marked3 = [readFile].map(regeneratorRuntime.mark);

    function readFile(filePath) {
        var file;
        return regeneratorRuntime.wrap(function readFile$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        file = new FileReader(filePath);
                        _context3.prev = 1;

                    case 2:
                        if (file.eof) {
                            _context3.next = 7;
                            break;
                        }

                        _context3.next = 5;
                        return parseInt(file.readLine(), 10);

                    case 5:
                        _context3.next = 2;
                        break;

                    case 7:
                        _context3.next = 12;
                        break;

                    case 9:
                        _context3.prev = 9;
                        _context3.t0 = _context3["catch"](1);

                        console.log("[generator]  [test-" + 3 + "]  [e] = ", _context3.t0);

                    case 12:
                        _context3.prev = 12;

                        file.close();
                        return _context3.finish(12);

                    case 15:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _marked3[0], this, [[1, 9, 12, 15]]);
    };
})();

/**********************************
 * Generator 应用场景 - 控制流管理 *
 **********************************/

/**
 * 普通写法
 */
(function () {

    function step1(func) {
        return func();
    };

    function step2(x, func) {
        return x + func();
    };

    function step3(x, func) {
        return x + func();
    };

    function step4(x, func) {
        return x + func();
    };

    var value1 = 1;
    step1(function (value1) {
        console.log("[generator]  [test-" + 4 + "]  [step1]   [value1] = ", value1);
        step2(value1, function (value2) {
            console.log("[generator]  [test-" + 4 + "]  [step2]   [value1] = ", value1, "   [value2] = ", value2);
            step3(value2, function (value3) {
                console.log("[generator]  [test-" + 4 + "]  [step3]   [value2] = ", value2, "   [value4] = ", value3);
                step4(value3, function (value4) {
                    // Do something with value4
                    console.log("[generator]  [test-" + 4 + "]  [step4]   [value3] = ", value3, "   [value4] = ", value4, '\n');
                    return value4 + 1;
                });
            });
        });
    });
})();

/**
 * Generator
 */
(function () {
    var _marked4 = [taskGenerator].map(regeneratorRuntime.mark);

    function step1(x) {
        return x + 1;
    };

    function step2(x) {
        return x + 2;
    };

    function step3(x) {
        return x + 3;
    };

    function step4(x) {
        return x + 4;
    };

    function taskGenerator(value1) {
        var value2, value3, value4, value5;
        return regeneratorRuntime.wrap(function taskGenerator$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return step1(value1);

                    case 3:
                        value2 = _context4.sent;

                        console.log("[generator]  [test-" + 6 + "]  [value2] = ", value2);
                        _context4.next = 7;
                        return step2(value2);

                    case 7:
                        value3 = _context4.sent;

                        console.log("[generator]  [test-" + 6 + "]  [value3] = ", value3);
                        _context4.next = 11;
                        return step3(value3);

                    case 11:
                        value4 = _context4.sent;

                        console.log("[generator]  [test-" + 6 + "]  [value4] = ", value4);
                        _context4.next = 15;
                        return step4(value4);

                    case 15:
                        value5 = _context4.sent;

                        console.log("[generator]  [test-" + 6 + "]  [value5] = ", value5);
                        _context4.next = 22;
                        break;

                    case 19:
                        _context4.prev = 19;
                        _context4.t0 = _context4["catch"](0);

                        console.log("[generator]  [test-" + 6 + "]  [e] = ", _context4.t0);

                    case 22:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _marked4[0], this, [[0, 19]]);
    };
    function scheduler(taskGenerator) {
        console.log("[generator]  [test-" + 6 + "]  [taskGenerator] = ", taskGenerator, "   [taskGenerator.value] = ", taskGenerator.value);
        var taskObject = taskGenerator.next(taskGenerator.value);
        if (!taskObject.done) {
            taskGenerator.value = taskObject.value;
            scheduler(taskGenerator);
        }
    };
    var task = taskGenerator(1);
    scheduler(task);
})();

//# sourceMappingURL=generator-10-compiled.js.map