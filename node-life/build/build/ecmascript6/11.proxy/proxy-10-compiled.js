"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
(function () {
    var target = {
        compareThis: function compareThis() {
            return this === proxy;
        }
    };
    var proxy = new Proxy(target, {});
    console.log("[proxy]  [test-" + 1 + "]  [target.compareThis()] = ", target.compareThis());
    console.log("[proxy]  [test-" + 1 + "]  [proxy.compareThis()] = ", proxy.compareThis(), '\n');
})();

/**
 * this 指向的变化，导致 Proxy 无法代理目标对象
 */
(function () {
    var personMap = new WeakMap();

    var Person = function () {
        function Person(name) {
            _classCallCheck(this, Person);

            personMap.set(this, name);
        }

        _createClass(Person, [{
            key: "name",
            get: function get() {
                var name = personMap.get(this);
                console.log("[proxy]  [test-" + 2 + "]  [get name]  ", "   [personMap.get(this)] = ", name);
                return name;
            }
        }]);

        return Person;
    }();

    var you = new Person('you');
    you.name;
    var youProxy = new Proxy(you, {});
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
(function () {
    var date = new Date('2017-02-07');
    var proxy = new Proxy(date, {});
    try {
        proxy.getDate();
    } catch (e) {
        console.log("[proxy]  [test-" + 3 + "]  [e] = ", e, '\n');
    }

    var getDateHandler = {
        get: function get(target, propertyKey, receiver) {
            if (propertyKey === 'getDate') {
                return target.getDate.bind(target);
            }
            return Reflect.get(target, propertyKey, receiver);
        }
    };
    var smartProxy = new Proxy(date, getDateHandler);
    console.log("[proxy]  [test-" + 3 + "]  [smartProxy.getDate()] = ", smartProxy.getDate(), '\n');
})();

//# sourceMappingURL=proxy-10-compiled.js.map