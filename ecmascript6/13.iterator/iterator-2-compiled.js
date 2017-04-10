'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by：CaMnter
 */

/*******************************
 * 数据结构的默认 Iterator 接口 *
 *******************************/

/**
 * ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性
 * 一个数据结构只要具有 Symbol.iterator 属性，就可以认为是 "可遍历的"
 *
 * Symbol.iterator 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数
 * 执行这个函数，就会返回一个遍历器
 *
 * 属性名 Symbol.iterator，它是一个表达式，返回 Symbol 对象的 iterator 属性
 * 这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内
 */

/**
 * 具有 Symbol.iterator 属性
 * 执行这个属性，会返回一个遍历器对象
 */
(function () {
    var target = _defineProperty({}, Symbol.iterator, function () {
        return {
            next: function next() {
                return {
                    value: 2233,
                    done: true
                };
            }
        };
    });
})();

/**
 * 原生具备 Iterator 接口
 */
(function () {
    var array = ['save', 'you', 'from', 'anything'];
    var iterator = array[Symbol.iterator]();
    for (var i = 0; i < array.length; i++) {
        console.log("[iterator]  [test-" + 1 + "]  [iterator.next()] = ", iterator.next());
    }
    console.log('');
})();

/**
 * 除开 数组、Set 和 Map 以外
 * 其他数据结构（主要是对象）的 Iterator 接口，都需要自己在 Symbol.iterator 属性上面部署
 * 这样才会被 for...of 循环遍历
 */

/**
 * 实例：
 * 让对象用上 for...of
 */
(function () {
    var RangeInterator = function () {
        function RangeInterator(start, stop) {
            _classCallCheck(this, RangeInterator);

            this.value = start;
            this.stop = stop;
        }

        _createClass(RangeInterator, [{
            key: Symbol.iterator,
            value: function value() {
                return this;
            }

            // 返回对象的格式 {value: ???, done: ???}

        }, {
            key: 'next',
            value: function next() {
                var value = this.value;
                if (value < this.stop) {
                    this.value++;
                    return { value: value, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        }]);

        return RangeInterator;
    }();

    function getRangeInterator(start, stop) {
        return new RangeInterator(start, stop);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = getRangeInterator(1, 7)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var save = _step.value;

            console.log("[iterator]  [test-" + 2 + "]  [save] = ", save);
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = getRangeInterator(1, 7)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log("[iterator]  [test-" + 2 + "]  [value] = ", value);
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
})();

//# sourceMappingURL=iterator-2-compiled.js.map