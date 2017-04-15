'use strict';

/**
 * Created by：CaMnter
 */

/*************************
 * Generator 与 Iterator *
 *************************/

/**
 * Symbol.iterator 方法，必须是一个生成 Iterator 的方法
 * Generator 函数就是 Iterator 生成函数
 * 所以 可以作为 Symbol.iterator 的 方法
 */

(function () {
  var target = {};
  target[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 'save';

          case 2:
            _context.next = 4;
            return 'you';

          case 4:
            _context.next = 6;
            return 'from';

          case 6:
            _context.next = 8;
            return 'anything';

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = target[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      console.log("[generator]  [test-" + 1 + "]  [value] = ", value);
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

/**
 * 值得一提的是
 * Generator 执行后，返回一个 Iterator 对象
 * 这个 Iterator 对象也有 Symbol.iterator 属性
 * 执行这个 Symbol.iterator 属性上的方法后，得到自己
 */
(function () {
  var generator = regeneratorRuntime.mark(function generator() {
    return regeneratorRuntime.wrap(function generator$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case 'end':
            return _context2.stop();
        }
      }
    }, generator, this);
  });
  var iterator = generator();
  console.log("[generator]  [test-" + 2 + "]  [iterator[Symbol.iterator] === iterator] = ", iterator[Symbol.iterator]() === iterator);
})();

//# sourceMappingURL=generator-2-compiled.js.map