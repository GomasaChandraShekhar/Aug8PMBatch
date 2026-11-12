import { test } from '@playwright/test';

test("Test 1", async () => {
    console.log('I am test case 1');
});

test("Test 2", async () => {
    console.log('I am test case 2');
});

test("Test 3", async () => {
    console.log('I am test case 3');
});

// slow - 3 times - 90 sce
test("Test 4", async () => {
    console.log('I am test case 4');
    test.slow();
});

// fail annotation
test.fail("Test 5", async () => {
    console.log('I am test case 5');
});

// fixme
test.fixme("Test 6", async () => {
    console.log('I am test case 6');
});

// Only Annotation
// test.only("Only Test 3", async () => {
//     console.log('I am test case 3');
// });

// test.only("Only Test 6", async () => {
//     console.log('I am test case 6');
// });

// skip annotaion
// test.skip("Skip Test 1", async () => {
//     console.log('I am test case 1');
// });

// test.skip("Skip Test 2", async () => {
//     console.log('I am test case 2');
// });
