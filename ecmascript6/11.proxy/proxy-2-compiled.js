"use strict";

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
(function () {
    var camnter = {
        save: 'Save you from anything'
    };
    var camnterProxy = new Proxy(camnter, {
        get: function get(target, propertyKey, receiver) {
            if (propertyKey in target) {
                return target[propertyKey];
            } else {
                throw new ReferenceError("Property \"" + propertyKey + "\" does not exist.");
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
(function () {
    var overrideGet = new Proxy({}, {
        tag: 'overrideGet # ',
        get: function get(target, propertyKey, receiver) {
            console.log("[proxy]  [test-" + 2 + "]  [overrideGet # propertyKey] = ", propertyKey);
            return Reflect.get(target, propertyKey, receiver);
        }
    });
    var object = Object.create(overrideGet);
    object.save;
})();

/**
 * 实现 负数索引 的数组
 */
(function () {
    function createSmartArray() {
        var minusIndexArrayHandler = {
            get: function get(target, propertyKey, receiver) {
                var index = Number(propertyKey);
                return Reflect.get(target, index < 0 ? String(index + target.length) : propertyKey, receiver);
            }
        };
        var target = [];
        target.push.apply(target, arguments);
        return new Proxy(target, minusIndexArrayHandler);
    }

    var array = createSmartArray(0, 1, 2, 3, 4, 5);
    console.log("[proxy]  [test-" + 3 + "]  [array[-1]] = ", array[-1]);
    console.log("[proxy]  [test-" + 3 + "]  [array[-2]] = ", array[-2], '\n');
})();

/**
 * 利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的
 *
 * 链式操作
 */
(function () {

    // 无 window 版本

    var double = function double(n) {
        return n * 2;
    };
    var pow = function pow(n) {
        return n * n;
    };
    var reverseInt = function reverseInt(n) {
        return n.toString().split("").reverse().join("") | 0;
    };

    var pipeMap = new Map();
    pipeMap.set(double.name, double);
    pipeMap.set(pow.name, pow);
    pipeMap.set(reverseInt.name, reverseInt);

    var pipe = function () {
        return function (value) {
            var funcStack = [];
            var proxy = new Proxy({}, {
                get: function get(target, propertyKey, receiver) {
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
        };
    }();
    console.log("[proxy]  [test-" + 4 + "]  [pipe(3).double.pow.reverseInt.get] = ", pipe(3).double.pow.reverseInt.get, '\n');
})();

(function () {
    // 有 window 版本

    var double = function double(n) {
        return n * 2;
    };
    var pow = function pow(n) {
        return n * n;
    };
    var reverseInt = function reverseInt(n) {
        return n.toString().split("").reverse().join("") | 0;
    };

    var pipe = function () {
        return function (value) {
            var funcStack = [];
            var proxy = new Proxy({}, {
                get: function get(target, propertyKey, receiver) {
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
        };
    }();
})();

/**
 * 实现一个生成各种 DOM 节点的通用函数 dom
 */
(function () {

    var dom = new Proxy({}, {
        get: function get(target, property) {
            return function () {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var el = document.createElement(property);
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(attrs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var prop = _step.value;

                        el.setAttribute(prop, attrs[prop]);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    children[_key - 1] = arguments[_key];
                }

                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        if (typeof child === 'string') {
                            child = document.createTextNode(child);
                        }
                        el.appendChild(child);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                return el;
            };
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
(function () {
    var target = Object.defineProperties({}, {
        save: {
            value: 'Save you from anything',
            writable: false,
            configurable: false
        }
    });
    var handler = {
        get: function get(target, propertyKey, receiver) {
            return 'Handler # Save you from anything';
        }
    };
    var proxy = new Proxy(target, handler);
    try {
        // 不屏蔽的话，就返回 Handler # Save you from anything
        proxy.save;
    } catch (e) {
        console.log("[proxy]  [test-" + 5 + "]  [e] = ", e);
    }
})();

//# sourceMappingURL=proxy-2-compiled.js.map