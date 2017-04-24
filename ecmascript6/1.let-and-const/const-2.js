/**
 * Created by：CaMnter
 */


/*****************
 * global 对象 *
 ******************/

// 方法一
// (typeof window !== 'undefined'
//     ? window
//     : (typeof process === 'object' &&
// typeof require === 'function' &&
// typeof global === 'object')
//     ? global
//     : this);

// 方法二
var getGlobal = function () {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('unable to locate global object');
};

// import shim from 'system.global/shim'; shim();
// ES6模块的写法
import getGlobal from 'system.global';
const global = getGlobal();
