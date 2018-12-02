/**
 * Created by：CaMnter
 */

/*********************************
 * Reflect + Proxy 实现观察者模式 *
 *********************************/

(() => {

    const queuedObservers = new Set();
    const observe = func => queuedObservers.add(func);
    const observable = target => new Proxy(target, {set});

    // Proxy set 监听 set
    // 如果观察到调用了 set ，遍历 方法集合，一个一个方法调用
    function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        queuedObservers.forEach(observer => observer());
        return result;
    }

    const camnter = observable({
        name: 'CaMnter',
        age: 23
    });

    function showCaMnter() {
        console.log(`${camnter.name}, ${camnter.age}`)
    }

    // 添加观察方法到 方法集合里
    observe(showCaMnter);
    camnter.age = 2233;

})();