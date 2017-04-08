/**
 * Created by：CaMnter
 */

/*******************************************
 * ES6 Proxy 代理 preventExtensions 的场景 *
 ******************************************/

/**
 * preventExtensions 方法拦截 Object.preventExtensions()
 * 该方法必须返回一个布尔值，否则会被自动转为布尔值
 */

/**
 * 有个很大限制：
 * 只有在 目标对象不可扩展时，即：Object.isExtensible(proxy) === false
 * proxy.preventExtensions 才能返回 true，否则会报错
 */
(() => {
    let proxy = new Proxy({}, {
        preventExtensions(target){
            return true;
        }
    });
    try {
        Object.preventExtensions(proxy);
    } catch (e) {
        console.log("[proxy]  [test-" + 1 + "]  [Object.isExtensible(proxy)] = ", Object.isExtensible(proxy));
        console.log("[proxy]  [test-" + 1 + "]  [e] = ", e, '\n');
    }
})();

/**
 * 为了防止这个问题
 * 需要再 proxy.preventExtensions 方法里面，调用一次 Object.preventExtensions
 */
(() => {
    let proxy = new Proxy({}, {
        preventExtensions(target){
            Object.preventExtensions(target);
            return true;
        }
    });
    Object.preventExtensions(proxy);
    console.log("[proxy]  [test-" + 2 + "]  [Object.isExtensible(proxy)] = ", Object.isExtensible(proxy), '\n');
})();


/*******************
 * Proxy.revocable *
 *******************/

/**
 * Proxy.revocable 方法返回一个可取消的 Proxy 实例
 */
(() => {
    let target = {};
    let {proxy, revoke} = Proxy.revocable(target, {});
    proxy.save = '_save';
    console.log("[proxy]  [test-" + 3 + "]  [target.save] = ", target.save);
    console.log("[proxy]  [test-" + 3 + "]  [proxy.save] = ", proxy.save);
    revoke();
    try {
        proxy.save;
    } catch (e) {
        console.log("[proxy]  [test-" + 3 + "]  [e] = ", e, '\n');
    }
})();

