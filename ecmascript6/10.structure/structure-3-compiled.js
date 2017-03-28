'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by：CaMnter
 */

/****************
 * ES6 Set 遍历 *
 ****************/

/**
 * Set 结构的实例有四个遍历方法
 * keys()：返回键名
 * values()：返回键值
 * entries()：返回键值对
 * forEach()：使用回调函数遍历每个成员
 *
 * Set 遍历顺序就是插入顺序
 * 这个特性有时非常有用
 *
 * 使用 Set 保存一个回调函数列表
 * 调用时就能保证按照添加顺序调用
 */

/**********************
 * keys value entries *
 **********************/

/**
 * 由于没有 key 所以 keys 返回的和 value 一样
 * 由于没有 key 所以 entries 返回的 key 和 value 是一样的
 */
var set = new Set(['CaMnter', 'Save you from anything']);
(function () {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = set.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      console.log("[structure]\t\t[test-" + 1 + "]\t\t[key] = ", key);
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
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = set.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var value = _step2.value;

      console.log("[structure]\t\t[test-" + 2 + "]\t\t[value] = ", value);
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
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = set.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var entry = _step3.value;

      console.log("[structure]\t\t[test-" + 3 + "]\t\t[entry] = ", entry);
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
 * Set 结构的实例默认可遍历
 * 默认遍历器生成函数就是它的 values 方法
 *
 * 所以
 * 在 Set 上 values() 和 for of 是一样的
 */
(function () {
  console.log("[structure]\t\t[test-" + 4 + "]\t\t[Set.prototype[Symbol.iterator] === Set.prototype.values] = ", Set.prototype[Symbol.iterator] === Set.prototype.values, '\n');
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = set[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var value = _step4.value;

      console.log("[structure]\t\t[test-" + 5 + "]\t\t[value] = ", value);
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

/***********
 * forEach *
 ***********/

(function () {
  set.forEach(function (value, key) {
    return console.log("[structure]\t\t[test-" + 6 + "]\t\t[value] = ", value);
  });
  console.log('');
})();

/*************
 * 遍历的应用 *
 *************/

/**
 * ... 内部也是使用 for...of
 */
(function () {
  var array = [].concat(_toConsumableArray(set));
  console.log("[structure]\t\t[test-" + 7 + "]\t\t[array] = ", array, '\n');
})();

/**
 * ... + Set 去重
 */
(function () {
  var array = [2, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  var expectArray = [].concat(_toConsumableArray(new Set(array)));
  console.log("[structure]\t\t[test-" + 8 + "]\t\t[expectArray] = ", expectArray, '\n');
})();

/**
 * 数组的 map 和 filter
 * 也可以用于 Set
 */
(function () {
  var set1 = new Set([1, 2, 3]);
  set1 = new Set([].concat(_toConsumableArray(set1)).map(function (v) {
    return v * v;
  }));
  console.log("[structure]\t\t[test-" + 10 + "]\t\t[set1] = ", set1);

  var set2 = new Set([1, 2, 3, 4, 5, 6]);
  set2 = new Set([].concat(_toConsumableArray(set2)).filter(function (v) {
    return v % 2 == 0;
  }));
  console.log("[structure]\t\t[test-" + 10 + "]\t\t[set2] = ", set2, '\n');
})();

/**
 * 并集（Union）
 * 交集（Intersect）
 * 差集（Difference）
 */
(function () {
  var setA = new Set([1, 2, 3, 4]);
  var setB = new Set([5, 2, 3, 6]);

  var union = new Set([].concat(_toConsumableArray(setA), _toConsumableArray(setB)));
  console.log("[structure]\t\t[test-" + 11 + "]\t\t[union] = ", union);
  var intersect = new Set([].concat(_toConsumableArray(setA)).filter(function (v) {
    return setB.has(v);
  }));
  console.log("[structure]\t\t[test-" + 11 + "]\t\t[intersect] = ", intersect);
  var difference = new Set([].concat(_toConsumableArray([].concat(_toConsumableArray(setA)).filter(function (v) {
    return !setB.has(v);
  })), _toConsumableArray([].concat(_toConsumableArray(setB)).filter(function (v) {
    return !setA.has(v);
  }))));
  console.log("[structure]\t\t[test-" + 11 + "]\t\t[difference] = ", difference, '\n');
})();

/**
 * 改变 Set 原结构数据
 * 1. 利用原 Set 结构映射出一个新的结构
 * 2. 利用 Array.from 方法
 */
(function () {
  // 方法一
  var setA = new Set([1, 2, 3]);
  setA = new Set([].concat(_toConsumableArray(setA)).map(function (val) {
    return val * 2;
  }));
  console.log("[structure]\t\t[test-" + 12 + "]\t\t[setA] = ", setA);
  var setB = new Set([1, 2, 3]);
  setB = new Set(Array.from(setB, function (val) {
    return val * 2;
  }));
  console.log("[structure]\t\t[test-" + 12 + "]\t\t[setB] = ", setB);
})();

//# sourceMappingURL=structure-3-compiled.js.map