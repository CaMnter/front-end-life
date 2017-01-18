/**
 * Created by：CaMnter
 */

/*************
 * do 表达式 *
 *************/

{
    let t = f();
    t = t * t + 1;
}

/**
 * 块级作用域将两个语句封装在一起。但是，在块级作用域以外，没有办法得到 t 的值，因为块级作用域不返回值，除
 * 非 t 是全局变量。
 */

/**
 * 块级作用域之前加上 do，使它变为 do 表达式
 */
let x = do {
    let t = f();
    t * t + 1;
};