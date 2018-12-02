"use strict";

/**
 * Created by：CaMnter
 */

/*******************
 * 属性的简洁表示法 *
 *******************/

/**
 * ES6 允许直接写入变量和函数，作为对象的属性和方法
 */
var sign = "Save you from anything";
var o1 = { sign: sign };
// 等同于
var o2 = { sign: sign };
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.sign] = " + o1.sign);
console.log("[object]\t\t[test-" + 1 + "]\t\t[o2.sign] = " + o2.sign);
console.log("");

function f1(x, y) {
    return { x: x, y: y };
}
// 等同于
function f2(x, y) {
    return { x: x, y: y };
}
console.log("[object]\t\t[test-" + 2 + "]\t\t[f1('f1', 'camnter')] = " + f1('f1', 'camnter').x);
console.log("[object]\t\t[test-" + 2 + "]\t\t[f2('f2', 'camnter')] = " + f2('f2', 'camnter').x);
console.log("");

/**
 * 方法简写
 */
var o3 = {
    method: function method() {
        return 'Save you from anything';
    }
};
// 等同于
var o4 = {
    method: function method() {
        return 'Save you from anything';
    }
};
console.log("[object]\t\t[test-" + 3 + "]\t\t[o3.method()] = " + o3.method());
console.log("[object]\t\t[test-" + 3 + "]\t\t[o4.method()] = " + o4.method());
console.log("");

var camnter = 'camnter';
var o5 = {
    tag: 'o5',
    camnter: camnter,
    getCamnter: function getCamnter() {
        return "[getCamnter()] = " + this.camnter;
    }
};
console.log("[object]\t\t[test-" + 4 + "]\t\t[o3.method()] = " + o5.tag);
console.log("[object]\t\t[test-" + 4 + "]\t\t[o3.method()] = " + o5.camnter);
console.log("[object]\t\t[test-" + 4 + "]\t\t[o3.method()] = " + o5.getCamnter());
console.log("");

/**
 * 用于函数的返回值，将会非常方便
 */
function getPoint() {
    var x = 26;
    var y = 27;
    return { x: x, y: y };
}
var point = getPoint();
console.log("[object]\t\t[test-" + 5 + "]\t\t[point.x] = " + point.x);
console.log("[object]\t\t[test-" + 5 + "]\t\t[point.y] = " + point.y);
console.log("");

/**
 * CommonJS 模块输出变量，就非常合适使用简洁写法
 */
var ms = {};

function getItem(key) {
    return key in ms ? ms[key] : null;
}
function setItem(key, value) {
    ms[key] = value;
}
function clear() {
    ms = {};
}
module.exports = { getItem: getItem, setItem: setItem, clear: clear };
// 等同于
module.exports = {
    getItem: getItem,
    setItem: setItem,
    clear: clear
};

/**
 * getter setter
 */
var tree = {
    _apple: 267,
    get apple() {
        return this._apple;
    },
    set apple(value) {
        if (value <= 0) throw new Error("错误参数");
        this._apple = value;
    }
};

/**
 * 关键字 极端情况
 */
var o6 = {
    class: function _class() {
        // to do something
    }
};
// 等同于
var o7 = {
    'class': function _class() {
        // to do something
    }
};

/**
 * 方法的值是一个 Generator 函数
 */
var o8 = {
    m: regeneratorRuntime.mark(function m() {
        return regeneratorRuntime.wrap(function m$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'save';

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, m, this);
    })
};

//# sourceMappingURL=object-1-compiled.js.map