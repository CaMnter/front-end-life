"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by：CaMnter
 */

/**********************
 * Symbol.hasInstance *
 **********************/

/**
 * 对象的Symbol.hasInstance属性
 * 指向一个内部方法
 *
 * 当其他对象使用instanceof运算符
 * 判断是否为该对象的实例时
 * 会调用这个方法
 *
 * foo instanceof Foo 在语言内部
 * 实际调用的是 Foo[Symbol.hasInstance](foo)
 */

/**
 * 重写 ArrayClass 的 [Symbol.hasInstance](??) 做试验
 * 改写成任何进来都判断是否是 Array 类型
 */
var ArrayClass = function () {
    function ArrayClass() {
        _classCallCheck(this, ArrayClass);
    }

    _createClass(ArrayClass, [{
        key: Symbol.hasInstance,
        value: function value(array) {
            return array instanceof Array;
        }
    }]);

    return ArrayClass;
}();

(function () {
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[[2, 3, 3] instanceof new ArrayClass] = ", [2, 3, 3] instanceof new ArrayClass(), '\n');
})();

/**
 * 判断是否是 偶数
 */

var Even = function () {
    function Even() {
        _classCallCheck(this, Even);
    }

    _createClass(Even, [{
        key: Symbol.hasInstance,
        value: function value(_value) {
            return Number(_value) % 2 === 0;
        }
    }]);

    return Even;
}();

(function () {
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[1 instanceof new Even] = ", 1 instanceof new Even());
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[2 instanceof new Even] = ", 2 instanceof new Even());
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[3 instanceof new Even] = ", 3 instanceof new Even(), '\n');
})();

//# sourceMappingURL=symbol-7-compiled.js.map