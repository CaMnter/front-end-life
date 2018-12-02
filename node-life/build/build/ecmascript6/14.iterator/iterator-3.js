/**
 * Created by：CaMnter
 */

/***************************
 * 调用 Iterator 接口的场合 *
 ***************************/

/**
 * 解构解析
 * 默认调用 Symbol.iterator
 */
(() => {
    let set = new Set().add('save').add('you').add('from').add('anything');
    let [save, you, from, anything] = set;
    let [first, ...second] = set;

    console.log("[iterator]  [test-" + 1 + "]  [save] = ", save);
    console.log("[iterator]  [test-" + 1 + "]  [you] = ", you);
    console.log("[iterator]  [test-" + 1 + "]  [from] = ", from);
    console.log("[iterator]  [test-" + 1 + "]  [anything] = ", anything);
    console.log("[iterator]  [test-" + 1 + "]  [first] = ", first);
    console.log("[iterator]  [test-" + 1 + "]  [second] = ", second, '\n');
})();

/**
 * 扩展运算符
 * let array = [...iterator]
 * 默认调用 Symbol.iterator
 */
(() => {
    let you = 'you';
    console.log("[iterator]  [test-" + 2 + "]  [...you] = ", [...you]);
    console.log("[iterator]  [test-" + 2 + "]  [...you] = ", ['Save', ...you], '\n');
})();


/**************************
 * 字符串的 Iterator 接口 *
 *************************/

/**
 * 字符串是一个类似数组的对象，也原生具有 Iterator 接口
 */
(() => {
    let save = 'Save';
    console.log("[iterator]  [test-" + 3 + "]  [typeof save[Symbol.iterator]] = ", typeof save[Symbol.iterator]);
    console.log("[iterator]  [test-" + 3 + "]  [save[Symbol.iterator]()] = ", save[Symbol.iterator]());
    let iterator = save[Symbol.iterator]();
    for (let i = 0; i < save.length + 1; i++) {
        console.log("[iterator]  [test-" + 3 + "]  [iterator.next()] = ", iterator.next());
    }
    console.log('');
})();

/**
 * 实现 倒遍历
 */
(() => {
    // 不能写 let save = 'Save'
    let save = new String('Save');
    console.log("[iterator]  [test-" + 4 + "]  [...save] = ", [...save]);
    save[Symbol.iterator] = function () {
        let iterator = {
            next: next
        };
        let current = this;
        var index = current.length;

        function next() {
            if (index <= 0) {
                return {
                    done: true
                }
            } else {
                return {
                    value: current[--index],
                    done: false
                }
            }
        }

        return iterator;
    }
    console.log("[iterator]  [test-" + 4 + "]  [...save] = ", [...save], '\n');
})();


