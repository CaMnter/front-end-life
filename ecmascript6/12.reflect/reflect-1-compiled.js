"use strict";

/**
 * Created by：CaMnter
 */

/********************
 * ES6 Reflect 基本 *
 ********************/

/**
 * 优点一：
 * 某些方法同时在 Object 和 Reflect 对象上部署
 * 未来的新方法将只部署在 Reflect 对象上
 * 也就是说，从 Reflect 对象上可以拿到语言内部的方法
 */

/**
 * 优点二：
 * 修改某些 Object 方法的返回结果，让其变得更合理
 *
 * Object.defineProperty(obj, name, desc) 在无法定义属性时，会抛出一个错误
 * 而 Reflect.defineProperty(obj, name, desc) 则会返回 false。
 */

/**
 * 优点三：
 * 命令式 变为 函数式
 */
(function () {
    var target = { save: 'save' };
    console.log("[reflect]  [test-" + 1 + "]  ['save' in target] = ", 'save' in target);
    console.log("[reflect]  [test-" + 1 + "]  [Reflect.has(target, 'save')] = ", Reflect.has(target, 'save'), '\n');
})();

/**
 * 优点四：
 * Proxy 的时候，用 Reflect 完成默认行为
 * 不管 Proxy 怎么修改默认行为，总可以在 Reflect 上获取默认行为
 */
(function () {
    var target = { save: 'save', _save: '_save' };
    var proxy = new Proxy(target, {
        get: function get(target, propertyKey, receiver) {
            if (propertyKey[0] === '_') {
                throw Error('Can\'t get hidden attribute');
            } else {
                Reflect.get(target, propertyKey, receiver);
            }
        }
    });
    try {
        proxy._save;
    } catch (e) {
        console.log("[reflect]  [test-" + 2 + "]  [e] = ", e, '\n');
    }

    var loggedObj = new Proxy(target, {
        get: function get(target, name) {
            console.log('get', target, name);
            return Reflect.get(target, name);
        },
        deleteProperty: function deleteProperty(target, name) {
            console.log('delete' + name);
            return Reflect.deleteProperty(target, name);
        },
        has: function has(target, name) {
            console.log('has' + name);
            return Reflect.has(target, name);
        }
    });
})();

/**
 * 很多操作 更易读
 */
(function () {
    // old
    console.log("[reflect]  [test-" + 2 + "]  [Function.prototype.apply.call(Math.floor, undefined, [1.75])] = ", Function.prototype.apply.call(Math.floor, undefined, [1.75]));
    // new
    console.log("[reflect]  [test-" + 2 + "]  [Reflect.apply(Math.floor, undefined, [1.75])] = ", Reflect.apply(Math.floor, undefined, [1.75]));
})();

//# sourceMappingURL=reflect-1-compiled.js.map