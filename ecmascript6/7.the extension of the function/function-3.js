/**
 * Created by：CaMnter
 */


/**********
 * 作用域 *
 **********/

/**
 * 先是当前函数的作用域，然后才是全局作用域
 *
 * 函数作用域内部的变量已经生成，不是全局变量
 */
var v1 = 6;
function f1(v1, v2 = v1) {
    console.log("[function]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
}
f1(7);
console.log("");
function f2(v3 = v1) {
    let v1 = 7;
    console.log("[function]\t\t[test-" + 2 + "]\t\t[v3] = " + v3);
}
// f2();  // error
function f3(v4 = v5) {
    let v5 = 7;
    console.log("[function]\t\t[test-" + 3 + "]\t\t[v4] = " + v4);
}
// f3();  // error

/**
 * 如果参数的默认值是一个函数，该函数的作用域是其声明时所在的作用域
 *
 * func 的默认值是一个 匿名函数, 返回 s1
 * func 的作用域还没形成, 所以匿名函数 s1 指向外层作用域的 s1
 */
let s1 = "Save";
function f4(func = v => s1) {
    let s1 = "Save you from anything"
    console.log("[function]\t\t[test-" + 4 + "]\t\t[s1] = " + s1);
    console.log("[function]\t\t[test-" + 4 + "]\t\t[func()] = " + func());
}
f4();
console.log("");
function f5(func = v => s2) {
    let s2 = "Save you from anything"
    console.log("[function]\t\t[test-" + 5 + "]\t\t[s2] = " + s2);
    // console.log("[function]\t\t[test-" + 5 + "]\t\t[func()] = " + func()); // s2 未定义
}
f5();
console.log("");

/**
 * 函数内部重新定义 v6
 * 但是 和 y 函数内的 v6 是不一样的
 */
var v6 = 23;
function f6(v6, y = function () {
    v6 = 2
}) {
    var v6 = 3;
    y();
    console.log("[function]\t\t[test-" + 6 + "]\t\t[v6] = " + v6);
}
f6();
console.log("");

/**
 * 去掉 var 就一样了
 */
var v7 = 237;
function f7(v7, y = function () {
    v7 = 2;
}) {
    v7 = 3;
    y();
    console.log("[function]\t\t[test-" + 6 + "]\t\t[v7] = " + v7);
}
f7();


/*********************
 * 应用一: 参数不可省 *
 *********************/

function throwIfMissing() {
    throw new Error('Missing parameter');
}

function f8(v = throwIfMissing()) {
    return v;
}
// f8();

/*******************
 * 应用一: 参数可省 *
 *******************/

function f9(v = undefined) {
    return v;
}
f9();
