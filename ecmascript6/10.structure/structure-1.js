/**
 * Created by：CaMnter
 */

/****************
 * ES6 Set 基本 *
 ****************/

/**
 * ES6 提供了新的数据结构 Set
 * 它类似于数组
 * 但是成员的值都是唯一的
 * 没有重复的值
 */

(() => {
    var set = new Set();
    // 添加重复值无效
    [2, 3, 3].map(v => set.add(v));
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[value] = ", [...set], '\n');
})();

/**
 * 数组作为参数
 */
(() => {
    var set1 = new Set([1, 2, 3, 4]);
    for (let value of set1) {
        console.log("[structure]\t\t[test-" + 2 + "]\t\t[value] = ", value);
    }
    console.log('');

    var set2 = new Set([2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
    console.log("[structure]\t\t[test-" + 3 + "]\t\t[set2.size] = ", set2.size, '\n');

    function getArray() {
        let array = [2, 3, 3]
        return [...array];
    }

    var set3 = new Set(getArray());
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[set3] = ", set3, '\n');

    var set4 = new Set();
    getArray().forEach(v => set4.add(v));
    console.log("[structure]\t\t[test-" + 5 + "]\t\t[set4] = ", set4, '\n');
})();


/**
 * 使用技巧：
 *
 * 利用 Set
 * 去除数组中的重复值
 * 然后得到数组
 */

(() => {
    let array = [2, 3, 3, 3, 3, 3, 3];
    console.log("[structure]\t\t[test-" + 6 + "]\t\t[...new Set(array)] = ", [...new Set(array)], '\n');
})();

/**
 * Set 加入值
 * 不会发生类型转换
 *
 * 2 和 "2" 是两个不同的值
 * Set 它们是不同的
 * 使用的算法叫做 Same-value equality
 *
 * 类似于精确相等运算符（===）
 * 主要的区别是 NaN 等于自身，而精确相等运算符认为 NaN 不等于自身
 */
(() => {
    let set = new Set();
    set.add(NaN);
    set.add(NaN);
    console.log("[structure]\t\t[test-" + 6 + "]\t\t[set] = ", set);
    set.clear();

    set.add(2);
    set.add("2");
    console.log("[structure]\t\t[test-" + 6 + "]\t\t[set] = ", set, '\n');
    set.clear();
})();

/**
 * 空对象是不相等的
 */
(() => {
    let set = new Set();
    set.add({}).add({}).add({}).add({}).add({}).add({});
    console.log("[structure]\t\t[test-" + 7 + "]\t\t[set] = ", set);
})();