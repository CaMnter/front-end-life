"use strict";

/**
 * Created by：CaMnter
 */

/*****************************
 * 模块的 Singleton 模式 问题 *
 *****************************/

global._camnter = undefined;

function CaMnter() {
  this.camnter = "CaMnter";
}

if (!global._camnter) {
  global._camnter = new CaMnter();
}

module.exports = global._camnter;

//# sourceMappingURL=symbol-6-1-compiled.js.map