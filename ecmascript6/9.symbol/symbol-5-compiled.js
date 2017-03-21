'use strict';

/**
 * Created by：CaMnter
 */

/********************************
 * Symbol.for() Symbol.keyFor() *
 ********************************/

/**
 * 也可以做到存在相同的 Symbol
 * 这就需要 Symbol.for()
 *
 * 原理:
 * 以字符串为参数, 然后搜索有没有以这个参数作为名称的 Symbol 值
 * 有就返回, 没有的话就会创建一个
 */

/**
 * Symbol.for() 调用的时候,先搜索是否存在 对应 key 的 Symbol, 不存在则创建, 会被登记在全局环境中供搜索
 * Symbol.for() 只会创建一次, 返回的都是同一个 Symbol
 *
 * 但是 Symbol() 是直接创建一个新的 Symbol
 * 所以在 Symbol() 上存在唯一性
 */
(function () {
  var symbol1 = Symbol('Save');
  var symbol2 = Symbol('Save');
  var symbol3 = Symbol.for('Save');
  var symbol4 = Symbol.for('Save');

  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[symbol1] = ", symbol1);
  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[symbol2] = ", symbol2);
  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[symbol1 === symbol2] = ", symbol1 === symbol2);
  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[symbol3] = ", symbol3);
  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[symbol4] = ", symbol4);
  console.log("[symbol]\t\t[test-" + 1 + "]\t\t[symbol3 === symbol4] = ", symbol3 === symbol4, '\n');
})();

/**
 * Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的key
 */
(function () {
  // 这里 Symbol.for 也能拿到上面作用域中的 登记过的 Symbol
  var symbol5 = Symbol.for('Save');
  console.log("[symbol]\t\t[test-" + 2 + "]\t\t[Symbol.keyFor(symbol5)] = ", Symbol.keyFor(symbol5));
})();

//# sourceMappingURL=symbol-5-compiled.js.map