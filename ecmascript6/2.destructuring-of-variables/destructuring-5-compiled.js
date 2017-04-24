"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by：CaMnter
 */

/*******************
 * 字符串的解构赋值 *
 *******************/

var _Save = "Save",
    _Save2 = _slicedToArray(_Save, 4),
    s = _Save2[0],
    a = _Save2[1],
    v = _Save2[2],
    e = _Save2[3];

var _Save3 = "Save",
    saveLength = _Save3.length;

console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[s] = " + s);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[a] = " + a);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v] = " + v);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[e] = " + e);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[saveLength] = " + saveLength);
console.log("");

//# sourceMappingURL=destructuring-5-compiled.js.map