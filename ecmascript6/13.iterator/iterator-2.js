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
 * 实例：
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
})();