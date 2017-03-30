/**
 * Created by：CaMnter
 */


/***********
 * ES6 Map *
 ***********/

/**
 * 传统 JS 对象
 * 虽然是键值对的集合
 * 但是 key 只能是 string
 * 如果强塞非 string 的话，会调用 toString 方法转为 String
 * 取值的时候也是
 *
 * 字符串 - 值 对
 */
let objectKey = {save: 'Save you from anything'};
(() => {
    let lowLevelMap = {};
    lowLevelMap[objectKey] = 'objectValue';
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[lowLevelMap] = ", lowLevelMap);
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[lowLevelMap[objectKey.toString()]] = ", lowLevelMap[objectKey.toString()], '\n');
})();

/**
 * ES6 Map 的 Map 就可以实现
 * 值 - 值 对
 */
(() => {
    let map = new Map();
    map.set(objectKey, 'ObjectValue');
    console.log("[structure]\t\t[test-" + 2 + "]\t\t[map] = ", map);
    console.log("[structure]\t\t[test-" + 2 + "]\t\t[map.has(objectKey)] = ", map.has(objectKey));
    console.log("[structure]\t\t[test-" + 2 + "]\t\t[map.get(objectKey)] = ", map.get(objectKey), '\n');
})();

/**
 * ES6 Map 可以接收数组
 * 数组的成员是 键值对数组
 */
let keyValueArray = [['name', 'CaMnter'], ['save', 'Save you from anything']];
(() => {
    var map = new Map(keyValueArray);
    console.log("[structure]\t\t[test-" + 3 + "]\t\t[map] = ", map);
    console.log("[structure]\t\t[test-" + 3 + "]\t\t[map] = ", map.get(keyValueArray[0][0]));
    // 不是键值对的数组
    let array = ['CaMnter', 'Save you from anything'];
    try {
        var map = new Map(array);
        console.log("[structure]\t\t[test-" + 3 + "]\t\t[map] = ", map);
    } catch (e) {
        console.log("[structure]\t\t[test-" + 3 + "]\t\t[e] = ", e, '\n');
    }
})();

/**
 * ES6 Map 可以接受数组的 原理
 */
(() => {
    let map = new Map();
    // 原理
    keyValueArray.map((k, v) => map.set(k, v));
})();

/**
 * 'true' 和 true
 * 作为 key 的话是不同的
 */
(() => {
    let array = [[true, 'Boolean key'], ['true', 'String key']];
    let map = new Map(array);
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[map] = ", map);
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[map.get(true)] = ", map.get(true));
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[map.get('true')] = ", map.get('true'), '\n');
})();

/**
 * 同 key 覆盖
 */
(() => {
    let map = new Map();
    map.set(true, 233);
    map.set(true, 2233);
    console.log("[structure]\t\t[test-" + 5 + "]\t\t[map.get(true)] = ", map.get(true), '\n');
})();

/**
 * 不存在的 key 返回时 undefined
 */
(() => {
    console.log("[structure]\t\t[test-" + 6 + "]\t\t[new Map().get(true)] = ", new Map().get(true), '\n');
})();

/**
 * 对象作为 key 的话，必须引用相同才算作同一个 key，结构是否一样不考虑在内
 *
 * Map 的键实际上是跟内存地址绑定的
 * 只要内存地址不一样，就视为两个键。
 * 这就解决了同名属性碰撞（clash）的问题，
 * 扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名
 */
(() => {
    let o1 = {save: 'save'}, o2 = {save: 'save'};
    let map = new Map();
    map.set(o1, "233");
    map.set(o2, "2233");
    // 结构一样，但是存在两个。因为引用地址不一样
    console.log("[structure]\t\t[test-" + 7 + "]\t\t[map] = ", map, '\n');
})();

/**
 * key 的话
 * +0 和 -0 视为一样
 * NaN 都视为一样
 */
(() => {
    let map = new Map();
    map.set(+0, 233);
    map.set(-0, 2233);
    // 只有一个 key value
    console.log("[structure]\t\t[test-" + 8 + "]\t\t[map] = ", map);
    map.clear();
    map.set(NaN, 233);
    map.set(NaN, 2333);
    // 也只有一个 key value
    console.log("[structure]\t\t[test-" + 8 + "]\t\t[map] = ", map, '\n');
})();

