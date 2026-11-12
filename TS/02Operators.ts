
function arithOpr() {

    // network create some API
    // Promise - pending, fulfilled, rejected
    // 30 Sec

    console.log("Addition 10 + 5 ::", 10 + 5); // 15
    console.log("Subtraction 10 - 5 ::", 10 - 5); // 5
    console.log("Multiplication 10 * 5 ::", 10 * 5); // 50
    console.log("Division 10 / 5 ::", 10 / 5); // 2
    console.log("Modulous 10 % 5 ::", 10 % 5); // 0

}

// arithOpr()


function assignOpr() {
    let a: number = 10;
    console.log("Addition and Operator a += 10:: ", a += 10); // a = 20
    // a = 10;
    // a += 10
    // a = a + 10;
    // a = 10 + 10
    // a = 20;
    console.log("Subtraction and Operator a -= 10:: ", a -= 10); // a = 10
    // a -= 10;
    // a = a - 10;
    // a = 20 - 10;
    // a = 10
    console.log("Multiplication and Operator a *= 10:: ", a *= 10); // a = 100
    // a *= 10;
    // a = a * 10;
    // a = 10 * 10;
    // a = 100
    console.log("Division and Operator a /= 10:: ", a /= 10); // a = 10
    // a /= 10;
    // a = a / 10;
    // a = 100 / 10;
    // a = 10
    console.log("Modulous and Operator a %= 10:: ", a %= 10); // a = 0
    // a %= 10;
    // a = a % 10;
    // a = 10 % 10;
    // a = 0

}

// assignOpr();

function compOpr() {

    // console.log("Equal Operator 10 == 10 :: ", 10 == 10); // true
    // console.log("Equal Operator 10 == 100 :: ", 10 == 100); //  false

    // console.log("Not Equal Operator 15 != 10 :: ", 15 != 10); // true
    // console.log("Equal Operator 10 != 10 :: ", 10 != 10); //  false

    // console.log("Strictly equal to 10 === 10 ", 10 === 10); // true
    // console.log("Strictly equal to '10' === '10' ", '10' === '10'); // true
    // console.log("Strictly equal to 10 === 20 ", 10 === 20); // false

    // console.log("Strictly not equal to 10 !== 100 ", 10 !== 100); // true
    // console.log("Strictly not equal to '10' !== '100' ", '10' !== '100'); // true
    // console.log("Strictly not equal to 10 !== 20 ", 10 !== '10'); // true
    // console.log("Strictly not equal to 10 !== 10 ", 10 !== 10); // false

    // console.log("Less Than Operator 5 < 10 :: ", 5 < 10); // true
    // console.log("Less Than Operator 15 < 10 :: ", 15 < 10); // false

    // console.log("Less Than or equal Operator 5 <= 10 :: ", 5 <= 10); // true
    // console.log("Less Than or equal Operator 10 <= 10 :: ", 10 <= 10); // true
    // console.log("Less Than or equal Operator 15 <= 10 :: ", 15 <= 10); // false

    // console.log("Grater Than Operator 15 > 10 :: ", 15 > 10); // true
    // console.log("Grater Than Operator 15 > 20 :: ", 15 > 20); // false

    console.log("Grater Than or equal Operator 15 >= 10 :: ", 15 >= 10); // true
    console.log("Grater Than or equal Operator 15 >= 15 :: ", 15 >= 15); // true
    console.log("Grater Than or equal Operator 15 >= 20 :: ", 15 >= 20); // false

}

// compOpr();

function logicalOpr() {

    // console.log("AND Operator true && true :: ", true && true); // true
    // console.log("AND Operator true && false :: ", true && false); // false
    // console.log("AND Operator false && true :: ", false && true); // false
    // console.log("AND Operator false && false :: ", false && false); // false

    console.log("OR Operator true || true :: ", true || true); // true
    console.log("OR Operator true || false :: ", true || false); // true
    console.log("OR Operator false || true :: ", false || true); // true
    console.log("OR Operator false || false :: ", false || false); // false

    console.log("NOT Operator !true :: ", !true); // false
    console.log("NOT Operator !false :: ", !false); // true

}

// logicalOpr();

function terOpr(age: number) {
    let result = (age >= 18) ? "Major" : "Minor"
    console.log(result);
}

// terOpr(17) // Minor
// terOpr(18) // Major
// terOpr(19) // Major









