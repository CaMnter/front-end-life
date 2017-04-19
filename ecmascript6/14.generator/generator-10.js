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
(() => {
    function* loadUI() {
        showLoadingScreen();
        yield loadUIDataAsynchronously();
        hideLoadingScreen();
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
    let loader = loadUI();
    // 执行 loadUIDataAsynchronously 方法后，停留在 yield loadUIDataAsynchronously()
    loader.next();
    // 走过 yield loadUIDataAsynchronously()，到下个 yield 停止
    loader.next();
})();

/**
 * 场景二：Ajax 后同步
 */
(() => {
    function* main() {
        var result = yield request("https://www.camnter.com");
        // 等待 Ajax 请求成功后，才 next。才走以下流程
        var response = JSON.parse(result);
        console.log("[generator]  [test-" + 2 + "]  [response] = ", response);
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
(() => {
    function* readFile(filePath) {
        let file = new FileReader(filePath);
        try {
            while (!file.eof) {
                yield parseInt(file.readLine(), 10);
            }
        } catch (e) {
            console.log("[generator]  [test-" + 3 + "]  [e] = ", e);
        } finally {
            file.close();
        }
    };
})();


/**********************************
 * Generator 应用场景 - 控制流管理 *
 **********************************/


/**
 * 普通写法
 */
(() => {

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

    let value1 = 1;
    step1(function (value1) {
        console.log("[generator]  [test-" + 4 + "]  [step1]   [value1] = ", value1)
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
(() => {

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

    function* taskGenerator(value1) {
        try {
            var value2 = yield step1(value1);
            console.log("[generator]  [test-" + 6 + "]  [value2] = ", value2);
            var value3 = yield step2(value2);
            console.log("[generator]  [test-" + 6 + "]  [value3] = ", value3);
            var value4 = yield step3(value3);
            console.log("[generator]  [test-" + 6 + "]  [value4] = ", value4);
            var value5 = yield step4(value4);
            console.log("[generator]  [test-" + 6 + "]  [value5] = ", value5);
        } catch (e) {
            console.log("[generator]  [test-" + 6 + "]  [e] = ", e);
        }
    };
    function scheduler(taskGenerator) {
        console.log("[generator]  [test-" + 6 + "]  [taskGenerator] = ", taskGenerator, "   [taskGenerator.value] = ", taskGenerator.value);
        let taskObject = taskGenerator.next(taskGenerator.value);
        if (!taskObject.done) {
            taskGenerator.value = taskObject.value;
            scheduler(taskGenerator);
        }
    };
    let task = taskGenerator(1);
    scheduler(task);
})();

