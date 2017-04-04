/**
 * Created by：CaMnter
 */

/****************************
 * ES6 Proxy 代理 set 的场景 *
 ****************************/

/**
 * set 方法用来拦截某个属性的赋值操作
 */

/**
 * 设置属性不为 null
 */
(() => {
    let validator = {
        set(target, propertyKey, value, receiver) {
            if (propertyKey === 'save' &&
                value == null) {
                throw new TypeError('The save is not null');
            } else {
                Reflect.set(target, propertyKey, value, receiver);
            }
        }
    }
    let camnter = new Proxy({}, validator);
    camnter.save = 'save - Save you from anything';
    console.log("[proxy]  [test-" + 1 + "]  [camnter.save] = ", camnter.save);
    try {
        camnter.save = null;
    } catch (e) {
        console.log("[proxy]  [test-" + 1 + "]  [e] = ", e);
    }
})();

/**
 * 屏蔽外部调用 _xxx 属性
 *
 * 属性名的第一个字符使用下划线开头，表示这些属性不应该被外部使用
 * 结合 get 和 set 方法，就可以做到防止这些内部属性被外部读写
 */
(() => {
    let handler = {
        get(target, propertyKey, receiver) {
            this.invariant(propertyKey, 'get');
            return Reflect.get(target, propertyKey, receiver);
        },
        set(target, propertyKey, value, receiver) {
            this.invariant(propertyKey, 'set');
            Reflect.set(target, propertyKey, value, receiver);
        },
        invariant (key, action) {
            if (key[0] === '_') {
                throw new Error(`Invalid attempt to ${action} private "${key}" property`);
            }
        }
    };
    let proxy = new Proxy({
        _save: 'Save you from anything'
    }, handler);
    try {
        proxy._save;
    } catch (e) {
        console.log("[proxy]  [test-" + 2 + "]  [e] = ", e, '\n');
    }
    try {
        console.log("[proxy]  [test-" + 2 + "]  [proxy._save] = ", proxy._save, '\n');
    } catch (e) {
        console.log("[proxy]  [test-" + 2 + "]  [e] = ", e, '\n');
    }
})();