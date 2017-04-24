/**
 * Created by：CaMnter
 */

/************
 * 严格模式 *
 ************/

/**
 * 从 ES5 开始，函数内部可以设定为严格模式
 */

function f1() {
    'use strict'
    // doing something
}

/**
 * 《 ECMAScript 2016 标准 》做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函
 * 数内部就不能显式设定为严格模式，否则会报错
 */

/**
 * 默认值
 *
 * Illegal 'use strict' directive in function with non-simple parameter list
 */
// function f2(x, y = 67) {
//     'use strict'
// }

/**
 * 解构赋值
 *
 * Illegal 'use strict' directive in function with non-simple parameter list
 */
// function f3({x, y}) {
//     'use strict'
// }

/**
 * 扩展运算符
 *
 * Illegal 'use strict' directive in function with non-simple parameter list
 */
// function f4(...z) {
//     'use strict'
// }

/************
 * 解决方法 *
 ************/

/**
 * 1. 全局性的严格模式
 */
'use strict';
function f5(x, y = 267) {
    // code
}

/**
 * 2. 把函数包在一个无参数的立即执行函数里面
 */
const c1 = (function () {
    'use strict';
    function f6(x, y = 267) {
        // code
    }
}());