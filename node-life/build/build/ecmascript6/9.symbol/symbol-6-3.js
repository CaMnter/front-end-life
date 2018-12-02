/**
 * Created by：CaMnter
 */

/*****************************
 * 模块的 Singleton 模式 解决 *
 *****************************/

const CAMNTER = Symbol.for('camnter');
global[CAMNTER] = undefined;

function CaMnter() {
    this.camnter = "CaMnter";
}

if (!global[CAMNTER]) {
    global[CAMNTER] = new CaMnter();
}

module.exports = global[CAMNTER];