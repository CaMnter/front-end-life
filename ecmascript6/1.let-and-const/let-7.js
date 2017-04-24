/**
 * Created by：CaMnter
 */

/***********************
 * 块级作用域与函数声明 *
 ***********************/

/**
 * ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明
 */
if (true) {
    function f1() {
    }
}
try {
    function f1() {
    }
} catch (e) {
}
/**
 * 上面代码的两种函数声明，根据 ES5 的规定都是非法的
 */

// 'use strict';
if (true) {
    function f2() {
    }
}

// 函数声明语句
{
    let a = 'secret';
    function f() {
        return a;
    }
}

// 函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    };
}