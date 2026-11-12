
function forLoop() {

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log("Out of for loop");

}

// forLoop()


function whileLoop() {
    let i = 1;
    let flag = true;
    while (flag == true) {
        console.log(i);
        i++;
        if (i == 6) {
            flag = false;
        }
    }
    console.log("Out of while loop");
}

// whileLoop();


function doWhileLoop() {
    let i = 1;
    let flag = true;
    do {
        console.log(i);
        i++;
        if (i == 6) {
            flag = false;
        }
    }
    while (flag == true);
    console.log("Out of do while loop");
}

// doWhileLoop();














