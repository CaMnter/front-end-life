/**
 * Created by：CaMnter
 */


/************************
 * Object.assign 注意点 *
 ************************/

/**
 * Object.assign 方法实行的是浅拷贝, 不是深拷贝
 *
 * 如果拷贝的是一个对象的话, 得到的是对象的引用. 这样的话, 对象的值, 拷贝的也跟着变
 */
var o1 = {s: {save: 'Save'}};
var o2 = Object.assign({}, o1);
console.log("[object]\t\t[test-" + 1 + "]\t\t[o1.s.save] = ", o1.s.save);
console.log("[object]\t\t[test-" + 1 + "]\t\t[o2.s.save] = ", o2.s.save);
o1.s.save = 'Save you from anything'
console.log("[object]\t\t[test-" + 1 + "]\t\t[修改 o1 后 o1.s.save] = ", o1.s.save);
console.log("[object]\t\t[test-" + 1 + "]\t\t[修改 o1 后 o2.s.save] = ", o2.s.save, '\n');

/**
 * 如果对象一样, 里面的属性不一样.
 *
 * 并不会保留差异属性, 只会全部替换对象
 */
var o3 = {s: {save: 'Save', name: 'CaMnter'}};
var o4 = {s: {save: 'Save you from anything'}};
var o5 = Object.assign(o3, o4);
console.log("[object]\t\t[test-" + 2 + "]\t\t[o5.s.save] = ", o5.s.save, '\n');

/**
 * 可以合并数组, 会把数组视为对象
 * [1, 2, 3] = {0:1, 1:2, 2:3}
 * [4, 5] = {0:4, 1:5}
 *
 * 0 和 1 被覆盖 得到 {0:4, 1:5, 2:3}
 */
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.assign([1, 2, 3], [4, 5])] = ", Object.assign([1, 2, 3], [4, 5]), '\n');


/**************************
 * Object.assign 常见用途 *
 **************************/

/**
 * 为对象添加属性
 *
 * Point 对象添加 x y 属性
 */
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}

/**
 * 为对象添加方法
 */
function ClassA() {

}
Object.assign(ClassA.prototype, {
    getCamnter() {
        this.camnter;
    },
    setCamnter(camnter) {
        this.camnter = camnter;
    }
})

// 等同于
ClassA.prototype.getCamnter = function () {
    this.camnter;
}
ClassA.prototype.setCamnter = function (camnter) {
    this.camnter = camnter;
}

/**
 * 克隆对象
 *
 * 无法克隆对象继承的值
 */
function clone(origin) {
    return Object.assign({}, origin);
}

/**
 * 克隆对象
 *
 * 克隆对象继承的值
 */
function smartClone(target) {
    let prototype = Object.getPrototypeOf(target);
    return Object.assign(Object.create(prototype), target);
}

/**
 * 合并 N 个对象
 *
 * 配上箭头函数
 */
const mergeA = (target, ...source) => Object.assign(target, ...source);
const mergeB = (...source) => Object.assign({}, ...source);

/**
 * 为属性指定默认值
 *
 * 如果 合并的属性是 对象,那么同名的属性会被该 对象覆盖.
 *
 * 由于存在深拷贝的问题，DEFAULTS 对象和 options 对象的所有属性的值，都只能是简单类型，而
 * 不能指向另一个对象。否则，将导致 DEFAULTS 对象的该属性不起作用
 */
const DEFAULTS = {
    COUNT: 0,
    TAG: 'DEFAULTS'
};
function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
}


