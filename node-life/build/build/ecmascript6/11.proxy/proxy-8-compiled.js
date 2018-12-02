'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by：CaMnter
 */

/*********************************
 * ES6 Proxy 代理 ownKeys 的场景 *
 ********************************/

/**
 * ownKeys 方法会拦截：
 *
 * Object.getOwnPropertyNames()
 * Object.getOwnPropertySymbols()
 * Object.keys()
 */
(function () {
    var target = {
        name: 'CaMnter',
        save: 'Save you from anything'
    };
    var proxy = new Proxy(target, {
        count: 0,
        ownKeys: function ownKeys(target) {
            console.log("[proxy]  [test-" + 1 + "]  [ownKeys]  [count] = ", ++this.count);
            return ['???'];
        }
    });
    Object.keys(proxy);
    Object.getOwnPropertyNames(proxy);
    Object.getOwnPropertySymbols(proxy);
    console.log('');
})();

/**
 * 实例：过滤掉 下划线 属性
 */
(function () {
    var target = {
        save: 'save',
        _save: '_save'
    };
    var proxy = new Proxy(target, {
        ownKeys: function ownKeys(target) {
            return Reflect.ownKeys(target).filter(function (key) {
                return key[0] !== '_';
            });
        }
    });
    console.log("[proxy]  [test-" + 2 + "]  [Object.keys(proxy)] = ", Object.keys(proxy), '\n');
})();

/**
 * 在使用 Object.keys() 的时候
 * ownKeys 方法自动过滤：
 *
 * 不存在的属性
 * 属性名为 Symbol
 * 不可遍历（enumerable）的属性
 */
(function () {
    var target = _defineProperty({
        name: 'CaMnter',
        save: 'Save you from anything'
    }, Symbol.for('save'), 'symbol');

    Object.defineProperty(target, 'you', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: 'you'
    });

    var proxy = new Proxy(target, {
        ownKeys: function ownKeys(target) {
            // 不存在的属性、属性名为 Symbol、不可遍历（enumerable）的属性
            return ['name', 'save', Symbol.for('save'), 'you'];
        }
    });
    console.log("[proxy]  [test-" + 3 + "]  [Object.keys(proxy)] = ", Object.keys(proxy), '\n');
})();

/**
 * 如果目标对象自身包含不可配置的属性 configurable = false
 *
 * 则该属性必须被 ownKeys 方法返回，否则报错
 */
(function () {
    var target = {};
    Object.defineProperty(target, 'you', {
        configurable: false,
        enumerable: false,
        value: 'you'
    });
    var proxy = new Proxy(target, {
        ownKeys: function ownKeys(target) {
            return [];
        }
    });
    try {
        console.log("[proxy]  [test-" + 4 + "]  [Object.keys(proxy)] = ", Object.keys(proxy), '\n');
    } catch (e) {
        console.log("[proxy]  [test-" + 4 + "]  [e] = ", e, '\n');
    }
})();

/**
 * 如果目标对象是不可扩展的（non-extension）
 * 这时 ownKeys 方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错
 */
(function () {
    var target = {
        save: 'save'
    };
    Object.preventExtensions(target);
    var proxy = new Proxy(target, {
        ownKeys: function ownKeys(target) {
            return ['_save'];
        }
    });
    try {
        console.log("[proxy]  [test-" + 5 + "]  [Object.keys(proxy)] = ", Object.keys(proxy), '\n');
    } catch (e) {
        console.log("[proxy]  [test-" + 5 + "]  [e] = ", e, '\n');
    }
})();

//# sourceMappingURL=proxy-8-compiled.js.map