/**
 * Created by：CaMnter
 */

/*********************
 * let 实现块级作用域 *
 *********************/

let n = 6;
function f1() {
    /**
     * 不同块之间 n 都不一样
     */
    if (true) {
        let n = 26;
        console.log("[作用域]\t\t[test-" + 1 + "]\t\t[n] = " + n);
    }
    let n = 16;
    console.log("[作用域]\t\t[test-" + 1 + "]\t\t[n] = " + n);
}
console.log("[作用域]\t\t[test-" + 1 + "]\t\t[n] = " + n);
f1();
console.log("");

{
    {
        {
            {
                {
                    {
                        let save = "Save"
                    }
                }
            }
        }
    }
}

{
    {
        {
            {
                {
                    {
                        {
                            {
                                {
                                    {
                                        {
                                            let save = "Save";
                                        }
                                        let save = "save";
                                        console.log("[作用域]\t\t[test-" + 2 + "]\t\t[save] = " + save);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log("");

/**
 * 广泛应用的立即执行函数表达式（IIFE）不再必要了
 */

// IIFE
(function () {
    var save = "Save";
    console.log("[作用域]\t\t[test-" + 3 + "]\t\t[save] = " + save);
}());
{
    let save = "Save";
    console.log("[作用域]\t\t[test-" + 3 + "]\t\t[save] = " + save);
}


