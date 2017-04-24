/**
 * Created by：CaMnter
 */

/***********************
 * ES6 前没有块级作用域 *
 ***********************/

var date = new Date();
function f1() {
    console.log("[作用域]\t\t[test-" + 1 + "]\t\t[date] = " + date);
    if (false) {
        var date = "Save";
    }
}

f1();

/**
 * 输出结果为 undefined，原因在于变量提升，导致内层的 date 变量覆盖了外层的 date 变量
 */

var save = "Save";
for (var i = 0; i < save.length; i++) {
    console.log("[作用域]\t\t[test-" + 2 + "]\t\t[i] = " + i);
}
console.log("");
console.log("[作用域]\t\t[test-" + 2 + "]\t\t[i] = " + i);