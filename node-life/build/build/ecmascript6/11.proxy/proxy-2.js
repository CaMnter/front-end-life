/**
 * Created by：CaMnter
 */

/****************************
 * ES6 Proxy 代理 get 的场景 *
 ****************************/

/**
 * 如果一个对象的属性不存在，访问的话会得到 undefined
 * 但是，我们希望抛出一个错误
 */
(() => {
    let camnter = {
        save: 'Save you from anything'
    };
    var camnterProxy = new Proxy(camnter, {
        get: function (target, propertyKey, receiver) {
            if (propertyKey in target) {
                return target[propertyKey];
            } else {
                throw  new ReferenceError("Property \"" + propertyKey + "\" does not exist.");
            }
        }
    });
    console.log("[proxy]  [test-" + 1 + "]  [camnter.save] = ", camnterProxy.save);
    try {
        console.log("[proxy]  [test-" + 1 + "]  [camnter.name] = ", camnterProxy.name);
    } catch (exception) {
        console.log("[proxy]  [test-" + 1 + "]  [camnter.name # Exception] = ", exception, '\n');
    }
})();

/**
 * 覆写 get 方法
 * 这里就打点 log
 */
(() => {
    let overrideGet = new Proxy({}, {
        tag: 'overrideGet # ',
        get: function (target, propertyKey, receiver) {
            console.log("[proxy]  [test-" + 2 + "]  [overrideGet # propertyKey] = ", propertyKey);
            return Reflect.get(target, propertyKey, receiver);
        }
    });
    let object = Object.create(overrideGet);
    object.save;
})();

/**
 * 实现 负数索引 的数组
 */
(() => {
    function createSmartArray(...elements) {
        let minusIndexArrayHandler = {
            get: function (target, propertyKey, receiver) {
                var index = Number(propertyKey);
                return Reflect.get(
                    target,
                    index < 0 ?
                        String(index + target.length) :
                        propertyKey,
                    receiver);
            }
        };
        let target = [];
        target.push(...elements);
        return new Proxy(target, minusIndexArrayHandler);
    }

    let array = createSmartArray(0, 1, 2, 3, 4, 5);
    console.log("[proxy]  [test-" + 3 + "]  [array[-1]] = ", array[-1]);
    console.log("[proxy]  [test-" + 3 + "]  [array[-2]] = ", array[-2], '\n');
})();

/**
 * 利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的
 *
 * 链式操作
 */
(() => {

    // 无 window 版本

    var double = n => n * 2;
    var pow = n => n * n;
    var reverseInt = n => n.toString().split("").reverse().join("") | 0;

    let pipeMap = new Map();
    pipeMap.set(double.name, double);
    pipeMap.set(pow.name, pow);
    pipeMap.set(reverseInt.name, reverseInt);

    var pipe = (function () {
        return function (value) {
            var funcStack = [];
            var proxy = new Proxy({}, {
                get: function (target, propertyKey, receiver) {
                    if (propertyKey === 'get') {
                        return funcStack.reduce(function (previousFunction, currentFunction) {
                            return currentFunction(previousFunction);
                        }, value);
                    }
                    funcStack.push(pipeMap.get(propertyKey));
                    return proxy;
                }
            });
            return proxy;
        }
    }());
    console.log("[proxy]  [test-" + 4 + "]  [pipe(3).double.pow.reverseInt.get] = ", pipe(3).double.pow.reverseInt.get, '\n');
})();

(() => {
    // 有 window 版本

    var double = n => n * 2;
    var pow = n => n * n;
    var reverseInt = n => n.toString().split("").reverse().join("") | 0;

    var pipe = (function () {
        return function (value) {
            var funcStack = [];
            var proxy = new Proxy({}, {
                get: function (target, propertyKey, receiver) {
                    if (propertyKey === 'get') {
                        return funcStack.reduce(function (previousFunction, currentFunction) {
                            return currentFunction(previousFunction);
                        }, value);
                    }
                    funcStack.push(window[propertyKey]);
                    return proxy;
                }
            });
            return proxy;
        }
    }());
})();

/**
 * 实现一个生成各种 DOM 节点的通用函数 dom
 */
(() => {

    const dom = new Proxy({}, {
        get(target, property) {
            return function (attrs = {}, ...children) {
                const el = document.createElement(property);
                for (let prop of Object.keys(attrs)) {
                    el.setAttribute(prop, attrs[prop]);
                }
                for (let child of children) {
                    if (typeof child === 'string') {
                        child = document.createTextNode(child);
                    }
                    el.appendChild(child);
                }
                return el;
            }
        }
    });

    // const element = dom.div({},
    //     'Save you from anything',
    //     dom.a({href: 'https://www.camnter.com'}, 'Mark'),
    //     '. Save',
    //     dom.ul({},
    //         dom.li({}, 'you'),
    //         dom.li({}, 'from'),
    //         dom.li({}, 'anything')
    //     )
    // );

    // document.body.appendChild(element);

})();

/**
 * 屏蔽 Proxy
 *
 * 如果一个属性不可配置（configurable）和不可写（writable）
 * 则该属性不能被代理，通过 Proxy 对象访问该属性会报错
 */
(() => {
    const target = Object.defineProperties({}, {
        save: {
            value: 'Save you from anything',
            writable: false,
            configurable: false
        },
    });
    const handler = {
        get(target, propertyKey, receiver) {
            return 'Handler # Save you from anything';
        }
    };
    const proxy = new Proxy(target, handler);
    try {
        // 不屏蔽的话，就返回 Handler # Save you from anything
        proxy.save;
    } catch (e) {
        console.log("[proxy]  [test-" + 5 + "]  [e] = ", e);
    }
})();
