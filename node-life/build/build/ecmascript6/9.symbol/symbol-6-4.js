/**
 * Created by：CaMnter
 */

/*****************************
 * 模块的 Singleton 模式 解决 *
 *****************************/

(()=> {
    var camnter = require('./symbol-6-3.js');
    camnter = 233;
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[camnter] = ", global[Symbol.for('camnter')]);
    /**
     * 不会被无意间覆盖
     *
     * 如果用 Symbol() 将会无法访问得到, 也无法修改
     *
     * 但这样也有一个问题 就是如果多次执行这个脚本
     * 得到的值都是不一样的
     */
})();
