/**
 * Created by：CaMnter
 */

const array1: number[] = [1, 2, 3, 4];
console.log(`array1 : ${ array1 }`);
let value: any;
for (value in array1) {
  console.log(`array1 : ${ value }`)
}

// 数组解构
const [arrayValue1, arrayValue2] = [1, 2];
console.log(`arrayValue1 arrayValue2 :  ${ arrayValue1 } ${ arrayValue2 }`);

// concat
const array2: number[] = [1, 2].concat([3, 4]);
console.log(`array2 : ${ array2 }`);

// every
// 检测数值元素的每个元素是否都符合条件
const array3: boolean = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13].every((value: number, index: number, array: number[]): boolean => {
  return value > 10;
});
console.log(`array3 : ${ array3 }`);

// filter
// 检测数值元素，并返回符合条件所有元素的数组
const array4: number[] = [1, 2, 3, 4, 10, 11, 12, 13].filter((value: number, index: number, array: number[]): boolean => {
  return value > 10;
});
console.log(`array4 : ${ array4 }`);

// forEach
// 数组每个元素都执行一次回调函数
const array5: number[] = [1, 2, 3];
array5.forEach((value: number, index: number, array: number[]) => {
  console.log(`array5 : ${ value }`);
})

// join
// 把数组的所有元素放入一个字符串
const array6: number[] = [1, 2, 3];
console.log(`array6 : ${ array6.join(' | ') }`);


// map
// 通过指定函数处理数组的每个元素，并返回处理后的数组
const array7: string[] = [1, 2, 3].map<string>((value: number, index: number, array: number[]) => {
  return `string ${ value }`;
});
console.log(`array7 : ${ array7 }`);

// pop
// 删除数组的最后一个元素并返回删除的元素
const array8: string[] = ['Save', 'you'];
console.log(`array8 : ${ array8.pop() }`);

// slice
// 选取数组的的一部分，并返回一个新数组
const array9: string[] = ['Save', 'you', 'from', 'anything'];
console.log(`array9 : ${ array9.slice(0, 1) } ${ array9.slice(2, array9.length) }`);

// some
// 检测数组元素中是否有元素符合指定条件
const array10: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array10Some = array10.some((value: number): boolean => {
  return value > 10;
});
console.log(`array10 : ${ array10Some }`);