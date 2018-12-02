/**
 * Created by：CaMnter
 */

/*****************************
 * 模块的 Singleton 模式 问题 *
 *****************************/

(()=> {
    var camnter = require('./symbol-6-1.js');
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[camnter] = ", camnter);
    camnter = 233;
    console.log("[symbol]\t\t[test-" + 1 + "]\t\t[camnter] = ", camnter);
    /**
     * 这里有一个问题，全局变量 global._camnter 是可写的
     * 任何文件都可以修改
     * 如果别的加载了 相同的 js, 那么会显示被修改的内容
     * */
})();
