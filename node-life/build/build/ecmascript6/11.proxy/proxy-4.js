/**
 * Created by：CaMnter
 */

/******************************
 * ES6 Proxy 代理 apply 的场景 *
 ******************************/

/**
 * proxy apply 方法可以拦截
 * 方法的 调用、call 和 apply 操作
 */

/**
 * apply 方法有三个参数
 * target               - 目标对象
 * thisArgument         - 目标对象上下文
 * argumentsList        - 目标对象参数数组
 */

(() => {
    let targetFunction = function () {
        return 'target function';
    };
    let proxy = new Proxy(targetFunction, {
        apply(){
            return 'Save you from anything';
        }
    });
    console.log("[proxy]  [test-" + 1 + "]  [proxy()] = ", proxy(), '\n');
})();

/**
 * 实例：执行两次方法
 */
(() => {
    function sum(left, right) {
        return left + right;
    }

    let proxy = new Proxy(sum, {
        apply(target, thisArgument, argumentsList){
            return Reflect.apply(...arguments) * 2;
        }
    })
    console.log("[proxy]  [test-" + 2 + "]  [proxy(22, 33)] = ", proxy(22, 33));
    console.log("[proxy]  [test-" + 2 + "]  [proxy.call(null, 22, 33)] = ", proxy.call(null, 22, 33));
    console.log("[proxy]  [test-" + 2 + "]  [proxy.apply(null, 22, 33)] = ", proxy.apply(null, [22, 33]));

    // 调用 Reflect.apply 方法，也会被拦截
    console.log("[proxy]  [test-" + 2 + "]  [Reflect.apply(proxy, null, 22, 33)] = ", Reflect.apply(proxy, null, [22, 33]));
})();