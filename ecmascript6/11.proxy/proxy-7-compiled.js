"use strict";

/**
 * Created by：CaMnter
 */

/***************************************
 * ES6 Proxy 代理 defineProperty 的场景 *
 ***************************************/

/**
 * defineProperty 用于拦截 Object.defineProperty 事件
 *
 * 目标对象不可扩展（extensible），则 defineProperty 不能增加目标对象上不存在的属性，否则会报错
 * 目标对象的某个属性不可写（writable）或不可配置（configurable），则 defineProperty 方法不得改变这两个设置
 */
(function () {
    var target = {};
    var proxy = new Proxy(target, {
        defineProperty: function defineProperty(target, key, descriptor) {
            return false;
        }
    });
    proxy.save = 'save';
    console.log("[proxy]  [test-" + 1 + "]  [target] = ", target);
    console.log("[proxy]  [test-" + 1 + "]  [proxy] = ", proxy, '\n');
})();

/**************************************************
 * ES6 Proxy 代理 getOwnPropertyDescriptor 的场景 *
 *************************************************/

/**
 * 拦截 Object.getOwnPropertyDescriptor
 * 返回一个属性描述对象或者 undefined
 */

/**
 * 过滤 _xxx 属性的描述
 */
(function () {
    var target = { _save: '_save', save: 'save' };
    var proxy = new Proxy(target, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
            if (propertyKey[0] === '_') {
                return undefined;
            }
            return Reflect.getOwnPropertyDescriptor(target, propertyKey);
        }
    });
    console.log("[proxy]  [test-" + 2 + "]  [Object.getOwnPropertyDescriptor(proxy, 'save')] = ", Object.getOwnPropertyDescriptor(proxy, 'save'));
    console.log("[proxy]  [test-" + 2 + "]  [Object.getOwnPropertyDescriptor(proxy, '_save')] = ", Object.getOwnPropertyDescriptor(proxy, '_save'), '\n');
})();

/**************************************
 * ES6 Proxy 代理 isExtensible 的场景 *
 **************************************/

/**
 * isExtensible 方法拦截 Object.isExtensible 操作
 *
 * 该方法只能返回布尔值，否则返回值会被自动转为布尔值
 * 这个方法有一个强限制，它的返回值必须与目标对象的 isExtensible 属性保持一致，否则就会抛出错误
 */

(function () {
    var target = {};
    var proxy = new Proxy(target, {
        isExtensible: function isExtensible(target) {
            console.log("[proxy]  [test-" + 3 + "]  [isExtensible] ");
            return Object.isExtensible(target);
        }
    });
    Object.isExtensible(proxy);

    /*
     * target isExtensible 默认是 true
     * 这里返回 false 与之相反会报错
     */
    proxy = new Proxy(target, {
        isExtensible: function isExtensible(target) {
            return false;
        }
    });
    try {
        Object.isExtensible(proxy);
    } catch (e) {
        console.log("[proxy]  [test-" + 3 + "]  [e] = ", e);
    }
})();

//# sourceMappingURL=proxy-7-compiled.js.map