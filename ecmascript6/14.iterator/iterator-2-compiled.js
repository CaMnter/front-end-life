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
 * 实例一：
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

    console.log('');
})();

/**
 * 实例二：
 * 实现 指针 结构
 */
(function () {
    function Pointer(value) {
        this.value = value;
        this.next = null;
    }

    Pointer.prototype[Symbol.iterator] = function () {
        var iterator = {
            next: next
        };
        var current = this;

        function next() {
            if (current) {
                var value = current.value;
                current = current.next;
                return {
                    value: value,
                    done: false
                };
            } else {
                return {
                    done: true
                };
            }
        }

        return iterator;
    };

    var save = new Pointer('save');
    var you = new Pointer('you');
    var from = new Pointer('from');
    var anything = new Pointer('anything');

    save.next = you;
    you.next = from;
    from.next = anything;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = save[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var value = _step3.value;

            console.log("[iterator]  [test-" + 3 + "]  [value] = ", value);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    console.log('');
})();

/**
 * 实例三：
 * 为对象添加 Iterator 接口
 */
(function () {
    var _target$data;

    var target = _defineProperty({
        data: []
    }, Symbol.iterator, function () {
        var self = this;
        var index = 0;

        function next() {
            if (index < self.data.length) {
                return {
                    value: self.data[index++],
                    done: false
                };
            } else {
                return {
                    value: undefined,
                    done: true
                };
            }
        };

        var iterator = {
            next: next
        };
        return iterator;
    });
    var array = ['save', 'you', 'from', 'anything'];
    (_target$data = target.data).push.apply(_target$data, array);
    console.log("[iterator]  [test-" + 4 + "]  [target] = ", target);
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = target[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var targetValue = _step4.value;

            console.log("[iterator]  [test-" + 4 + "]  [targetValue] = ", targetValue);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    console.log('');
})();

/**
 * 实例四：
 * 引用现成的 Iterator 接口
 */
(function () {
    var target = _defineProperty({
        0: 'save',
        1: 'you',
        2: 'from',
        3: 'anything',
        length: 7
    }, Symbol.iterator, Array.prototype[Symbol.iterator]);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = target[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var value = _step5.value;

            console.log("[iterator]  [test-" + 5 + "]  [value] = ", value);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    console.log('');
    // 必须对应数组的结构的 对象才可以，普通对象不可以
    var erroTarget = _defineProperty({
        save: 'save',
        you: 'you',
        from: 'from',
        anything: 'anything',
        length: 4
    }, Symbol.iterator, Array.prototype[Symbol.iterator]);
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = erroTarget[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _value = _step6.value;

            console.log("[iterator]  [test-" + 6 + "]  [value] = ", _value);
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }

    console.log('');
})();

/**
 * Symbol.iterator 返回的必须是 遍历器对象 Iterator
 */
(function () {
    var targetA = {};
    targetA[Symbol.iterator] = function () {
        return 2233;
    };
    try {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
            for (var _iterator7 = targetA[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var value = _step7.value;
            }
        } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                    _iterator7.return();
                }
            } finally {
                if (_didIteratorError7) {
                    throw _iteratorError7;
                }
            }
        }
    } catch (e) {
        console.log("[iterator]  [test-" + 7 + "]  [e] = ", e);
    }

    var targetB = {};
    targetB[Symbol.iterator] = function () {
        function next() {
            return {
                value: undefined,
                done: true
            };
        };
        var iterator = {
            next: next
        };
        return iterator;
    };
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
        for (var _iterator8 = targetB[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _value2 = _step8.value;
        }
    } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
            }
        } finally {
            if (_didIteratorError8) {
                throw _iteratorError8;
            }
        }
    }
})();

//# sourceMappingURL=iterator-2-compiled.js.map