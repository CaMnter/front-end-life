'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Created by：CaMnter
 */

/***************************
 * 调用 Iterator 接口的场合 *
 ***************************/

/**
 * 解构解析
 * 默认调用 Symbol.iterator
 */
(function () {
    var set = new Set().add('save').add('you').add('from').add('anything');

    var _set = _slicedToArray(set, 4),
        save = _set[0],
        you = _set[1],
        from = _set[2],
        anything = _set[3];

    var _set2 = _toArray(set),
        first = _set2[0],
        second = _set2.slice(1);

    console.log("[iterator]  [test-" + 1 + "]  [save] = ", save);
    console.log("[iterator]  [test-" + 1 + "]  [you] = ", you);
    console.log("[iterator]  [test-" + 1 + "]  [from] = ", from);
    console.log("[iterator]  [test-" + 1 + "]  [anything] = ", anything);
    console.log("[iterator]  [test-" + 1 + "]  [first] = ", first);
    console.log("[iterator]  [test-" + 1 + "]  [second] = ", second, '\n');
})();

/**
 * 扩展运算符
 * let array = [...iterator]
 * 默认调用 Symbol.iterator
 */
(function () {
    var you = 'you';
    console.log("[iterator]  [test-" + 2 + "]  [...you] = ", [].concat(_toConsumableArray(you)));
    console.log("[iterator]  [test-" + 2 + "]  [...you] = ", ['Save'].concat(_toConsumableArray(you)), '\n');
})();

/**************************
 * 字符串的 Iterator 接口 *
 *************************/

/**
 * 字符串是一个类似数组的对象，也原生具有 Iterator 接口
 */
(function () {
    var save = 'Save';
    console.log("[iterator]  [test-" + 3 + "]  [typeof save[Symbol.iterator]] = ", _typeof(save[Symbol.iterator]));
    console.log("[iterator]  [test-" + 3 + "]  [save[Symbol.iterator]()] = ", save[Symbol.iterator]());
    var iterator = save[Symbol.iterator]();
    for (var i = 0; i < save.length + 1; i++) {
        console.log("[iterator]  [test-" + 3 + "]  [iterator.next()] = ", iterator.next());
    }
    console.log('');
})();

/**
 * 实现 倒遍历
 */
(function () {
    // 不能写 let save = 'Save'
    var save = new String('Save');
    console.log("[iterator]  [test-" + 4 + "]  [...save] = ", [].concat(_toConsumableArray(save)));
    save[Symbol.iterator] = function () {
        var iterator = {
            next: next
        };
        var current = this;
        var index = current.length;

        function next() {
            if (index <= 0) {
                return {
                    done: true
                };
            } else {
                return {
                    value: current[--index],
                    done: false
                };
            }
        }

        return iterator;
    };
    console.log("[iterator]  [test-" + 4 + "]  [...save] = ", [].concat(_toConsumableArray(save)), '\n');
})();

//# sourceMappingURL=iterator-3-compiled.js.map