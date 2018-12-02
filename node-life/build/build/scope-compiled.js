'use strict';

/**
 * Created by：CaMnter
 */

var v = 'Save';
var o10 = {
    v: 'Save - o10',
    getV: function getV() {
        return this.v;
    }
};
console.log(o10.getV());

var o11 = {
    v: 'Save - o11',
    getV: function getV() {
        this.v = 'Save - o11 - getV';
        return this.v;
    }
};
console.log(o11.getV());

function f1() {
    this.v = 'Save - f1';
    return function f11() {
        this.v = 'Save - f11';
        return this.v;
    };
}
console.log(f1()());

var v_this = undefined;
function f2() {
    var _this = this;
    this.v = 'Save - f2';
    return function f21() {
        this.v = 'Save - f21';
        console.log(this === _this);
        console.log(this === v_this);
        return _this.v;
    };
}
console.log(f2()());
function f4() {
    console.log(this.v);
}
var o13 = {
    v: "o13 - v"
};
f4.bind(o13)();

//# sourceMappingURL=scope-compiled.js.map