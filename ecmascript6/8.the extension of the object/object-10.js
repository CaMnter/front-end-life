/**
 * Created by：CaMnter
 */



var o1 = {name: 'CaMnter', save: "Save you from anything"};
console.log("[object]\t\t[test-" + 1 + "]\t\t[Object.keys(o1)] = ", Object.keys(o1));
(function () {
    for (var attr of Object.keys(o1)) {
        console.log("[object]\t\t[test-" + 1 + "]\t\t[attr] = ", attr);
    }
    console.log('');
})();

let {keys, values, entries} = Object;
let o2 = {a: 1, b: 2, c: 3};
(function () {
    for (let key of keys(o2)) {
        console.log("[object]\t\t[test-" + 2 + "]\t\t[key] = ", key);
    }
    console.log('');
})();
(function () {
    /**
     * ES 2017
     */
    // for (let value of values(o2)) {
    //     console.log("[object]\t\t[test-" + 3 + "]\t\t[value] = ", value);
    // }
    // console.log('');
})();
(function () {
    /**
     * ES 2017
     */
    // for (let [key,value] of entries(o2)) {
    //     console.log("[object]\t\t[test-" + 4 + "]\t\t[key] = ", key);
    // }
    // console.log('');
})();