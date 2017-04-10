'use strict';

/**
 * Created by：CaMnter
 */

/************
 * Iterator *
 ************/

/**
 * 作用：
 * 1. 是为各种数据结构，提供一个统一的、简便的访问接口
 * 2. 是使得数据结构的成员能够按某种次序排列
 * 3. 是 ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费
 */

/**
 * 遍历过程：
 *
 * 1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象
 * 2. 第一次调用指针对象的 next 方法，可以将指针指向数据结构的第一个成员
 * 3. 第二次调用指针对象的 next 方法，指针就指向数据结构的第二个成员
 * 4. 不断调用指针对象的 next 方法，直到它指向数据结构的结束位置
 *
 * 每一次调用 next 方法，都会返回数据结构的当前成员的信息。
 * 具体来说，就是返回一个包含 value 和 done 两个属性的对象。
 * 其中，value 属性是当前成员的值，done 属性是一个布尔值，表示遍历是否结束
 */

/**
 * 模拟 Iterator
 */
(function () {
    function makeIterator(array) {
        var nextIndex = 0;
        return {
            next: function next() {
                return nextIndex < array.length ? { value: array[nextIndex++] } : { done: true };
            }
        };
    };
    var array = ['save', 'you', 'from', 'anything'];
    var iterator = makeIterator(array);
    for (var i = 0; i < array.length + 1; i++) {
        console.log("[iterator]  [test-" + 1 + "]  [iterator.next()] = ", iterator.next());
    }
    console.log('');
})();

/**
 * 无限 Iterator
 */
(function () {
    function idCreater() {
        var index = 0;
        return {
            next: function next() {
                return { value: index++, done: false };
            }
        };
    }

    var creater = idCreater();
    for (var i = 1; i <= 7; i++) {
        console.log("[iterator]  [test-" + 2 + "]  [creater.next()] = ", creater.next());
    }
    console.log('');
})();

/**
 * ES6 中，有些数据结构原生具备 Iterator 接口
 * 就可以被 for...of 循环遍历
 *
 * 原因在于，这些数据结构原生部署了 Symbol.iterator 属性
 * 另外一些数据结构没有。凡是部署了 Symbol.iterator 属性的数据结构，就称为部署了遍历器接口
 */

//# sourceMappingURL=iterator-1-compiled.js.map