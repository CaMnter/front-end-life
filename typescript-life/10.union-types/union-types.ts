/**
 * Created by：CaMnter
 */

let u1: string | number;
u1 = 7;
console.log(`u1 : ${ typeof u1 }`);
u1 = '7';
console.log(`u1 : ${ typeof u1 }`);


let u2: string[] | number[];
u2 = [1, 2, 3];
console.log(`u2 : ${ u2 }`);
u2 = ['Save', 'you', 'from', 'anything'];
console.log(`u2 : ${ u2 }`);