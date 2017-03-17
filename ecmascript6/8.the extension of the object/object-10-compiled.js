"use strict";

/**
 * Created by：CaMnter
 */

var o1 = { name: 'CaMnter', save: "Save you from anything" };
console.log("[object]\t\t[test-" + 1 + "]\t\t[Object.keys(o1)] = ", Object.keys(o1));
(function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(o1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            console.log("[object]\t\t[test-" + 1 + "]\t\t[attr] = ", attr);
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

    console.log('');
})();

var keys = Object.keys,
    values = Object.values,
    entries = Object.entries;

var o2 = { a: 1, b: 2, c: 3 };
(function () {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = keys(o2)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            console.log("[object]\t\t[test-" + 2 + "]\t\t[key] = ", key);
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
(function () {
    /**
     * ES 2017
     */
    // for (let value of values(o2)) {
    //     console.log("[object]\t\t[test-" + 3 + "]\t\t[value] = ", value);
    // }
    // console.log('');
})();
(function () {
    /**
     * ES 2017
     */
    // for (let [key,value] of entries(o2)) {
    //     console.log("[object]\t\t[test-" + 4 + "]\t\t[key] = ", key);
    // }
    // console.log('');
})();

//# sourceMappingURL=object-10-compiled.js.map