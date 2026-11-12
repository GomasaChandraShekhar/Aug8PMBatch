
let str1: string = 'PlayWright TyPescriPt Automation Testing';
console.log(str1);

/*
let str2 = str1.at(0); // P
console.log(str2);

let str3 = str1.at(str1.length - 1); // g
console.log(str3);

// console.log(str1.length);
let str4 = str1.toUpperCase();
console.log(str4);
console.log(str1 == str4);

let str5 = str1.toLowerCase();
console.log(str5);
console.log(str1 == str5);
*/
// console.log(str1.includes('play'));

// console.log(str1.indexOf('a'));
// console.log(str1.lastIndexOf('a'));

// console.log(str1.startsWith('Play'));

// console.log(str1.endsWith('testing'));

// console.log(str1.slice(10, 5));

// console.log(str1.substring(0, 5));

// let strArr = str1.split(' ');
// console.log(strArr);

// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd());

// console.log(str1.replace("P", 'k'));
// console.log(str1.replaceAll("P", 'k'));


let revStr = '';

for (let i = str1.length - 1; i >= 0; i--) {
    // revStr += str1[i];

    revStr = revStr.concat(str1[i]);
}

console.log(revStr);

