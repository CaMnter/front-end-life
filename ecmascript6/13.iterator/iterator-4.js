/**
 * Created by：CaMnter
 */

/**********************************
 * Iterator 接口与 Generator 函数 *
 *********************************/

(() => {
    let generator = {};
    // Symbol.iterator 可以直接写 generator 函数
    generator[Symbol.iterator] = function *() {
        yield 2;
        yield 3;
        yield 3;
    };
    console.log("[iterator]  [test-" + 1 + "]  [...generator] = ", [...generator]);

    // 简洁写法
    let smartGenerator = {
        *[Symbol.iterator](){
            yield 'save';
            yield 'you';
            yield 'from';
            yield 'anything';
        }
    };
    for (let value of smartGenerator) {
        console.log("[iterator]  [test-" + 1 + "]  [value] = ", value);
    }
    console.log('');
})();


/*********************************
 * 遍历器对象的 return()，throw() *
 *********************************/

/**
 * Iterator 对象除了 next 方法外还有 return 和 throw 方法
 *
 * next 必须
 * return 非必须
 * throw 非必须
 */

/**
 * return 的场合
 *
 * 如果 for...of 循环提前退出（ 出错，break 或 continue 等 ）
 * 就会调用 return
 *
 * 如果一个对象在完成遍历前，需要清理或释放资源，就可以部署 return 方法
 *
 * 注意，return 方法必须返回一个对象
 */
(() => {
    function readLinesSync(file) {
        return {
            next() {
                if (file.isAtEndOfFile()) {
                    file.close();
                    return {done: true};
                }
            },
            return() {
                file.close();
                return {done: true};
            },
        };
    }
})();


/********
 * 数组 *
 ********/

/**
 * 实例一：
 * 对象上用 数组的 Iterator 和 数据
 */
(() => {
    let source = ['save', 'you', 'from', 'anything'];
    let target = {};
    target[Symbol.iterator] = source[Symbol.iterator].bind(source);
    for (let value of target) {
        console.log("[iterator]  [test-" + 2 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * for...in
 * for...of
 */
(() => {
    let target = ['save', 'you', 'from', 'anything'];
    // index
    for (let index in target) {
        console.log("[iterator]  [test-" + 3 + "]  [index] = ", index);
    }
    // value
    for (let value of target) {
        console.log("[iterator]  [test-" + 3 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * for...of 循环调用遍历器接口
 * 数组的遍历器接口 只返回 索引是数字的属性
 */
(() => {
    let target = ['save', 'you', 'from', 'anything'];
    target.forever = 'forever';
    console.log("[iterator]  [test-" + 4 + "]  [target] = ", target);
    // forever 不是数组 index
    for (let index in target) {
        console.log("[iterator]  [test-" + 4 + "]  [index] = ", index);
    }
    // for...of 不返回
    for (let value of target) {
        console.log("[iterator]  [test-" + 4 + "]  [value] = ", value);
    }
})();