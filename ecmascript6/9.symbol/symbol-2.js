/**
 * Created by：CaMnter
 */

/*********************
 * Symbol 作为属性名 *
 ********************/

/**
 * Symbol 的值是唯一的
 * 用于对象上的话, 可以保证不会出现同名属性
 *
 * 如果这个对象由多个模块构成的话, 可以防止被不小心修改
 */

let s1 = Symbol();

// 第一种写法
let o1 = {};
o1[s1] = 'Save-1';

// 第二种写法
let o2 = {
    [s1]: 'Save-2'
}

// 第三种写法
let o3 = {};
Object.defineProperty(o3, s1, {value: 'Save-3'});

console.log("[symbol]\t\t[test-" + 1 + "]\t\t[o1[s1]] = ", o1[s1]);
console.log("[symbol]\t\t[test-" + 1 + "]\t\t[o2[s1]] = ", o2[s1]);
console.log("[symbol]\t\t[test-" + 1 + "]\t\t[o3[s1]] = ", o3[s1], '\n');

/**
 * 注意:
 * Symbol值作为对象属性名时, 不能用点运算符
 * 因为 . 后面都是字符
 *
 * 用第二种方法定义的时候必须将 Symbol 放在方括号内
 * 不然该属性的 key 就变为 字符
 */

/**
 * 采用增强的对象写法
 */
let o4 = {
    [s1](value){
        console.log("[symbol]\t\t[test-" + 2 + "]\t\t[value] = ", value, '\n');
    }
};
o4[s1]('o4-s1-value');

/**
 * 定义常量
 */
const log = {};
log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.log("[symbol]\t\t[test-" + 3 + "]\t\t[log.levels.DEBUG] = ", log.levels.DEBUG);
console.log("[symbol]\t\t[test-" + 3 + "]\t\t[log.levels.INFO] = ", log.levels.INFO);
console.log("[symbol]\t\t[test-" + 3 + "]\t\t[log.levels.WARN] = ", log.levels.WARN, '\n');


/**
 * 常量使用 Symbol 值最大的好处
 * 就是其他任何值都不可能有相同的值了
 * 因此可以保证上面的 switch 语句会按设计的方式工作
 */

const BLACK = Symbol();
const WHITE = Symbol();

function switchColor(color) {
    switch (color) {
        case BLACK:
            return BLACK;
        case WHITE:
            return WHITE;
        default:
            throw new Error('Undefined color');
    }
}