/**
 * Created by：CaMnter
 */

/*****************
 * 类似数组的对象 *
 *****************/

/**
 * 正确识别 32 位 UTF-16 字符
 */
(() => {
    for (let value of 'z\uD83D\uDC0A') {
        console.log("[iterator]  [test-" + 1 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * 类似数组的对象
 */
(() => {
    let arrayLike = {length: 4, 0: 'save', 1: 'you', 2: 'from', 3: 'anything'};
    // 报错
    try {
        for (let value of arrayLike) {
        }
    } catch (e) {
        console.log("[iterator]  [test-" + 2 + "]  [e] = ", e);
    }
    for (let value of Array.from(arrayLike)) {
        console.log("[iterator]  [test-" + 2 + "]  [value] = ", value);
    }
    console.log('');
})();


/********
 * 对象 *
 ********/

/**
 * for...of 不能遍历对象
 * for...in 能拿到对象的属性名，相当于 keys
 */

/**
 * for...in 配合对象本身去遍历对象属性值
 *
 * 或者
 *
 * 对象.keys() + for...of
 */
let camnter = {
    s: 'save',
    y: 'you',
    f: 'from',
    a: 'anything'
};
(() => {
    for (let key in camnter) {
        console.log("[iterator]  [test-" + 3 + "]  [key] = ", key, "  [value] = ", camnter[key]);
    }

    // Object.keys(target) + for...of
    for (let key of Object.keys(camnter)) {
        console.log("[iterator]  [test-" + 3 + "]  [key] = ", key, "  [value] = ", camnter[key]);
    }
    console.log('');
})();

/**
 * 用 Generator 包装对象
 */
(() => {
    function* entries(object) {
        for (let key of Object.keys(object)) {
            yield [key, object[key]];
        }
    }

    for (let [key, value] of entries(camnter)) {
        console.log("[iterator]  [test-" + 4 + "]  [key] = ", key, "  [value] = ", camnter[key]);
    }
})();


/********
 * 比较 *
 ********/

/**
 * forEach 无法中途跳出，break 命令或 return 命令都不行
 * for...in 循环主要是为遍历对象而设计的，不适用于遍历数组
 *
 * for...of 除了遍历没有实现 Iterator 接口的对象外，都可以快速遍历
 *
 * 对于 没有实现 Iterator 接口的对象，可以实现 实现 [Symbol.iterator] （ 作为一个开发必备的设计素养 ）
 * 当然也可以 对象.keys() + for...of
 */