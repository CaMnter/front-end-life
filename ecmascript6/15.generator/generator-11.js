/**
 * Created by：CaMnter
 */

require("babel-polyfill");

/******************************************
 * Generator 应用场景 - 部署 Iterator 接口 *
 ******************************************/

/**
 * 第一种
 */
(() => {
    let target = {save: 'save', you: 'you', from: 'from', anything: 'anything'};

    function* entriesIterator(target) {
        let keys = Object.keys(target);
        for (let key of keys) {
            yield [key, target[key]];
        }
    };

    for (let [key, value] of entriesIterator(target)) {
        console.log("[generator]  [test-" + 1 + "]  [key] = ", key, "   [value] = ", value);
    }
    console.log('');
})();

(() => {
    let target = {save: 'save', you: 'you', from: 'from', anything: 'anything'};
    target[Symbol.iterator] = function* (){
        let keys = Object.keys(target);
        for (let key of keys) {
            yield [key, target[key]];
        }
    };
    for (let [key, value] of target) {
        console.log("[generator]  [test-" + 2 + "]  [key] = ", key, "   [value] = ", value);
    }
    console.log('');
})();

/************************************
 * Generator 应用场景 - 作为数据结构 *
 ************************************/

(() => {
    function* doStuff() {
        yield readFile.bind(null, 'save.txt');
        yield readFile.bind(null, 'you.txt');
    };
    function readFile(filePath) {
        let file = new FileReader(filePath);
        try {
            while (!file.eof) {
                parseInt(file.readLine(), 10);
            }
        } catch (e) {
            console.log("[generator]  [test-" + 3 + "]  [e] = ", e);
        } finally {
            file.close();
        }
    };
    for (task of doStuff()) {
        // task是一个函数，可以像回调函数那样使用它
    }
})();