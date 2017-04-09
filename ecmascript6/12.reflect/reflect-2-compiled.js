'use strict';

/**
 * Created by：CaMnter
 */

/*********************************
 * Reflect + Proxy 实现观察者模式 *
 *********************************/

(function () {

    var queuedObservers = new Set();
    var observe = function observe(func) {
        return queuedObservers.add(func);
    };
    var observable = function observable(target) {
        return new Proxy(target, { set: set });
    };

    // Proxy set 监听 set
    // 如果观察到调用了 set ，遍历 方法集合，一个一个方法调用
    function set(target, key, value, receiver) {
        var result = Reflect.set(target, key, value, receiver);
        queuedObservers.forEach(function (observer) {
            return observer();
        });
        return result;
    }

    var camnter = observable({
        name: 'CaMnter',
        age: 23
    });

    function showCaMnter() {
        console.log(camnter.name + ', ' + camnter.age);
    }

    // 添加观察方法到 方法集合里
    observe(showCaMnter);
    camnter.age = 2233;
})();

//# sourceMappingURL=reflect-2-compiled.js.map