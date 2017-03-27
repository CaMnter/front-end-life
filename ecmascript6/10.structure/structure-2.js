/**
 * Created by：CaMnter
 */

/**********************
 * ES6 Set 属性和方法 *
 **********************/

/**
 * Set.prototype.constructor：构造函数，默认就是 Set 函数
 * Set.prototype.size：返回 Set 实例的成员总数
 *
 * Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）
 *
 * add(value)：添加某个值，返回 Set 结构本身
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
 * has(value)：返回一个布尔值，表示该值是否为 Set 的成员
 * clear()：清除所有成员，没有返回值
 */

(() => {
    let set = new Set();
    set.add(2).add(3).add(3);

    console.log("[structure]\t\t[test-" + 1 + "]\t\t[set] = ", set);
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[set.size] = ", set.size);
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[set.has(2)] = ", set.has(2));
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[set.has(3)] = ", set.has(3));
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[set.has(1)] = ", set.has(1));
    set.delete(2);
    console.log("[structure]\t\t[test-" + 1 + "]\t\t[set] = ", set, '\n');
})();


/**
 * 与对象的区别
 */
(() => {
    var object = {
        'name': 'CaMnter',
        'sign': 'Save you from anything'
    };
    if (!object['save']) {
        console.log("[structure]\t\t[test-" + 2 + "]\t\t[!object['save']]");
    }

    let set = new Set();
    set.add('CaMnter');
    set.add('Save you from anything');
    if (!set.has('save')) {
        console.log("[structure]\t\t[test-" + 2 + "]\t\t[!set.has('save')]", '\n');
    }
})();


/**
 * 转换为数组
 */
(() => {
    let set = new Set([2, 3, 3]);
    console.log("[structure]\t\t[test-" + 3 + "]\t\t[Array.from(set)] = ", Array.from(set), '\n');
})();


/**
 * 去除数组重复
 */
(() => {
    function dedupe(array) {
        return Array.from(new Set(array));
    }

    console.log("[structure]\t\t[test-" + 4 + "]\t\t[dedupe([2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])] = ", dedupe([2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[...new Set([2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])] = ", [...new Set([2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])]);
})();