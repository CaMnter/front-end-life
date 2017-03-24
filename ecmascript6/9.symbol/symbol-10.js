/**
 * Created by：CaMnter
 */

/******************
 * Symbol.replace *
 ******************/

/**
 * 对象的 Symbol.replace 属性
 * 指向一个方法
 * 当该对象被 String.prototype.replace 方法调用时
 * 会返回该方法的返回值
 */
const YOU = 'you';
(() => {
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t['Save you from anything'.replace(YOU, 'YOU')] = ", 'Save you from anything'.replace(YOU, 'YOU'), '\n');
})();

(() => {
    const V = {};
    // 修改 Symbol.replace
    V[Symbol.replace] = (...args) => {
        console.log("[symbol]\t\t[test-" + 2 + "]\t\t[V[Symbol.replace]] >>>>>>");
        for (arg of args) {
            console.log("[symbol]\t\t[test-" + 2 + "]\t\t[arg] = ", arg);
        }
        console.log("[symbol]\t\t[test-" + 2 + "]\t\t[V[Symbol.replace]] >>>>>>", '\n');
    };
    'Save you from anything'.replace(V, 'YOU');
})();


/*****************
 * Symbol.search *
 *****************/

class SearchClass {
    constructor(value) {
        this.value = value;
    }

    [Symbol.search](string) {
        console.log("[symbol]\t\t[test-" + 3 + "]\t\t[V[Symbol.replace]] >>>>>>");
        console.log("[symbol]\t\t[test-" + 3 + "]\t\t[string] = " + string);
        console.log("[symbol]\t\t[test-" + 3 + "]\t\t[V[Symbol.replace]] >>>>>>");
        return string.indexOf(this.value);
    }
}

(() => {
    console.log("[symbol]\t\t[test-" + 3 + "]\t\t['Save'.search(new SearchClass('v')] = ", 'Save'.search(new SearchClass('v')));
})();