'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by：CaMnter
 */

/**********************
 * Symbol.toPrimitive *
 **********************/

/**
 * 对象的 Symbol.toPrimitive 属性
 *
 * 对象被转为原始类型的值时
 * 会调用这个方法
 * 返回该对象对应的原始类型值
 */

/**
 * Symbol.toPrimitive 被调用时
 * 会接受一个字符串参数
 *
 * 表示当前运算的模式
 *  Number：该场合需要转成数值
 *  String：该场合需要转成字符串
 *  Default：该场合可以转成数值 也可以转成字符串
 */

(function () {
    var o1 = _defineProperty({}, Symbol.toPrimitive, function (hint) {
        switch (hint) {
            case 'number':
                return 233;
            case 'string':
                return 'o1-string';
            case 'default':
                return 'o1-default';
            default:
                throw new Error();
        }
    });
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[10 * o1 + 3] = ", 10 * o1 + 3);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t['-> ' + o1] = ", '-> ' + o1);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t['o1-default' == o1] = ", 'o1-default' == o1, '\n');
})();

/**********************
 * Symbol.toStringTag *
 **********************/

/**
 * 对象的 Symbol.toStringTag 属性
 *
 * 调用 Object.prototype.toString 方法时
 * 如果这个属性存在
 *
 * 它的返回值会出现在 toString 方法返回的字符串之中
 * 表示对象的类型
 *
 * 这个属性可以用来定制 [object Object] 或 [object Array] 中 object 后面的那个字符串
 */
(function () {
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[({[Symbol.toStringTag]: 'Save'}.toString())] = ", _defineProperty({}, Symbol.toStringTag, 'Save').toString());

    var CaMnter = function () {
        function CaMnter() {
            _classCallCheck(this, CaMnter);
        }

        _createClass(CaMnter, [{
            key: Symbol.toStringTag,
            get: function get() {
                return 'CaMnter';
            }
        }]);

        return CaMnter;
    }();

    var camnter = new CaMnter();
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[Object.prototype.toString.call(camnter)] = ", Object.prototype.toString.call(camnter));
})();

/**********************
 * Symbol.unscopables *
 **********************/

(function () {})();

//# sourceMappingURL=symbol-12-compiled.js.map