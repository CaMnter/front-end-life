/**
 * Created by：CaMnter
 */

/*******************************
 * 数据结构的默认 Iterator 接口 *
 *******************************/

/**
 * ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性
 * 一个数据结构只要具有 Symbol.iterator 属性，就可以认为是 "可遍历的"
 *
 * Symbol.iterator 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数
 * 执行这个函数，就会返回一个遍历器
 *
 * 属性名 Symbol.iterator，它是一个表达式，返回 Symbol 对象的 iterator 属性
 * 这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内
 */


/**
 * 具有 Symbol.iterator 属性
 * 执行这个属性，会返回一个遍历器对象
 */
(() => {
    let target = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    return {
                        value: 2233,
                        done: true
                    };
                }
            };
        }
    };
})();

/**
 * 原生具备 Iterator 接口
 */
(() => {
    let array = ['save', 'you', 'from', 'anything'];
    let iterator = array[Symbol.iterator]();
    for (let i = 0; i < array.length; i++) {
        console.log("[iterator]  [test-" + 1 + "]  [iterator.next()] = ", iterator.next());
    }
    console.log('');
})();


/**
 * 除开 数组、Set 和 Map 以外
 * 其他数据结构（主要是对象）的 Iterator 接口，都需要自己在 Symbol.iterator 属性上面部署
 * 这样才会被 for...of 循环遍历
 */

/**
 * 实例一：
 * 让对象用上 for...of
 */
(() => {
    class RangeInterator {
        constructor(start, stop) {
            this.value = start;
            this.stop = stop;
        }

        [Symbol.iterator]() {
            return this;
        }

        // 返回对象的格式 {value: ???, done: ???}
        next() {
            let value = this.value;
            if (value < this.stop) {
                this.value++;
                return {value: value, done: false};
            } else {
                return {value: undefined, done: true};
            }
        }
    }

    function getRangeInterator(start, stop) {
        return new RangeInterator(start, stop);
    }

    for (let save of getRangeInterator(1, 7)) {
        console.log("[iterator]  [test-" + 2 + "]  [save] = ", save);
    }

    for (let value of getRangeInterator(1, 7)) {
        console.log("[iterator]  [test-" + 2 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * 实例二：
 * 实现 指针 结构
 */
(() => {
    function Pointer(value) {
        this.value = value;
        this.next = null;
    }

    Pointer.prototype[Symbol.iterator] = function () {
        let iterator = {
            next: next
        };
        let current = this;

        function next() {
            if (current) {
                let value = current.value;
                current = current.next;
                return {
                    value: value,
                    done: false
                };
            } else {
                return {
                    done: true
                };
            }
        }

        return iterator;
    }

    let save = new Pointer('save');
    let you = new Pointer('you');
    let from = new Pointer('from');
    let anything = new Pointer('anything');

    save.next = you;
    you.next = from;
    from.next = anything;

    for (let value of save) {
        console.log("[iterator]  [test-" + 3 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * 实例三：
 * 为对象添加 Iterator 接口
 */
(() => {
    let target = {
        data: [],
        [Symbol.iterator](){
            const self = this;
            let index = 0;

            function next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }

            let iterator = {
                next: next
            }
            return iterator
        }
    }
    let array = ['save', 'you', 'from', 'anything'];
    target.data.push(...array);
    console.log("[iterator]  [test-" + 4 + "]  [target] = ", target);
    for (let targetValue of target) {
        console.log("[iterator]  [test-" + 4 + "]  [targetValue] = ", targetValue);
    }
    console.log('');
})();

/**
 * 实例四：
 * 引用现成的 Iterator 接口
 */
(() => {
    let target = {
        0: 'save',
        1: 'you',
        2: 'from',
        3: 'anything',
        length: 7,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };
    for (let value of target) {
        console.log("[iterator]  [test-" + 5 + "]  [value] = ", value);
    }
    console.log('');
    // 必须对应数组的结构的 对象才可以，普通对象不可以
    let erroTarget = {
        save: 'save',
        you: 'you',
        from: 'from',
        anything: 'anything',
        length: 4,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };
    for (let value of erroTarget) {
        console.log("[iterator]  [test-" + 6 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * Symbol.iterator 返回的必须是 遍历器对象 Iterator
 */
(() => {
    let targetA = {};
    targetA[Symbol.iterator] = () => 2233;
    try {
        for (let value of targetA) {
        }
    } catch (e) {
        console.log("[iterator]  [test-" + 7 + "]  [e] = ", e);
    }

    let targetB = {};
    targetB[Symbol.iterator] = {
        next: function () {
            return {
                value: undefined,
                done: true
            }
        }
    };
    for (let value of targetB) {
    }
})();