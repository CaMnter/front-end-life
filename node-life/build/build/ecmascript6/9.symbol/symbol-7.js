/**
 * Created by：CaMnter
 */

/**********************
 * Symbol.hasInstance *
 **********************/

/**
 * 对象的Symbol.hasInstance属性
 * 指向一个内部方法
 *
 * 当其他对象使用instanceof运算符
 * 判断是否为该对象的实例时
 * 会调用这个方法
 *
 * foo instanceof Foo 在语言内部
 * 实际调用的是 Foo[Symbol.hasInstance](foo)
 */

/**
 * 重写 ArrayClass 的 [Symbol.hasInstance](??) 做试验
 * 改写成任何进来都判断是否是 Array 类型
 */
class ArrayClass {
    [Symbol.hasInstance](array) {
        return array instanceof Array;
    }
}
(()=> {
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[[2, 3, 3] instanceof new ArrayClass] = ", [2, 3, 3] instanceof new ArrayClass, '\n');
})();


/**
 * 判断是否是 偶数
 */
class Even {
    [Symbol.hasInstance](value) {
        return Number(value) % 2 === 0;
    }
}
(()=> {
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[1 instanceof new Even] = ", 1 instanceof new Even);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[2 instanceof new Even] = ", 2 instanceof new Even);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[3 instanceof new Even] = ", 3 instanceof new Even, '\n');
})();