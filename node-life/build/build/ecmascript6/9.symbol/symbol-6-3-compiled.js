"use strict";

/**
 * Created by：CaMnter
 */

/*****************************
 * 模块的 Singleton 模式 解决 *
 *****************************/

var CAMNTER = Symbol.for('camnter');
global[CAMNTER] = undefined;

function CaMnter() {
  this.camnter = "CaMnter";
}

if (!global[CAMNTER]) {
  global[CAMNTER] = new CaMnter();
}

module.exports = global[CAMNTER];

//# sourceMappingURL=symbol-6-3-compiled.js.map