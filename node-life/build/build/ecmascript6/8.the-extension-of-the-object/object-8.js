/**
 * Created by：CaMnter
 */

/**************
 * 属性的遍历 *
 **************/

var camnter = {
    name: "CaMnter",
    blog: "https://www.camnter.com",
    sign: "Save you from anything",
    symbol: Symbol('233')
};

/**
 * 1. for...in
 *
 * 循环遍历对象自身的和继承的可枚举属性（ 不含 Symbol 属性）
 */
(function () {
    for (var attr in camnter) {
        if (!camnter.hasOwnProperty(attr))continue;
        console.log("[object]\t\t[test-" + 1 + "]\t\t[for...in] = ", camnter[attr]);
    }
    console.log('');
})();


/**
 * 2. Object.keys(obj)
 *
 * 返回一个数组，包括对象自身的（ 不含继承的 ）所有可枚举属性（ 不含 Symbol 属性 ）
 */
(function () {
    var attributes = Object.keys(camnter);
    for (var attr in attributes) {
        if (!attributes.hasOwnProperty(attr))continue;
        console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.keys(obj)] = ", camnter[attributes[attr]]);
    }
    console.log('');
})();

/**
 * 3. Object.getOwnPropertyNames(obj)
 *
 * 返回一个数组，包含对象自身的所有属性（ 不含 Symbol 属性，但是包括不可枚举属性 ）
 */
(function () {
    var propertyNames = Object.getOwnPropertyNames(camnter);
    for (var propertyName in propertyNames) {
        if (!propertyNames.hasOwnProperty(propertyName))continue;
        console.log("[object]\t\t[test-" + 3 + "]\t\t[Object.getOwnPropertyNames(obj)] = ", camnter[propertyNames[propertyName]]);
    }
    console.log('');
})();

/**
 * 4. Object.getOwnPropertySymbols(obj)
 *
 * 返回一个数组，包含对象自身的所有 Symbol 属性
 */
(function () {
    var propertySymbols = Object.getOwnPropertySymbols(camnter);
    for (var propertySymbol in propertySymbols) {
        if (!propertySymbols.hasOwnProperty(propertySymbol))continue;
        console.log("[object]\t\t[test-" + 4 + "]\t\t[Object.getOwnPropertySymbols(obj)] = ", camnter[propertySymbol]);
    }
    console.log('');
})();

/**
 * 5. Reflect.ownKeys(obj)
 *
 * 返回一个数组，包含对象自身的所有属性，不管是属性名是 Symbol 或字符串，也不管是否可枚举
 */
(function () {
    var keys = Reflect.ownKeys(camnter);
    for (var key in keys) {
        if (!keys.hasOwnProperty(key))continue;
        console.log("[object]\t\t[test-" + 5 + "]\t\t[Reflect.ownKeys(obj)] = ", camnter[keys[key]]);
    }
    console.log('');
})();

/**
 * 以上方法:
 *
 * 首先遍历所有属性名为数值的属性，按照数字排序。
 * 其次遍历所有属性名为字符串的属性，按照生成时间排序。
 * 最后遍历所有属性名为Symbol值的属性，按照生成时间排序。
 */

/**
 * 数值属性 2 和 10
 * 字符串属性 b 和 a
 * 最后是 Symbol 属性
 */
(function () {
    var keys = Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0});
    console.log("[object]\t\t[test-" + 6 + "]\t\t[Reflect.ownKeys(obj)] = ", keys);
})();
