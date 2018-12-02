"use strict";

/**
 * Created by：CaMnter
 */

/***********************************
 * ES6 Proxy 代理 construct 的场景 *
 **********************************/

/**
 *  construct 方法用于拦截 new
 *
 *  target             - 对象
 *  argumentsList      - 参数
 */

/**
 * 实例：数 翻十倍
 */
(function () {
    var proxy = new Proxy(function () {}, {
        construct: function construct(target, argumentsList) {
            return { value: argumentsList[0] * 10 };
        }
    });
    console.log("[proxy]  [test-" + 1 + "]  [(new proxy(67)).value] = ", new proxy(67).value, '\n');
})();

/**
 * construct 必须返回一个对象
 * 否则，会报错
 */
(function () {
    var proxy = new Proxy(function () {}, {
        construct: function construct(target, argumentsList) {
            return 2233;
        }
    });
    try {
        console.log("[proxy]  [test-" + 2 + "]  [(new proxy(67)).value] = ", new proxy(67).value, '\n');
    } catch (e) {
        console.log("[proxy]  [test-" + 2 + "]  [e] = ", e, '\n');
    }
})();

/****************************************
 * ES6 Proxy 代理 deleteProperty 的场景 *
 ***************************************/

/**
 * deleteProperty 方法用于拦截 delete 操作
 */

/**
 * 实例：不允许删除 _xxx 属性
 */
(function () {
    var target = { _save: 'save' };
    var proxy = new Proxy(target, {
        deleteProperty: function deleteProperty(target, propertyKey) {
            this.invariant(propertyKey, 'delete');
            Reflect.deleteProperty(target, propertyKey);
        },
        invariant: function invariant(propertyKey, action) {
            if (propertyKey[0] === '_') {
                throw new Error("Invalid attempt to " + action + " private \"" + propertyKey + "\" property");
            }
        }
    });
    try {
        delete proxy._save;
    } catch (e) {
        console.log("[proxy]  [test-" + 3 + "]  [e] = ", e, '\n');
    }
})();

//# sourceMappingURL=proxy-6-compiled.js.map