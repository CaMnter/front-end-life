/**
 * Created by：CaMnter
 */


/***************
 * ES6 WeakMap *
 ***************/

/**
 * WeakMap 只接受对象作为 key，除开 null
 * 键名所指向的对象，不计入垃圾回收机制
 */

(() => {
    let weakMap = new WeakMap();
    try {
        weakMap.set(2, 233);
    } catch (e) {
        console.log("[structure]  [test-" + 1 + "]  [e] = ", e, '\n');
    }
    try {
        weakMap.set(Symbol('save'), 233);
    } catch (e) {
        console.log("[structure]  [test-" + 1 + "]  [e] = ", e, '\n');
    }
})();

/**
 * WeakMap 的设计目的在于，键名是对象的弱引用（垃圾回收机制不将该引用考虑在内）
 * 所以其所对应的对象可能会被自动回收
 * 当对象被回收后，WeakMap 自动移除对应的键值对
 *
 * 一个对应 DOM 元素的 WeakMap 结构
 * 当某个 DOM 元素被清除，其所对应的 WeakMap 记录就会自动被移除
 * 基本上，WeakMap 的专用场合就是，它的键所对应的对象，可能会在将来消失
 *
 * WeakMap 结构有助于防止内存泄漏
 */
(() => {
    var objectKey = {};
    let weakMap = new WeakMap();

    weakMap.set(objectKey, 233);
    console.log("[structure]  [test-" + 2 + "]  [weakMap.get(objectKey)] = ", weakMap.get(objectKey));
    objectKey = null;
    // 找不到了
    console.log("[structure]  [test-" + 2 + "]  [weakMap.get(objectKey)] = ", weakMap.get(objectKey), '\n');
})();

/**
 * WeakMap 与 Map 在 API 上的区别主要是两个：
 * 一：是没有遍历操作。没有 key()、values()、entries()
 * 二：无法清空，即不支持 clear 方法
 *
 * 因为 WeakMap 的键不被计入引用、被垃圾回收机制忽略有关
 * 所以，WeakMap 只有四个方法：get()、set()、has()、delete()
 */
(() => {
    var objectKey = {};
    let weakMap = new WeakMap();
    weakMap.set(objectKey, 233);
    console.log("[structure]  [test-" + 3 + "]  [weakMap.key] = ", weakMap.key);
    console.log("[structure]  [test-" + 3 + "]  [weakMap.size] = ", weakMap.size);
    console.log("[structure]  [test-" + 3 + "]  [weakMap.values] = ", weakMap.values);
    console.log("[structure]  [test-" + 3 + "]  [weakMap.entries] = ", weakMap.entries);
})();

/**
 * WeakMap 应用的典型场合就是 DOM 节点作为键名
 *
 * 每当发生 click 事件，就更新一下状态
 * 当这个 DOM 节点被移除时，相应的状态也会被移除
 */
// (() => {
//     let element = document.getElementById('banner');
//     let weakMap = new WeakMap();
//
//     weakMap.set(element, {timesClicked: 0});
//
//     element.addEventListener('click', function () {
//         let bannerData = weakMap.get(element);
//         bannerData.timesClicked++;
//     }, false);
// })();

/**
 * 作用：私有属性
 */
(() => {
    let _counter = new WeakMap();
    let _action = new WeakMap();

    class Countdown {
        constructor(counter, action) {
            _counter.set(this, counter);
            _action.set(this, action);
        }

        dec() {
            let counter = _counter.get(this);
            if (counter < 1) return;
            counter--;
            _counter.set(this, counter);
            if (counter === 0) {
                _action.get(this)();
            }
        }
    }
    let LIMIT = 7;
    let countdown = new Countdown(LIMIT, () => console.log("[structure]  [test-" + 4 + "]  [Countdown#dec]   time out"));
    for (let i = 0; i < LIMIT; i++) {
        countdown.dec();
    }
    countdown = null;
    console.log("[structure]  [test-" + 4 + "]  [_counter.get(countdown)] = ", _counter.get(countdown));
    console.log("[structure]  [test-" + 4 + "]  [_action.get(countdown)] = ", _action.get(countdown));
})();