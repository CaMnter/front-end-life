"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by：CaMnter
 */

/******************
 * Symbol.replace *
 ******************/

/**
 * 对象的 Symbol.replace 属性
 * 指向一个方法
 * 当该对象被 String.prototype.replace 方法调用时
 * 会返回该方法的返回值
 */
var YOU = 'you';
(function () {
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t['Save you from anything'.replace(YOU, 'YOU')] = ", 'Save you from anything'.replace(YOU, 'YOU'), '\n');
})();

(function () {
    var V = {};
    // 修改 Symbol.replace
    V[Symbol.replace] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        console.log("[symbol]\t\t[test-" + 2 + "]\t\t[V[Symbol.replace]] >>>>>>");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                arg = _step.value;

                console.log("[symbol]\t\t[test-" + 2 + "]\t\t[arg] = ", arg);
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

        console.log("[symbol]\t\t[test-" + 2 + "]\t\t[V[Symbol.replace]] >>>>>>", '\n');
    };
    'Save you from anything'.replace(V, 'YOU');
})();

/*****************
 * Symbol.search *
 *****************/

var SearchClass = function () {
    function SearchClass(value) {
        _classCallCheck(this, SearchClass);

        this.value = value;
    }

    _createClass(SearchClass, [{
        key: Symbol.search,
        value: function value(string) {
            console.log("[symbol]\t\t[test-" + 3 + "]\t\t[SearchClass[Symbol.replace]] >>>>>>");
            console.log("[symbol]\t\t[test-" + 3 + "]\t\t[string] = " + string);
            console.log("[symbol]\t\t[test-" + 3 + "]\t\t[SearchClass[Symbol.replace]] >>>>>>");
            return string.indexOf(this.value);
        }
    }]);

    return SearchClass;
}();

(function () {
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t['Save'.search(new SearchClass('v')] = ", 'Save'.search(new SearchClass('v')));
})();

//# sourceMappingURL=symbol-10-compiled.js.map