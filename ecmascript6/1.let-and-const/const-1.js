/**
 * Created by：CaMnter
 */

/*************
 * const命令 *
 *************/

/**
 * const 声明一个只读的常量。一旦声明，常量的值就不能改变
 */
const S = 3.1415;
// S = 3; // Assignment to constant variable

/**
 * 只声明不赋值，就会报错
 */
// const A; // Missing initializer in const declaration

/**
 * const 的作用域与 let 命令相同：只在声明所在的块级作用域内有效
 */
if (true) {
    const s1 = "s1"
}
// s1; // s1 is not defined

if (true) {
    console.log("[const]\t\t[test-" + 1 + "]\t\t[SAVE] = " + SAVE);
    // const SAVE = "Save"; // SAVE is not defined
}

var save = "Save";
var SAVE = "Save";

// const save = "Save you from anything"; // Identifier 'save' has already been declared
// const SAVE = "Save you from anything"; // Identifier 'SAVE' has already been declared

/**
 * const 命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。
 */

const o = {
    name: "CaMnter",
    sign: "Save you from anything"
};
o.name = "CaMnter-Fixed";

/**
 * 冻结
 */
const o2 = Object.freeze({
    name: "CaMnter",
    sign: "Save you from anything"
});
o.name = "CaMnter-Fixed"; // 严格模式就报错

/**
 * 将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数
 */
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, value) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};