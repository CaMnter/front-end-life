/**
 * Created by：CaMnter
 */

/*****************************
 * Symbol.isConcatSpreadable *
 *****************************/

/**
 * 对象的 Symbol.isConcatSpreadable 属性等于一个布尔值
 *
 * 表示该对象使用 Array.prototype.concat() 时
 * 是否可以展开
 */

(()=> {
    /**
     * true 和 undefined 都表示可以展开
     */
    let target = ['3', '4'];
    let source = ['1', '2'].concat(target, '5', '6');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[target[Symbol.isConcatSpreadable]] = ", target[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[target] = ", target);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[source] = ", source, '\n');
})();

(()=> {
    /**
     * false 表示不可以展开
     */
    let target = ['3', '4'];
    target[Symbol.isConcatSpreadable] = false;
    let source = ['1', '2'].concat(target, '5', '6');
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[target[Symbol.isConcatSpreadable]] = ", target[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[target] = ", target);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[source] = ", source, '\n');
})();


(()=> {
    /**
     * 类的 Symbol.isConcatSpreadable 默认是 flase 和 undefined 都不展开
     */
    let targetClass = {0: '3', 1: '4', length: 2};
    let source = ['1', '2'].concat(targetClass, '5', '6');
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass[Symbol.isConcatSpreadable]] = ", targetClass[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass] = ", targetClass);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source] = ", source, '\n');
})();

(()=> {
    /**
     * 手动打开 类的 Symbol.isConcatSpreadable
     */
    let targetClass = {0: '3', 1: '4', length: 2};
    targetClass[Symbol.isConcatSpreadable] = true;
    let source = ['1', '2'].concat(targetClass, '5', '6');
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass[Symbol.isConcatSpreadable]] = ", targetClass[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[targetClass] = ", targetClass);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source[Symbol.isConcatSpreadable]] = ", source[Symbol.isConcatSpreadable]);
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t[source] = ", source, '\n');
})();

// 一直展开
class A1 extends Array {
    constructor(args) {
        super(args);
        this[Symbol.isConcatSpreadable] = true;
    }
}

// 一直不展开
class A2 extends Array {
    constructor(args) {
        super(args);
        this[Symbol.isConcatSpreadable] = false;
    }
}

(()=> {
    let a1 = new A1();
    a1[0] = 'A1-3';
    a1[1] = 'A1-4';
    let a2 = new A2();
    a2[0] = 'A2-3';
    a2[1] = 'A2-4';
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[a1] = ", a1);
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[a2] = ", a2);
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[['2', '3', '3'].concat(a1, a2)] = ", ['2', '3', '3'].concat(a1, a2), '\n');
})();