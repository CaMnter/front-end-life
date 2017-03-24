/**
 * Created by：CaMnter
 */

/******************
 * Symbol.species *
 ******************/

/**
 * 对象的 Symbol.species 属性，指向当前对象的构造函数
 *
 * 创造实例的时候
 * 默认调用这个方法
 *
 * 可以使用这个属性返回的构造函数
 * 用来创建新的实例对象
 */

class ArrayClass extends Array {
    static get [Symbol.species]() {
        return Array;
    };
}

/**
 * 定义 Symbol.species 属性要采用 get 读取器
 */

class BooleanClass extends Boolean {
    /**
     * 默认的 Symbol.species 属性写法
     *
     * @returns {BooleanClass}
     */
    static get [Symbol.species]() {
        return this;
    };
}

/**
 * 例子
 */
(() => {
    /**
     * 此时是 Array 对象
     * 而不是 ArrayClass
     */
    let array = new ArrayClass(2, 3, 3);
    // 还是 Array
    let mapped = array.map(v => v * v);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[mapped instanceof Array] = ", mapped instanceof Array);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[mapped instanceof ArrayClass] = ", mapped instanceof ArrayClass, '\n');
})();


/****************
 * Symbol.match *
 ****************/

/**
 * 对象的 Symbol.match 属性
 * 指向一个函数
 *
 * 当执行 str.match(myObject) 时
 * 如果该属性存在
 * 会调用它 返回该方法的返回值
 */
class Matcher {
    [Symbol.match](string) {
        return "anything from you Save".indexOf(string);
    }
}
//noinspection JSCheckFunctionSignatures
console.log("[symbol]\t\t[test-" + 2 + "]\t\t['Save'.match(new Matcher())] = ", 'Save'.match(new Matcher()));


// String.prototype.match(Matcher);
// 等同于
// Matcher[Symbol.match](this);