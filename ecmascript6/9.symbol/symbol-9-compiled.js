"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by：CaMnter
 */

/******************
 * Symbol.species *
 ******************/

/**
 * 对象的 Symbol.species 属性，指向当前对象的构造函数
 *
 * 创造实例的时候
 * 默认调用这个方法
 *
 * 可以使用这个属性返回的构造函数
 * 用来创建新的实例对象
 */

var ArrayClass = function (_Array) {
  _inherits(ArrayClass, _Array);

  function ArrayClass() {
    _classCallCheck(this, ArrayClass);

    return _possibleConstructorReturn(this, (ArrayClass.__proto__ || Object.getPrototypeOf(ArrayClass)).apply(this, arguments));
  }

  _createClass(ArrayClass, null, [{
    key: Symbol.species,
    get: function get() {
      return Array;
    }
  }]);

  return ArrayClass;
}(Array);

/**
 * 定义 Symbol.species 属性要采用 get 读取器
 */

var BooleanClass = function (_Boolean) {
  _inherits(BooleanClass, _Boolean);

  function BooleanClass() {
    _classCallCheck(this, BooleanClass);

    return _possibleConstructorReturn(this, (BooleanClass.__proto__ || Object.getPrototypeOf(BooleanClass)).apply(this, arguments));
  }

  _createClass(BooleanClass, null, [{
    key: Symbol.species,

    /**
     * 默认的 Symbol.species 属性写法
     *
     * @returns {BooleanClass}
     */
    get: function get() {
      return this;
    }
  }]);

  return BooleanClass;
}(Boolean);

/**
 * 例子
 */


(function () {
  /**
   * 此时是 Array 对象
   * 而不是 ArrayClass
   */
  var array = new ArrayClass(2, 3, 3);
  // 还是 Array
  var mapped = array.map(function (v) {
    return v * v;
  });
  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[mapped instanceof Array] = ", mapped instanceof Array);
  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[mapped instanceof ArrayClass] = ", mapped instanceof ArrayClass, '\n');
})();

/****************
 * Symbol.match *
 ****************/

/**
 * 对象的 Symbol.match 属性
 * 指向一个函数
 *
 * 当执行 str.match(myObject) 时
 * 如果该属性存在
 * 会调用它 返回该方法的返回值
 */

var Matcher = function () {
  function Matcher() {
    _classCallCheck(this, Matcher);
  }

  _createClass(Matcher, [{
    key: Symbol.match,
    value: function value(string) {
      return "anything from you Save".indexOf(string);
    }
  }]);

  return Matcher;
}();
//noinspection JSCheckFunctionSignatures


console.log("[symbol]\t\t[test-" + 2 + "]\t\t['Save'.match(new Matcher())] = ", 'Save'.match(new Matcher()));

// String.prototype.match(Matcher);
// 等同于
// Matcher[Symbol.match](this);

//# sourceMappingURL=symbol-9-compiled.js.map