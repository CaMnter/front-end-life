/**
 * Created by：CaMnter
 */

/***********************
 * ES6 Proxy this 问题 *
 **********************/

/**
 * Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理
 * 在不做任何拦截的情况下，也无法保证与目标对象的行为一致
 *
 * 主要原因
 *  Proxy 代理的情况下
 *  目标对象内部的 this 关键字会指向 Proxy 代理
 */
(() => {
    let target = {
        compareThis: function () {
            return this === proxy;
        }
    };
    let proxy = new Proxy(target, {});
    console.log("[proxy]  [test-" + 1 + "]  [target.compareThis()] = ", target.compareThis());
    console.log("[proxy]  [test-" + 1 + "]  [proxy.compareThis()] = ", proxy.compareThis(), '\n');
})();

/**
 * this 指向的变化，导致 Proxy 无法代理目标对象
 */
(() => {
    let personMap = new WeakMap();
    class Person {
        constructor(name) {
            personMap.set(this, name);
        }

        get name() {
            let name = personMap.get(this);
            console.log("[proxy]  [test-" + 2 + "]  [get name]  ", "   [personMap.get(this)] = ", name);
            return name;
        }
    }
    let you = new Person('you');
    you.name;
    let youProxy = new Proxy(you, {});
    // youProxy.name 访问时，this 指向 youProxy，导致无法取到值，所以返回 undefined
    youProxy.name;

    console.log('');
})();

/**
 * 有些原生对象的内部属性，只有通过正确的 this 才能拿到
 * Proxy 也无法代理这些原生对象的属性
 *
 * 解决办法：this 绑定原对象
 */
(() => {
    let date = new Date('2017-02-07');
    let proxy = new Proxy(date, {});
    try {
        proxy.getDate();
    } catch (e) {
        console.log("[proxy]  [test-" + 3 + "]  [e] = ", e, '\n');
    }

    let getDateHandler = {
        get(target, propertyKey, receiver){
            if (propertyKey === 'getDate') {
                return target.getDate.bind(target);
            }
            return Reflect.get(target, propertyKey, receiver);
        }
    }
    let smartProxy = new Proxy(date, getDateHandler);
    console.log("[proxy]  [test-" + 3 + "]  [smartProxy.getDate()] = ", smartProxy.getDate(), '\n');
})();
