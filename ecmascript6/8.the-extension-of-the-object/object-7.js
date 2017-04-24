/**
 * Created by：CaMnter
 */

/*****************
 * 属性的可枚举性 *
 *****************/

/**
 * 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
 * Object.getOwnPropertyDescriptor 方法可以获取该属性的描述对象
 */
let o1 = {save: "Save you from anything", camnter: "CaMnter"};
console.log("[object]\t\t[test-" + 1 + "]\t\t[Object.getOwnPropertyDescriptor(o1, 'save')] = ", '\n', Object.getOwnPropertyDescriptor(o1, 'save'), '\n');

/**
 * 描述对象的 enumerable 属性，称为 ”可枚举性“，如果该属性为 false，就表示某些操作会忽略当前属性。
 *
 * ES5 有三个操作会忽略 enumerable 为 false 的属性
 * - for...in 循环：只遍历对象自身的和继承的可枚举的属性
 * - Object.keys()：返回对象自身的所有可枚举的属性的键名
 * - JSON.stringify()：只串行化对象自身的可枚举的属性
 *
 * ES6 新增了一个操作 Object.assign()，会忽略 enumerable 为 false 的属性，只拷贝对象自身的可枚举的属性
 *
 * 这四个操作之中，只有 for...in 会返回继承的属性。实际上，引入 enumerable 的最初目的，就是让某些属性可以规避掉 for...in 操作。
 * 比如，对象原型的 toString 方法，以及数组的 length 属性，就通过这种手段，不会被 for...in 遍历到
 */
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable] = ", Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable, '\n');
console.log("[object]\t\t[test-" + 2 + "]\t\t[Object.getOwnPropertyDescriptor([], 'length').enumerable] = ", Object.getOwnPropertyDescriptor([], 'length').enumerable, '\n');

/**
 * ES6 规定，所有 Class 的原型的方法都是不可枚举的
 * 操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。所以，
 *
 * 注意: 尽量不要用 for...in 循环，而用 Object.keys() 代替
 */
console.log("[object]\t\t[test-" + 3 + "]\t\t[Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable] = ", Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable, '\n');