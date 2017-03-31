/**
 * Created by：CaMnter
 */

/********************
 * ES6 Map 遍历方法 *
 ********************/

/**
 * keys()
 */
let data = [['name', 'CaMnter'], ['save', 'Save you from anything']];
let map = new Map(data);
(() => {
    let keys = map.keys();
    // MapIterator { 'name', 'save' }
    console.log("[structure]    [test-" + 1 + "]    [keys] = ", keys);
    for (let key of keys) {
        console.log("[structure]    [test-" + 1 + "]    [key] = ", key);
    }
    console.log('');
})();

/**
 * values()
 */
(() => {
    let values = map.values();
    // MapIterator { 'CaMnter', 'Save you from anything' }
    console.log("[structure]    [test-" + 2 + "]    [values] = ", values);
    for (let value of map.values()) {
        console.log("[structure]    [test-" + 2 + "]    [value] = ", value);
    }
    console.log('');
})();

/**
 * entries()
 */
(() => {
    // MapIterator { [ 'name', 'CaMnter' ], [ 'save', 'Save you from anything' ] }
    console.log("[structure]    [test-" + 3 + "]    [entries] = ", map.entries());
    for (let entry of map.entries()) {
        console.log("[structure]    [test-" + 3 + "]    [entry] = ", entry);
    }
    for (let [k, v] of map.entries()) {
        console.log("[structure]    [test-" + 4 + "]    [k, v] = ", [k, v]);
    }

    // 直接写 map 等同于 map.entries()
    for (let [key, value] of map) {
        console.log("[structure]    [test-" + 5 + "]    [key, value] = ", [key, value]);
    }
    console.log('');
})();

/**
 * map[Symbol.iterator] === map.entries
 */
(() => {
    console.log("[structure]    [test-" + 6 + "]    [map[Symbol.iterator] === map.entries] = ", map[Symbol.iterator] === map.entries, '\n');
})();

/**
 * Map >> Array
 * 最快速的方法就是 ... 扩展运算符
 *
 * 甚至，直接 ...map 都可以
 */
(() => {
    console.log("[structure]    [test-" + 7 + "]    [...map.keys()] = ", [...map.keys()]);
    console.log("[structure]    [test-" + 7 + "]    [...map.values()] = ", [...map.values()]);
    console.log("[structure]    [test-" + 7 + "]    [...map.entries()] = ", [...map.entries()]);
    // 直接 [...map]
    console.log("[structure]    [test-" + 7 + "]    [...map] = ", [...map], '\n');
})();

/**
 * Map 没有 filter 和 map 方法
 * 但是结合 [...map] 转为数组后，可以数显 Map 的 filter 和 map 方法
 */
(() => {
    let map = new Map([[1, 'A'], [2, 'B'], [3, 'C'], [4, 'D']]);
    console.log("[structure]    [test-" + 8 + "]    [map] = ", map);
    let filterMap = new Map([...map].filter(([k, v]) => k <= 2));
    console.log("[structure]    [test-" + 8 + "]    [filterMap] = ", filterMap);
    let mapMap = new Map([...map].map(([k, v]) => [k, "array_map_" + v]));
    console.log("[structure]    [test-" + 8 + "]    [mapMap] = ", mapMap);
})();

/**
 * Map foreach
 */
(() => {
    map.forEach((value, key, map) => console.log("[structure]    [test-" + 9 + "]    Key: %s, Value: %s", key, value));
    console.log('');
})();

/**
 * Map foreach binding this
 */
(() => {
    var reporter = {
        report: function (key, value) {
            console.log("[structure]    [test-" + 10 + "]    Key: %s, Value: %s", key, value);
        }
    };

    map.forEach(function (value, key, map) {
        // this == reporter，绑定了
        this.report(key, value);
    }, reporter);
})();