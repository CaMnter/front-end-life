"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/****************
 * ES6 Set 基本 *
 ****************/

/**
 * ES6 提供了新的数据结构 Set
 * 它类似于数组
 * 但是成员的值都是唯一的
 * 没有重复的值
 */

(function () {
  var set = new Set();
  // 添加重复值无效
  [2, 3, 3].map(function (v) {
    return set.add(v);
  });
  console.log("[structure]\t\t[test-" + 1 + "]\t\t[value] = ", [].concat(_toConsumableArray(set)), '\n');
})();

/**
 * 数组作为参数
 */
(function () {
  var set1 = new Set([1, 2, 3, 4]);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = set1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      console.log("[structure]\t\t[test-" + 2 + "]\t\t[value] = ", value);
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

  var set2 = new Set([2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
  console.log("[structure]\t\t[test-" + 3 + "]\t\t[set2.size] = ", set2.size, '\n');

  function getArray() {
    var array = [2, 3, 3];
    return [].concat(array);
  }

  var set3 = new Set(getArray());
  console.log("[structure]\t\t[test-" + 4 + "]\t\t[set3] = ", set3, '\n');

  var set4 = new Set();
  getArray().forEach(function (v) {
    return set4.add(v);
  });
  console.log("[structure]\t\t[test-" + 5 + "]\t\t[set4] = ", set4, '\n');
})();

/**
 * 使用技巧：
 *
 * 利用 Set
 * 去除数组中的重复值
 * 然后得到数组
 */

(function () {
  var array = [2, 3, 3, 3, 3, 3, 3];
  console.log("[structure]\t\t[test-" + 6 + "]\t\t[...new Set(array)] = ", [].concat(_toConsumableArray(new Set(array))), '\n');
})();

/**
 * Set 加入值
 * 不会发生类型转换
 *
 * 2 和 "2" 是两个不同的值
 * Set 它们是不同的
 * 使用的算法叫做 Same-value equality
 *
 * 类似于精确相等运算符（===）
 * 主要的区别是 NaN 等于自身，而精确相等运算符认为 NaN 不等于自身
 */
(function () {
  var set = new Set();
  set.add(NaN);
  set.add(NaN);
  console.log("[structure]\t\t[test-" + 6 + "]\t\t[set] = ", set);
  set.clear();

  set.add(2);
  set.add("2");
  console.log("[structure]\t\t[test-" + 6 + "]\t\t[set] = ", set, '\n');
  set.clear();
})();

/**
 * 空对象是不相等的
 */
(function () {
  var set = new Set();
  set.add({}).add({}).add({}).add({}).add({}).add({});
  console.log("[structure]\t\t[test-" + 7 + "]\t\t[set] = ", set);
})();

//# sourceMappingURL=structure-1-compiled.js.map