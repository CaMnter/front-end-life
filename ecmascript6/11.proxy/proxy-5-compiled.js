'use strict';

/**
 * Created by：CaMnter
 */

/*****************************
 * ES6 Proxy 代理 has 的场景 *
 *****************************/

/**
 * has 方法用来拦截 hasProperty 操作，即判断对象是否具有某个属性时，这个方法会生效
 * 典型的操作就是 in 运算符
 */

/**
 * 隐藏 _Xxx 属性
 */
(function () {
    var target = { _save: 'save', save: 'save' };
    var proxy = new Proxy(target, {
        has: function has(target, propertyKey) {
            if (propertyKey[0] === '_') return false;
            return Reflect.has(target, propertyKey);
        }
    });
    console.log("[proxy]  [test-" + 1 + "]  [proxy] = ", proxy);
    console.log("[proxy]  [test-" + 1 + "]  ['save' in proxy] = ", 'save' in proxy);
    console.log("[proxy]  [test-" + 1 + "]  ['_save' in proxy] = ", '_save' in proxy, '\n');
})();

/**
 * 对象 不可配置 和 禁止扩展
 */
(function () {
    var object = { save: 'save' };
    // 设置对象不可扩展
    Object.preventExtensions(object);
    var proxy = new Proxy(object, {
        has: function has(target, propertyKey) {
            return false;
        }
    });
    console.log("[proxy]  [test-" + 2 + "]  ['save' in object] = ", 'save' in object);
    try {
        console.log("[proxy]  [test-" + 2 + "]  ['save' in object] = ", 'save' in proxy, '\n');
    } catch (e) {
        console.log("[proxy]  [test-" + 2 + "]  [e] = ", e, '\n');
    }
})();

/**
 * has 方法拦截的是 HasProperty 操作，而不是 HasOwnProperty 操作
 *
 * has 方法 不判断一个属性是对象自身的属性，还是继承的属性
 */

/**
 * 注意：has 拦截对 for...in 是没效果的
 */
(function () {
    var objectA = { save: 'save' };
    var objectB = { _save: '_save' };

    var handler = {
        has: function has(target, propertyKey) {
            if (propertyKey[0] === '_') {
                return false;
            }
            return Reflect.has(target, propertyKey);
        }
    };

    var proxyA = new Proxy(objectA, handler);
    var proxyB = new Proxy(objectB, handler);
    console.log("[proxy]  [test-" + 3 + "]  ['save' in inProxyA] = ", 'save' in proxyA);
    console.log("[proxy]  [test-" + 3 + "]  ['_save' in objectB] = ", '_save' in proxyB);

    for (var propertyKey in proxyA) {
        console.log("[proxy]  [test-" + 3 + "]  [proxyA[propertyKey]] = ", proxyA[propertyKey]);
    }
    // 如果拦截的话，就不会输出
    // 但是实际上输出了
    for (var _propertyKey in proxyB) {
        console.log("[proxy]  [test-" + 3 + "]  [proxyB[propertyKey]] = ", proxyB[_propertyKey]);
    }
})();

//# sourceMappingURL=proxy-5-compiled.js.map