/**
 * Created by：CaMnter
 */

/*********************
 * Symbol - 属性遍历 *
 *********************/

/**
 * Symbol 作为属性名
 *
 * for...in
 * for...of
 * Object.keys()
 * Object.getOwnPropertyNames()
 * JSON.stringify()
 * 是取不到的
 *
 * 但是又不属于私有属性, 所以 Object.getOwnPropertySymbols 可以取得到
 */

let o1 = {
    'save': 'Save you from anything',
    [Symbol('save')]: "Symbol save"
};

(function () {
    // 取不到 Symbol
    for (var key in o1) {
        if (!o1.hasOwnProperty(key))continue;
        console.log("[symbol]\t\t[test-" + 1 + "]\t\t[key] = ", key);
    }
    console.log('');
})();

(function () {
    // 取得到 Symbol
    let propertySymbols = Object.getOwnPropertySymbols(o1)
    for (var symbol in propertySymbols) {
        if (!propertySymbols.hasOwnProperty(symbol))continue;
        console.log("[symbol]\t\t[test-" + 2 + "]\t\t[propertySymbols[symbol]] = ", propertySymbols[symbol]);
    }
    console.log('');
})();

/**
 * 另一个新的API
 *
 * Reflect.ownKeys
 *
 * 方法可以返回所有类型的键名
 * 包括常规键名和 Symbol 键名
 */
(function () {
    let ownKeys = Reflect.ownKeys(o1);
    for (var key in ownKeys) {
        if (!ownKeys.hasOwnProperty(key))continue;
        console.log("[symbol]\t\t[test-" + 3 + "]\t\t[ownKeys[key]] = ", ownKeys[key]);
    }
    console.log('');
})();


/**
 * Symbol 值作为名称的属性
 * 不会被常规方法遍历得到
 *
 * 利用这个特性
 * 为对象定义一些非私有的、但又希望只用于内部的方法
 */
var size = Symbol('size');

class Collection {
    constructor() {
        this[size] = 0;
    }

    add(item) {
        this[this[size]] = item;
        this[size]++;
    }

    static sizeOf(instance) {
        return instance[size];
    }
}

(function () {
    var collection = new Collection();
    // 0
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Collection.sizeOf(collection)] = ", Collection.sizeOf(collection));
    collection.add('save');
    collection.add('you');
    collection.add('from');
    collection.add('anything');
    // 4
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Collection.sizeOf(collection)] = ", Collection.sizeOf(collection));

    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Object.keys(collection)] = ", Object.keys(collection));
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Object.getOwnPropertyNames(collection)] = ", Object.getOwnPropertyNames(collection));
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Object.getOwnPropertySymbols(collection)] = ", Object.getOwnPropertySymbols(collection));
    console.log("[symbol]\t\t[test-" + 4 + "]\t\t[Reflect.ownKeys(collection)] = ", Reflect.ownKeys(collection));
})();