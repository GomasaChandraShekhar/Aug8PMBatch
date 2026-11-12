
function method1() {
    console.log("I am non parameterised method");
}

// method1();

function login(uName: string, pswd: string) {
    console.log(`User name is :: ${uName}`);
    console.log(`Password is :: ${pswd}`);
}

// login("Playwright", "Typescript");

// Optional Parameters

function method2(sName: string, sId: number, sPhn?: number) {
    console.log(`Student name is ${sName}`);
    console.log(`Student Id is :: ${sId}`);

    if (typeof (sPhn) == 'number') {
        console.log(`Student Phone number is :: ${sPhn}`);
    }
}

// method2("Playwright", 123, 9100774577);
// method2("Playwright", 123);

// Default parameters

function method3(sName: string, sId: number, country: string = "India") {
    console.log(`Student name is ${sName}`);
    console.log(`Student Id is :: ${sId}`);
    console.log(`Student country is :: ${country}`);
}

// method3("Playwright", 123);
// method3("Playwright", 123, "Austrelia");


// Anonymous Function 

let result = function () {
    console.log("I am anonymous function");
}

// result();

// let Student = function (sName: string, sId: number, sCountry: string = "India") {
//     console.log(`Student name is ${sName}`);
//     console.log(`Student Id is :: ${sId}`);
//     console.log(`Student country is :: ${sCountry}`);
// }

// Student("Playwright", 123, "Austrelia");


// Arrow Function 


// let Student = () => {
//     console.log("I am an arrow function");
// }

// Student();


let Student = (sName: string, sId: number, sCountry: string = "India", sPhno?: number) => {
    console.log(`Student name is ${sName}`);
    console.log(`Student Id is :: ${sId}`);
    console.log(`Student country is :: ${sCountry}`);
    if (typeof (sPhno) == 'number') {
        console.log(`Student Phone number is :: ${sPhno}`);
    }
}

// Student("Playwright", 123, "Austrelia");
// Student("Playwright", 123, "Austrelia", 9100774577);


function method05(): string {



    return "Chandra";
}











