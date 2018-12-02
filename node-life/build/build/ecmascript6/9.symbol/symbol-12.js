/**
 * Created by：CaMnter
 */


/**********************
 * Symbol.toPrimitive *
 **********************/

/**
 * 对象的 Symbol.toPrimitive 属性
 *
 * 对象被转为原始类型的值时
 * 会调用这个方法
 * 返回该对象对应的原始类型值
 */

/**
 * Symbol.toPrimitive 被调用时
 * 会接受一个字符串参数
 *
 * 表示当前运算的模式
 *  Number：该场合需要转成数值
 *  String：该场合需要转成字符串
 *  Default：该场合可以转成数值 也可以转成字符串
 */

(() => {
    let o1 = {
        [Symbol.toPrimitive](hint){
            switch (hint) {
                case 'number':
                    return 233;
                case 'string':
                    return 'o1-string';
                case 'default':
                    return 'o1-default';
                default:
                    throw new Error();
            }
        }
    };
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[10 * o1 + 3] = ", 10 * o1 + 3);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t['-> ' + o1] = ", '-> ' + o1);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t['o1-default' == o1] = ", 'o1-default' == o1, '\n');
})();


/**********************
 * Symbol.toStringTag *
 **********************/

/**
 * 对象的 Symbol.toStringTag 属性
 *
 * 调用 Object.prototype.toString 方法时
 * 如果这个属性存在
 *
 * 它的返回值会出现在 toString 方法返回的字符串之中
 * 表示对象的类型
 *
 * 这个属性可以用来定制 [object Object] 或 [object Array] 中 object 后面的那个字符串
 */
(() => {
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[({[Symbol.toStringTag]: 'Save'}.toString())] = ", ({[Symbol.toStringTag]: 'Save'}.toString()));
    class CaMnter {
        get [Symbol.toStringTag]() {
            return 'CaMnter'
        }
    }
    let camnter = new CaMnter();
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[Object.prototype.toString.call(camnter)] = ", Object.prototype.toString.call(camnter), '\n');
})();


/**********************
 * Symbol.unscopables *
 **********************/

/**
 * 对象的 Symbol.unscopables 属性
 *
 * 指向一个对象
 * 该对象指定了使用 with 关键字时
 * 哪些属性会被 with 环境排除
 */

(() => {
    // 没有 unscopables
    class ClassA {
        foo() {
            return 1;
        }
    }
    var foo = function () {
        return 2;
    };
    with (ClassA.prototype) {
        console.log("[symbol]\t\t[test-" + 3 + "]\t\t[foo()] = ", foo());
    }

    // 有 unscopables 时
    class ClassB {
        foo() {
            return 1;
        }

        get [Symbol.unscopables]() {
            // with 内移除 ClassB foo
            return {foo: true};
        }
    }

    var foo = function () {
        return 2;
    };

    with (ClassB.prototype) {
        console.log("[symbol]\t\t[test-" + 3 + "]\t\t[foo()] = ", foo());
    }
})();