
let arr1: string[];
let arr2: string[] = [];
let arr3: string[] = ['a', 'b', 'c'];

let arr4: number[] = [1, 2, 3, 4, 5];

let arr5: boolean[] = [true, false]

let arr6: (string | number | boolean)[] = [100, "Chandra", true, "Shekhar", 101];
arr6[5] = 102;

arr2[0] = "Playwright";
arr2[1] = "Typescript";
arr2[2] = "Automation";


// console.table(arr6);

let el1 = arr2[0];
// console.log(el1);

let el2 = arr2[1];
// console.log(el2);

let el3 = arr2[2];
// console.log(el3);

let nofEle = arr6.length;
// console.log(nofEle); // 6

// console.log(arr6[arr6.length - 1]); // 5


// for (let i = 0; i < arr6.length; i++) {
//     console.log(arr6[i]);
// }

// for (let i = 0; i <= arr6.length - 1; i++) {
//     console.log(arr6[i]);
// }

for (const element of arr6) {
    console.log(element);
}
















