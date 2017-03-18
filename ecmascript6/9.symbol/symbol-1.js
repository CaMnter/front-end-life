/**
 * Created by：CaMnter
 */

/**********
 * Symbol *
 **********/

/**
 * ES5 中, 对象的属性都是 String
 * 如果你想添加一个新属性, 名字还一样了, 这样就造成属性冲突.
 *
 * Symbol 保证每个属性的名字都是独一无二
 * 从根本上防止属性名的冲突.
 * 这就是ES6引入Symbol的原因
 *
 * ES6 引入了一种新的原始数据类型 Symbol
 * JavaScript 语言的第七种数据类型
 * 前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
 *
 * ES6 以后, 对象的属性名现在可以有两种类型. 一种是 String, 一种是 Symbol
 * 凡是属性名属于Symbol类型, 就都是独一无二的, 可以保证不会与其他属性名产生冲突
 */

let s1 = Symbol();
console.log("[symbol]\t\t[test-" + 1 + "]\t\t[typeof s1] = ", typeof s1, '\n');

/**
 * 注意, Symbol 函数前不能使用 new 命令, 否则会报错
 * 这是因为生成的 Symbol 是一个原始类型的值, 不是对象
 */

/**
 * String 作为参数
 */
let s2 = Symbol('Save');
let s3 = Symbol('Save you from anything');
console.log("[symbol]\t\t[test-" + 2 + "]\t\t[s2] = ", s2);
console.log("[symbol]\t\t[test-" + 2 + "]\t\t[s3] = ", s3, '\n');


/**
 * 对象 作为参数
 *
 * 会先调用 toString 方法 拿到 String, 然后再实例化 Symbol
 */
let o1 = {
    toString(){
        return 'o1-toString';
    }
};
let s4 = Symbol(o1);
console.log("[symbol]\t\t[test-" + 3 + "]\t\t[s4] = ", s4, '\n');

/**
 * 唯一性
 */
console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Symbol() === Symbol()] = ", Symbol() === Symbol());
console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Symbol('Save') === Symbol('Save')] = ", Symbol('Save') === Symbol('Save'), '\n');

let s5 = Symbol('anything');
// "Save you from " + s5;
// `Save you from ${s5}`;

/**
 * Symbol 值可以显式转为字符串
 * Symbol 值也可以转为布尔值
 *        但是不能转为数值
 */
let s6 = Symbol('CaMnter');
console.log("[symbol]\t\t[test-" + 5 + "]\t\t[String(s6)] = ", String(s6));
console.log("[symbol]\t\t[test-" + 5 + "]\t\t[s6.toString()] = ", s6.toString());
console.log("[symbol]\t\t[test-" + 5 + "]\t\t[!!s6] = ", !!s6);
console.log("[symbol]\t\t[test-" + 5 + "]\t\t[Boolean(s6)] = ", Boolean(s6));