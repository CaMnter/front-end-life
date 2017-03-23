'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by：CaMnter
 */

/*****************************
 * Symbol.isConcatSpreadable *
 *****************************/

/**
 * 对象的 Symbol.isConcatSpreadable 属性等于一个布尔值
 *
 * 表示该对象使用 Array.prototype.concat() 时
 * 是否可以展开
 */

(function () {
    /**
     * true 和 undefined 都表示可以展开
     */
    var target = ['3', '4'];
    var source = ['1', '2'].concat(target, '5', '6');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[target[Symbol.isConcatSpreadable]] = ", target[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[target] = ", target);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[source] = ", source, '\n');
})();

(function () {
    /**
     * false 表示不可以展开
     */
    var target = ['3', '4'];
    target[Symbol.isConcatSpreadable] = false;
    var source = ['1', '2'].concat(target, '5', '6');
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[target[Symbol.isConcatSpreadable]] = ", target[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[target] = ", target);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[source] = ", source, '\n');
})();

(function () {
    /**
     * 类的 Symbol.isConcatSpreadable 默认是 flase 和 undefined 都不展开
     */
    var targetClass = { 0: '3', 1: '4', length: 2 };
    var source = ['1', '2'].concat(targetClass, '5', '6');
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass[Symbol.isConcatSpreadable]] = ", targetClass[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass] = ", targetClass);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source] = ", source, '\n');
})();

(function () {
    /**
     * 手动打开 类的 Symbol.isConcatSpreadable
     */
    var targetClass = { 0: '3', 1: '4', length: 2 };
    targetClass[Symbol.isConcatSpreadable] = true;
    var source = ['1', '2'].concat(targetClass, '5', '6');
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass[Symbol.isConcatSpreadable]] = ", targetClass[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass] = ", targetClass);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source] = ", source, '\n');
})();

// 一直展开

var A1 = function (_Array) {
    _inherits(A1, _Array);

    function A1(args) {
        _classCallCheck(this, A1);

        var _this = _possibleConstructorReturn(this, (A1.__proto__ || Object.getPrototypeOf(A1)).call(this, args));

        _this[Symbol.isConcatSpreadable] = true;
        return _this;
    }

    return A1;
}(Array);

// 一直不展开


var A2 = function (_Array2) {
    _inherits(A2, _Array2);

    function A2(args) {
        _classCallCheck(this, A2);

        var _this2 = _possibleConstructorReturn(this, (A2.__proto__ || Object.getPrototypeOf(A2)).call(this, args));

        _this2[Symbol.isConcatSpreadable] = false;
        return _this2;
    }

    return A2;
}(Array);

(function () {
    var a1 = new A1();
    a1[0] = 'A1-3';
    a1[1] = 'A1-4';
    var a2 = new A2();
    a2[0] = 'A2-3';
    a2[1] = 'A2-4';
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[a1] = ", a1);
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[a2] = ", a2);
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[['2', '3', '3'].concat(a1, a2)] = ", ['2', '3', '3'].concat(a1, a2), '\n');
})();

//# sourceMappingURL=symbol-8-compiled.js.map