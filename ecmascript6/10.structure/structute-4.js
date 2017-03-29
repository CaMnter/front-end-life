/**
 * Created by：CaMnter
 */

/***********
 * WeakSet *
 ***********/

/**
 * WeakSet 只能存对象
 *
 * 内部的对象都是弱引用
 * 如果对象没用被其他对象引用的话，会被垃圾回收机制回收对象占用的内存
 *
 * WeakSet 是不可遍历的
 * 成员都是弱引用
 * 遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了
 */
(() => {
    let weakSet = new WeakSet();
    try {
        weakSet.add(233);
    } catch (e) {
        console.log("[structure]\t\t[test-" + 1 + "]\t\t[e] = ", e, '\n');
    }
    try {
        weakSet.add(Symbol());
    } catch (e) {
        console.log("[structure]\t\t[test-" + 1 + "]\t\t[e] = ", e, '\n');
    }
    console.log('\n')
})();


/**
 * WeakSet 可以接收一个 数组，但是内容必须是对象
 * 就是 对象数组
 *
 * 可以接收具有 Iterator 接口的对象
 */
(() => {
    let array = [22, 33], arrayOfArray = [[2, 3, 3], array];
    var weakSet = new WeakSet(arrayOfArray);
    // 然而什么都没有看到
    console.log("[structure]\t\t[test-" + 2 + "]\t\t[weakSet] = ", weakSet);
    // 但是却有
    console.log("[structure]\t\t[test-" + 2 + "]\t\t[weakSet.has(array)] = ", weakSet.has(array), '\n');

    try {
        weakSet = new WeakSet(array);
    } catch (e) {
        console.log("[structure]\t\t[test-" + 3 + "]\t\t[e] = ", e, '\n');
    }
})();


/**
 * WeakSet.prototype.add(value)
 * WeakSet.prototype.delete(value)
 * WeakSet.prototype.has(value)
 */
(() => {
    let weakSet = new WeakSet();
    let o1 = {}, o2 = {};

    weakSet.add(o1);
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[weakSet.has(o1)] = ", weakSet.has(o1));
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[weakSet.has(o2)] = ", weakSet.has(o2));
    weakSet.delete(o1);
    console.log("[structure]\t\t[test-" + 4 + "]\t\t[weakSet.has(o1)] = ", weakSet.has(o1), '\n');
})();

/**
 * 跟 Iterator 相关的
 * 都没有
 * size
 * forEach
 */
(() => {
    let weakSet = new WeakSet();
    weakSet.add({});
    console.log("[structure]\t\t[test-" + 5 + "]\t\t[weakSet.size] = ", weakSet.size);
    console.log("[structure]\t\t[test-" + 5 + "]\t\t[weakSet.forEach] = ", weakSet.forEach);
    try {
        weakSet.forEach(v => v.save = 'save');
    } catch (e) {
        console.log("[structure]\t\t[test-" + 5 + "]\t\t[e] = ", e, '\n');
    }
})();

/**
 * WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏
 */
(() => {
    const fruits = new WeakSet()
    class Fruit {
        constructor() {
            fruits.add(this)
        }

        // 该方法只能在实例上调用
        method() {
            if (!fruits.has(this)) {
                throw new TypeError('Invoke Exception');
            }
            console.log("[structure]\t\t[test-" + 6 + "]\t\t[Fruit]      [method]", '\n');
        }
    }

    try {
        Fruit.prototype.method(); // error
    } catch (e) {
        console.log("[structure]\t\t[test-" + 6 + "]\t\t[e] = ", e);
    }
    let fruit = new Fruit();
    fruit.method(); // ok

})();