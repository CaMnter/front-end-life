/**
 * Created by：CaMnter
 */

/***********************************
 * ES6 Map 与其他数据结构的互相转换 *
 ***********************************/

/**
 * Map >> Array
 * 最方便的：扩展运算符 ...
 */
(() => {
    console.log("[structure]  [test-" + 1 + "]  [...new Map([['name', 'CaMnter'], ['save', 'Save you from anything']])] = ", [...new Map([['name', 'CaMnter'], ['save', 'Save you from anything']])], '\n');
})();

/**
 * Array >> Map
 * 直接作为 Map 的参数即可
 */
(() => {
    console.log("[structure]  [test-" + 2 + "]  [new Map([[1, 'A'], [2, 'B']])] = ", new Map([[1, 'A'], [2, 'B']]), '\n');
})();

/**
 * Map >> Object
 *
 * 如果 key 是 string，那么正常转换
 * 如果 key 非 string，那么会将 key 转为 string
 */
function mapToObject(map) {
    let object = Object.create(null);
    for (let [key, value] of map) {
        object[key] = value;
    }
    return object;
}
(() => {
    let intKeyMap = new Map([[1, 'A'], [2, 'B']]);
    let stringKeyMap = new Map([['name', 'CaMnter'], ['save', 'Save you from anything']]);

    // 会将 key 转为 string
    console.log("[structure]  [test-" + 3 + "]  [mapToObject(intKeyMap)] = ", mapToObject(intKeyMap));
    console.log("[structure]  [test-" + 3 + "]  [mapToObject(stringKeyMap)] = ", mapToObject(stringKeyMap), '\n');
})();

/**
 * Object >> Map
 */
function objectToMap(object) {
    let map = new Map();
    for (let key of Object.keys(object)) {
        map.set(key, object[key]);
    }
    return map;
}
(() => {
    let object = {'name': 'CaMnter', 'save': 'Save you from anything'};
    console.log("[structure]  [test-" + 4 + "]  [objectToMap(object)] = ", objectToMap(object), '\n');
})();

/**
 * Map >> JSON
 *
 * 混合 key      ：[...Map] >> JSON.stringify()
 * 纯 string key ：Map >> Object >> JSON.stringify()
 */
(() => {
    // 混合 key
    let mixKeyMap = new Map([[1, 'A'], [true, 'B'], ['C', 'C'], [NaN, 'D']]);
    // 纯 string key
    let stringKeyMap = new Map([['name', 'CaMnter'], ['save', 'Save you from anything']]);
    console.log("[structure]  [test-" + 5 + "]  [objectToMap(object)] = ", JSON.stringify([...mixKeyMap]));
    console.log("[structure]  [test-" + 5 + "]  [objectToMap(object)] = ", JSON.stringify(mapToObject(stringKeyMap)), '\n');
})();

/**
 * JSON >> Map
 */
// 正常情况
function jsonToStringMap(jsonString) {
    return objectToMap(JSON.parse(jsonString));
}
// 不正常情况，如 [[1, 'A'], [true, 'B'], ['C', 'C'], [NaN, 'D']]
function jsonToMap(jsonString) {
    return new Map(JSON.parse(jsonString));
}

(() => {
    console.log("[structure]  [test-" + 6 + "]  [objectToMap(object)] = ", jsonToStringMap('{"name": "CaMnter", "save": "Save you from anything"}'));
    console.log("[structure]  [test-" + 6 + "]  [jsonToMap('[[1, \"A\"], [true, \"B\"], [\"C\", \"C\"]]')] = ", jsonToMap('[[1, "A"], [true, "B"], ["C", "C"]]'));
})();
