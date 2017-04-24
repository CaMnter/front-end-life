/**
 * Created by：CaMnter
 */

/********************
 * 方法的 name 属性 *
 ********************/

/**
 * 函数的name属性，返回函数名
 * 对象方法也是函数
 */
const o1 = {
    o1f1(){

    }
};
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.o1f1.name] = " + o1.o1f1.name);
console.log('');

/**
 * setter getter
 *
 * 该方法的属性的描述对象的 get 和 set 属性上面，返回值是方法名前加上 get 和 set
 */
const o2 = {
    get o2f1() {
    },
    set o2f1(v) {
    }
};
// 要这么取
const o2f1 = Object.getOwnPropertyDescriptor(o2, 'o2f1');
console.log("[object]\t\t[test-" + 2 + "]\t\t[o2f1.get.name] = " + o2f1.get.name);
console.log("[object]\t\t[test-" + 2 + "]\t\t[o2f1.set.name] = " + o2f1.set.name);
console.log("");

/**
 * 特殊情况:
 * 1. bind 方法创造的函数，name 属性返回 bound 加上原函数的名
 * 2. Function 构造函数创造的函数，name 属性返回 anonymous
 */
let f1 = function () {

};
let o3 = {};
console.log("[object]\t\t[test-" + 3 + "]\t\t[(new Function()).name] = " + (new Function()).name);
console.log("[object]\t\t[test-" + 3 + "]\t\t[f1.bind(o3).name] = " + f1.bind(o3).name);
console.log("");

/**
 * 对象的方法是一个 Symbol 值，那么 name 属性返回的是这个 Symbol 值的描述
 */
const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
    [key1]() {
    },
    [key2]() {
    }
};
console.log("[object]\t\t[test-" + 4 + "]\t\t[obj[key1].name] = " + obj[key1].name);
console.log("[object]\t\t[test-" + 4 + "]\t\t[obj[key2].name] = " + obj[key2].name);

