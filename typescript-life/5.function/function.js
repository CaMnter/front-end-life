"use strict";
/**
 * Created by：CaMnter
 */
function alert() {
    console.log('Save you from anything');
}
function add(x, y) {
    return x + y;
}
console.log("add " + add(1, 2));
function f1(_a) {
    var _b = _a.name, name = _b === void 0 ? 'CaMnter' : _b, age = _a.age, sign = _a.sign;
    console.log("f1 " + name + " " + age + " " + sign);
}
f1({ age: 233, sign: 'Save you from anything' });
f1({ name: 'CaMnter', age: 233, sign: 'Save you from anything' });
function f2(firstName, lastName) {
    console.log("f2 " + firstName + " " + lastName);
}
f2('CaMnter');
f2('CaMnter', 'CM');
function f3(firstName) {
    var otherName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherName[_i - 1] = arguments[_i];
    }
    console.log("f3 " + firstName + " " + otherName.join(' '));
}
f3('CaMnter', 'CM', 'Save');
(function () {
    console.log('anonymous function');
})();
var f4 = new Function('a', 'b', 'return a * b');
console.log("f4 " + f4(2, 3));
var f5 = function (result) {
    console.log("f5 " + result);
};
f5('result');
