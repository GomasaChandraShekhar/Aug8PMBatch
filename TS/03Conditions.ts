

function ifCond(age: number) {

    if (age >= 18) {
        console.log("Major");
    }
    else {
        console.log("Minor");
    }

}

// ifCond(17); // Minor
// ifCond(18); // Major
// ifCond(19); // Major


function elseIfCond(marks: number) {

    if (marks >= 40 && marks <= 59) {
        console.log("Student passed with second division");
    }
    else if (marks >= 60 && marks <= 74) {
        console.log("Student passed with first division");
    }
    else if (marks >= 75 && marks <= 100) {
        console.log("Student passed with distrinction");
    }
    else if (marks < 40) {
        console.log("Student is failed");
    }
    else {
        console.log("Provided marks are not valid");
    }

}


// elseIfCond(56);
// elseIfCond(66);
// elseIfCond(86);

function switchCase(day: string) {

    switch (day) {

        case "Sunday":
            console.log("Sunday");
            break;

        case "Monday":
            console.log("Monday");
            break;

        case "Tuesday":
            console.log("Tuesday");
            break;

        case "Wednsday":
            console.log("Wednsday");
            break;

        case "Thursday":
            console.log("Thursday");
            break;

        case "Friday":
            console.log("Friday");
            break;

        case "Saturday":
            console.log("Saturday");
            break;

        default:
            console.log("Invalid input");

    }
    console.log("Out of switch");

}

// switchCase("Friday1");






