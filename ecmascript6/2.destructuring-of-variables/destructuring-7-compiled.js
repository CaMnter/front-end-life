"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by：CaMnter
 */

/*************************
 * 数值和布尔值的解构赋值 *
 *************************/

/**
 * 参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量
 */
function add(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      v1 = _ref2[0],
      v2 = _ref2[1];

  return v1 + v2;
}
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[add([33, 33])] = " + add([33, 33]));
var a1 = [[1, 1], [3, 3]].map(function (_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      a = _ref4[0],
      b = _ref4[1];

  return a + b;
});
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[a1] = " + a1);
console.log("");

/**
 * 函数参数的解构也可以使用默认值
 */
function move() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$v = _ref5.v3,
      v3 = _ref5$v === undefined ? 0 : _ref5$v,
      _ref5$v2 = _ref5.v4,
      v4 = _ref5$v2 === undefined ? 0 : _ref5$v2;

  return [v3, v4];
}
move({ v3: 6, v4: 26 });
move({ v3: 6 });
move({});
move();
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move({v3: 6, v4: 26})] = " + move({ v3: 6, v4: 26 }));
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move({v3: 6})] = " + move({ v3: 6 }));
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move({})] = " + move({}));
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move()] = " + move());
console.log("");

/**
 * undefined 就会触发函数参数的默认值
 */
[1, undefined, 3].map(function () {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'save';
  return x;
});

//# sourceMappingURL=destructuring-7-compiled.js.map