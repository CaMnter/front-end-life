"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by：CaMnter
 */

/****************
 * Symbol.split *
 ****************/

/**
 * 对象的 Symbol.split 属性
 * 指向一个方法
 *
 * 当该对象被  String.prototype.split方法调用时
 * 会返回该方法的返回值
 */
var SplitterClass = function () {
    function SplitterClass(value) {
        _classCallCheck(this, SplitterClass);

        this.value = value;
    }

    _createClass(SplitterClass, [{
        key: Symbol.split,
        value: function value(string) {
            console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SplitterClass[Symbol.split](string)] >>>>>> ");
            var index = string.indexOf(this.value);
            if (index === -1) return string;
            return [string.substr(0, index), string.substr(index + this.value.length)];
        }
    }]);

    return SplitterClass;
}();

(function () {
    var SAVE = 'Save you from anything';
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('Save'))] >>>>>> ", SAVE.split(new SplitterClass('Save')), '\n');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('you'))] >>>>>> ", SAVE.split(new SplitterClass('you')), '\n');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('a'))] >>>>>> ", SAVE.split(new SplitterClass('a')), '\n');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('233'))] >>>>>> ", SAVE.split(new SplitterClass('233')), '\n');
})();

/*******************
 * Symbol.iterator *
 *******************/

/**
 * 对象的 Symbol.iterator 属性
 * 指向该对象的默认遍历器方法
 */
(function () {
    var iteratorTarget = {};
    iteratorTarget[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 2;

                    case 2:
                        _context.next = 4;
                        return 3;

                    case 4:
                        _context.next = 6;
                        return 3;

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    });
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[...iteratorTarget] = ", [].concat(_toConsumableArray(iteratorTarget)), '\n');

    /**
     * 对象进行 for...of 循环时
     * 会调用 Symbol.iterator 方法
     */
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = iteratorTarget[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;

            console.log("[symbol]\t\t[test-" + 3 + "]\t\t[element] >>>>>> = ", [element]);
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
})();

//# sourceMappingURL=symbol-11-compiled.js.map