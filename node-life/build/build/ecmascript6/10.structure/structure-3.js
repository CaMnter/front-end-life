/**
 * Created by：CaMnter
 */

/****************
 * ES6 Set 遍历 *
 ****************/

/**
 * Set 结构的实例有四个遍历方法
 * keys()：返回键名
 * values()：返回键值
 * entries()：返回键值对
 * forEach()：使用回调函数遍历每个成员
 *
 * Set 遍历顺序就是插入顺序
 * 这个特性有时非常有用
 *
 * 使用 Set 保存一个回调函数列表
 * 调用时就能保证按照添加顺序调用
 */

/**********************
 * keys value entries *
 **********************/

/**
 * 由于没有 key 所以 keys 返回的和 value 一样
 * 由于没有 key 所以 entries 返回的 key 和 value 是一样的
 */
let set = new Set(['CaMnter', 'Save you from anything']);
(() => {
    for (let key of set.keys()) {
        console.log("[structure]\t\t[test-" + 1 + "]\t\t[key] = ", key);
    }
    console.log('');
    for (let value of set.values()) {
        console.log("[structure]\t\t[test-" + 2 + "]\t\t[value] = ", value);
    }
    console.log('');
    for (let entry of set.entries()) {
        console.log("[structure]\t\t[test-" + 3 + "]\t\t[entry] = ", entry);
    }
    console.log('');
})();

/**
 * Set 结构的实例默认可遍历
 * 默认遍历器生成函数就是它的 values 方法
 *
 * 所以
 * 在 Set 上 values() 和 for of 是一样的
 */
(() => {
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[Set.prototype[Symbol.iterator] === Set.prototype.values] = ", Set.prototype[Symbol.iterator] === Set.prototype.values, '\n');
    for (let value of set) {
        console.log("[structure]\t\t[test-" + 5 + "]\t\t[value] = ", value);
    }
    console.log('');
})();


/***********
 * forEach *
 ***********/

(() => {
    set.forEach((value, key) => console.log("[structure]\t\t[test-" + 6 + "]\t\t[value] = ", value))
    console.log('');
})();


/*************
 * 遍历的应用 *
 *************/

/**
 * ... 内部也是使用 for...of
 */
(() => {
    let array = [...set];
    console.log("[structure]\t\t[test-" + 7 + "]\t\t[array] = ", array, '\n');
})();

/**
 * ... + Set 去重
 */
(() => {
    let array = [2, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    let expectArray = [...new Set(array)];
    console.log("[structure]\t\t[test-" + 8 + "]\t\t[expectArray] = ", expectArray, '\n');
})();

/**
 * 数组的 map 和 filter
 * 也可以用于 Set
 */
(() => {
    var set1 = new Set([1, 2, 3]);
    set1 = new Set([...set1].map(v => v * v));
    console.log("[structure]\t\t[test-" + 10 + "]\t\t[set1] = ", set1);

    var set2 = new Set([1, 2, 3, 4, 5, 6]);
    set2 = new Set([...set2].filter(v => (v % 2) == 0));
    console.log("[structure]\t\t[test-" + 10 + "]\t\t[set2] = ", set2, '\n');
})();


/**
 * 并集（Union）
 * 交集（Intersect）
 * 差集（Difference）
 */
(() => {
    let setA = new Set([1, 2, 3, 4]);
    let setB = new Set([5, 2, 3, 6]);

    let union = new Set([...setA, ...setB]);
    console.log("[structure]\t\t[test-" + 11 + "]\t\t[union] = ", union);
    let intersect = new Set([...setA].filter(v => setB.has(v)));
    console.log("[structure]\t\t[test-" + 11 + "]\t\t[intersect] = ", intersect);
    let difference = new Set([...[...setA].filter(v => !setB.has(v)), ...[...setB].filter(v => !setA.has(v))]);
    console.log("[structure]\t\t[test-" + 11 + "]\t\t[difference] = ", difference, '\n');
})();

/**
 * 改变 Set 原结构数据
 * 1. 利用原 Set 结构映射出一个新的结构
 * 2. 利用 Array.from 方法
 */
(() => {
    // 方法一
    var setA = new Set([1, 2, 3]);
    setA = new Set([...setA].map(val => val * 2));
    console.log("[structure]\t\t[test-" + 12 + "]\t\t[setA] = ", setA);
    var setB = new Set([1, 2, 3]);
    setB = new Set(Array.from(setB, val => val * 2));
    console.log("[structure]\t\t[test-" + 12 + "]\t\t[setB] = ", setB);
})();
