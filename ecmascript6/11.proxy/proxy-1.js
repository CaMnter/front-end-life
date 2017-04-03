/**
 * Created by：CaMnter
 */

/******************
 * ES6 Proxy 基本 *
 ******************/

/**
 * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改
 * 所以属于一种 "元编程"（meta programming），即对编程语言进行编程
 *
 * Proxy 可以理解成，在目标对象之前架设一层 "拦截"
 * 外界对该对象的访问，都必须先通过这层拦截
 * 因此提供了一种机制，可以对外界的访问进行过滤和改写
 * Proxy 这个词的原意是代理，用在这里表示由它来 "代理" 某些操作，可以译为 "代理器"
 */

/**
 * ES6 原生提供 Proxy 构造函数：
 * var proxy = new Proxy(target, handler);
 * target 参数表示所要拦截的目标对
 * handler 参数也是一个对象，用来定制拦截行为
 *
 * 注意: 要使得 Proxy 起作用，必须针对 Proxy 实例（上例是 proxy 对象）进行操作
 * 而不是针对目标对象（上例是空对象）进行操作
 *
 * Proxy 实际上重载（overload）了点运算符
 * 即用自己的定义覆盖了语言的原始定义
 */
(() => {
    var proxy = new Proxy({}, {
        get: function (target, propertyKey, receiver) {
            console.log("[proxy]  [test-" + 1 + "]  [proxy#get  propertyKey] = ", propertyKey);
            return Reflect.get(target, propertyKey, receiver);
        },
        set: function (target, propertyKey, value, receiver) {
            console.log("[proxy]  [test-" + 1 + "]  [proxy#set  propertyKey] = ", propertyKey);
            return Reflect.set(target, propertyKey, value, receiver);
        }
    })
    proxy.index = 2;
    ++proxy.index;
    console.log('');
})();

(() => {
    var proxy = new Proxy({}, {
        get: function (target, propertyKey, receiver) {
            return 67;
        }
    });
    console.log("[proxy]  [test-" + 2 + "]  [proxy.name] = ", proxy.name);
    console.log("[proxy]  [test-" + 2 + "]  [proxy.save] = ", proxy.save);
    console.log("[proxy]  [test-" + 2 + "]  [proxy.sign] = ", proxy.sign, '\n');
})();

/**
 * 如果 handler 没有设置任何拦截，那就等同于直接通向原对象
 */
(() => {
    var target = {};
    var handler = {};
    // handler 是一个空对象，没有任何拦截效果，访问 handler 就等同于访问 target
    let proxy = new Proxy(target, handler);
    proxy.save = 'Save you from anything';
    console.log("[proxy]  [test-" + 2 + "]  [target.name] = ", target.save, '\n');
})();


/**
 * 技巧
 */
(() => {
    var proxy = new Proxy({}, {
        get: function (target, property) {
            return 'Save you from anything';
        }
    });

    let object = Object.create(proxy);
    console.log("[proxy]  [test-" + 3 + "]  [object.save] = ", object.save, '\n');
})();

/**
 * 设置拦截多个操作
 */
(() => {
    let hanlder = {
        tag: '[handler]  #  ',
        get: function (target, propertyKey, receiver) {
            if (propertyKey === 'prototype') {
                return Object.prototype;
            }
            return this.tag + propertyKey;
        },
        apply: function (target, thisArgument, argumentsList) {
            return argumentsList[0];
        },
        construct: function (target, argumentsList) {
            return {value: argumentsList[1]};
        }
    };

    let functionProxy = new Proxy(function (x, y) {
        return x + y;
    }, hanlder);
    // handler 代理了 apply 方法
    console.log("[proxy]  [test-" + 4 + "]  [functionProxy(22, 33)] = ", functionProxy(22, 33));
    // handler 代理了 construct 方法
    console.log("[proxy]  [test-" + 4 + "]  [new functionProxy(22, 33)] = ", new functionProxy(22, 33));
    // handler 代理了 get
    console.log("[proxy]  [test-" + 4 + "]  [functionProxy.prototype === Object.prototype] = ", functionProxy.prototype === Object.prototype);
    console.log("[proxy]  [test-" + 4 + "]  [functionProxy.save] = ", functionProxy.save);
})();

/**
 （1）get(target, propKey, receiver)

 拦截对象属性的读取，比如 proxy.foo 和 proxy['foo']。

 最后一个参数receiver是一个对象，可选，参见下面 Reflect.get 的部分。

 （2）set(target, propKey, value, receiver)

 拦截对象属性的设置，比如 proxy.foo = v 或 proxy['foo'] = v，返回一个布尔值。

 （3）has(target, propKey)

 拦截 propKey in proxy 的操作，返回一个布尔值。

 （4）deleteProperty(target, propKey)

 拦截 delete proxy[propKey] 的操作，返回一个布尔值。

 （5）ownKeys(target)

 拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys() 的返回结果仅包括目标对象自身的可遍历属性。

 （6）getOwnPropertyDescriptor(target, propKey)

 拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

 （7）defineProperty(target, propKey, propDesc)

 拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

 （8）preventExtensions(target)

 拦截 Object.preventExtensions(proxy)，返回一个布尔值。

 （9）getPrototypeOf(target)

 拦截 Object.getPrototypeOf(proxy)，返回一个对象。

 （10）isExtensible(target)

 拦截 Object.isExtensible(proxy)，返回一个布尔值。

 （11）setPrototypeOf(target, proto)

 拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值。

 如果目标对象是函数，那么还有两种额外操作可以拦截。

 （12）apply(target, object, args)

 拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

 （13）construct(target, args)

 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
 */