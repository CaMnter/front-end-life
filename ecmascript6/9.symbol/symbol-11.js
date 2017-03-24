/**
 * Created by：CaMnter
 */

/****************
 * Symbol.split *
 ****************/

/**
 * 对象的 Symbol.split 属性
 * 指向一个方法
 *
 * 当该对象被  String.prototype.split方法调用时
 * 会返回该方法的返回值
 */
class SplitterClass {

    constructor(value) {
        this.value = value;
    }

    [Symbol.split](string) {
        console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SplitterClass[Symbol.split](string)] >>>>>> ");
        let index = string.indexOf(this.value);
        if (index === -1)return string;
        return [
            string.substr(0, index),
            string.substr(index + this.value.length)
        ];
    }

}

(() => {
    let SAVE = 'Save you from anything';
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('Save'))] >>>>>> ", SAVE.split(new SplitterClass('Save')), '\n');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('you'))] >>>>>> ", SAVE.split(new SplitterClass('you')), '\n');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('a'))] >>>>>> ", SAVE.split(new SplitterClass('a')), '\n');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[SAVE.split(new SplitterClass('233'))] >>>>>> ", SAVE.split(new SplitterClass('233')), '\n');
})();


/*******************
 * Symbol.iterator *
 *******************/

/**
 * 对象的 Symbol.iterator 属性
 * 指向该对象的默认遍历器方法
 */
(() => {
    var iteratorTarget = {};
    iteratorTarget[Symbol.iterator] = function*() {
        yield 2;
        yield 3;
        yield 3;
    }
    console.log("[symbol]\t\t[test-" + 2 + "]\t\t[...iteratorTarget] = ", [...iteratorTarget], '\n');

    /**
     * 对象进行 for...of 循环时
     * 会调用 Symbol.iterator 方法
     */
    for (var element of iteratorTarget) {
        console.log("[symbol]\t\t[test-" + 3 + "]\t\t[element] >>>>>> = ", [element]);
    }
})();