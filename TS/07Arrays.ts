/*
let arr1: string[] = [];

arr1[0] = "Chandra";
arr1[1] = "Shekhar";

// console.log(arr1[0]);
// console.log(arr1[1]);

// console.log(arr1[2]); // undefined

// console.log(arr1);
// console.table(arr1);


let arr2: string[] = ["Chandra", "Naveen", "Naga"];

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

console.log(arr2);
// console.table(arr2);

arr2[3] = "Shekhar";

// console.table(arr2);

arr2[4] = "Pooja";

console.table(arr2);

console.log(arr2.length); // total number of elements in the array

console.log(arr2[arr2.length - 1]); // 5 - 1 = 4


let arr3: number[] = [1, 2, 3, 4, 5]

let arr4: (string | number)[] = [101, "chandra", 100];
*/


const userIds: string[] = ["userId1", "userId2", "userId3", "userId4"];

// console.log(userIds[0]);
// console.log(userIds[1]);
// console.log(userIds[2]);
// console.log(userIds[3]);

// for loop - on the basis of index

// for (let ind: number = 0; ind < userIds.length; ind++) {
//     console.log(`${ind}   -   ${userIds[ind]}`);
// }

// // for of loop - It access elements directly from the array

// for (const ele of userIds) {
//     console.log(ele);
// }

// for in loop - It access indices form the array.

// for (const ind in userIds) {
//     console.log(`${ind}   -   ${userIds[ind]}`);
// }

let products: string[] = ["iphone", "vivo-y", "oppo", "realme", "redme", "xiome", "lp", "nike"];


// Two Dimensional Array ::

let arr5: (string | number)[][] = [
    [100, "chandra"],
    [101, "Shekhar"],
    [102, 'Arjun']
]

const loginData: (string | string)[][] = [
    ['userId1', "password1"],
    ['userId2', "password2"],
    ['userId3', 'password3']
]
// console.log(loginData[0]);

// Nested loops

// for (const arr of loginData) {
//     let arrInner = arr;
//     console.log(arrInner);
//     for (const element of arrInner) {
//         console.log(element);
//     }
// }

// for (const outerInd in loginData) {
//     let innerArr = loginData[outerInd];
//     console.log(innerArr);
//     for (const innerInd in innerArr) {
//         console.log(innerArr[innerInd]);
//     }
// }

// for (let ind = 0; ind < loginData.length; ind++) {
//     // console.log(loginData[ind]);
//     let intrlArr: string[] = loginData[ind];
//     console.log(intrlArr);
//     for (let j = 0; j < intrlArr.length; j++) {
//         console.log(intrlArr[j]);
//     }
// }





// let arrSize = products.length // totalnumber of elemente in the array
// console.log(arrSize);

let data_1 = products.at(1); // Returns the item located at the specified index.
// console.log(data_1);

let data = products.find(ele => ele == "iphone");
// console.log(data);

let data2 = products.findIndex(ele => ele == "oppo1"); // -1
// console.log(data2);

let array1: number[] = [2, 4, 6, 8];

// multiply every element of the array by 5

let mulArr = array1.map(ele => { ele * 5 }); // Performs the specified action for each element in an array and returns a new array
// console.log(mulArr);

let prodArr = products.map(ele => `${ele}_001`);
// console.log(prodArr);

// products.forEach(ele => console.log(ele.toUpperCase())) // Performs the specified action for each element in an array and returns nothing

let newArr = products.concat(prodArr);
// console.log(newArr);

let status1 = products.includes("iphone");
// console.log(status1);

let size = array1.push(10, 12); // Appends new elements to the end of an array, and returns the new length of the array.
// console.log(size);
// console.log(array1);

let popData = array1.pop(); // removes and returns last element of the array.
// console.log(popData);
// console.log(array1);

let shiftData = array1.shift(); // removes and returns first element of the array.
// console.log(shiftData);
// console.log(array1);

let unshiftSize = array1.unshift(10, 20, 30); // Adds new elements at the start of an array, and returns the new length of the array.
// console.log(unshiftSize);
// console.log(array1);

let spliceData = array1.splice(2, 2, ...[7, 9, 8]);
// console.log(spliceData);
// console.log(array1);

let sortData = array1.sort((a, b) => b - a);
// console.log(sortData);


// Generic way :: 

const userIds1: Array<string> = ["userId1", "userId2", "userId3", "userId4"];
const ids: Array<number> = [10, 20, 30, 40];

let data22: Array<string | number> = [20, 'abcd', 40, 50, 'dfdfd']

let data23: Array<string | number> = [];

data23[0] = 120;
data23[1] = 130;
data23[2] = "chandra";


for (const element of data23) {
    // console.log(element);
}

// Array Object :: 

let data12: Array<number> = new Array(10, 120, 34, 35, 23, 56);

// console.log(data12[0]);

data12[6] = 100;

// console.log(data12[6]);


let tpl1: [number, string, boolean] = [10, 'tuple', true];

// tpl1[number] = [30];



// tpl1.sort()
// tpl1.push();



















