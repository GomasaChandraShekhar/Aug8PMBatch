import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import ApiUtils from '../utils/ApiUtils';


const baseUrl: string = 'https://api.restful-api.dev/collections';
const mobilesColl: string = '/mobiles/objects';
const prodColl: string = '/products/objects';
let apiContext: APIRequestContext;
let apiResponse: APIResponse;
let apiUtils: ApiUtils;
let jsonResponse: any;
const key: string = 'b02d68ca-2fa2-49c6-9ae4-94d07e25d37a';
const cpuModel = 'CPU model';
const hardDisk = 'Hard disk size';

const postPayload = {
    "name": "Apple MacBook Pro 16",
    "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
    }
};

const putPayload = {
    "name": "Apple MacBook Pro 26 - put update",
    "data": {
        "year": 2026,
        "price": 2026.99,
        "CPU model": "Intel Core i26",
        "Hard disk size": "26 TB"
    }
};

const patchPayload = {
    "name": "Apple MacBook Pro 25 - patch update",
    "data": {
        "year": 2025
    }
};

test.beforeEach("Setup", async ({ playwright }) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils(apiContext);
});


test("Create new object", async () => {
    // apiContext = await playwright.request.newContext();
    // apiUtils = new ApiUtils(apiContext);

    apiResponse = await apiUtils.createCollectionObject(`${baseUrl}${mobilesColl}`, postPayload, key);

    console.log(apiResponse.status()); // 200
    console.log(apiResponse.statusText()); // OK

    expect.soft(apiResponse.status()).toBe(200);
    expect.soft(apiResponse.statusText()).toBe('OK');

    jsonResponse = await apiResponse.json();

    console.log(`Id is :: ${jsonResponse.id}`);
    console.log(`Name is :: ${jsonResponse.name}`);
    console.log(`Created At is :: ${jsonResponse.createdAt}`);
    console.log(`Year is :: ${jsonResponse.data.year}`);
    console.log(`Price is :: ${jsonResponse.data.price}`);
    console.log(`Cpu Model is :: ${jsonResponse.data[cpuModel]}`);
    console.log(`Hard Disk Size is :: ${jsonResponse.data[hardDisk]}`);

});

test("Get the created object", async () => {
    // apiContext = await playwright.request.newContext();
    apiResponse = await apiUtils.getOneObjectFromCollection(`${baseUrl}${mobilesColl}`, jsonResponse.id, key);

    console.log(apiResponse.status()); // 200
    console.log(apiResponse.statusText()); // OK

    expect.soft(apiResponse.status()).toBe(200);
    expect.soft(apiResponse.statusText()).toBe('OK');

    jsonResponse = await apiResponse.json();

    expect.soft(jsonResponse.name).toBe(postPayload.name);
    expect.soft(jsonResponse.data.year).toBe(postPayload.data.year);
    expect.soft(jsonResponse.data.price).toBe(postPayload.data.price);
    expect.soft(jsonResponse.data[cpuModel]).toBe(postPayload.data[cpuModel]);
    expect.soft(jsonResponse.data[hardDisk]).toBe(postPayload.data[hardDisk]);

});
/*
test("Update All Data", async () => {
    // apiContext = await playwright.request.newContext();
    apiResponse = await apiUtils.updateObject(url, jsonResponse.id, putPayload);

    console.log(apiResponse.status()); // 200
    console.log(apiResponse.statusText()); // OK

    expect.soft(apiResponse.status()).toBe(200);
    expect.soft(apiResponse.statusText()).toBe('OK');

    jsonResponse = await apiResponse.json();

    expect.soft(jsonResponse.name).toBe(putPayload.name);
    expect.soft(jsonResponse.data.year).toBe(putPayload.data.year);
    expect.soft(jsonResponse.data.price).toBe(putPayload.data.price);
    expect.soft(jsonResponse.data[cpuModel]).toBe(putPayload.data[cpuModel]);
    expect.soft(jsonResponse.data[hardDisk]).toBe(putPayload.data[hardDisk]);
    console.log(jsonResponse.updatedAt);

});

test("Partial Update", async () => {
    // apiContext = await playwright.request.newContext();
    apiResponse = await apiUtils.partialUpdateObject(url, jsonResponse.id, patchPayload);

    console.log(apiResponse.status()); // 200
    console.log(apiResponse.statusText()); // OK

    expect.soft(apiResponse.status()).toBe(200);
    expect.soft(apiResponse.statusText()).toBe('OK');

    jsonResponse = await apiResponse.json();

    expect.soft(jsonResponse.name).toBe(patchPayload.name);
    expect.soft(jsonResponse.data.year).toBe(patchPayload.data.year);
    console.log(jsonResponse.updatedAt);

});

test("Delete the object", async () => {
    // apiContext = await playwright.request.newContext();
    const id: string = jsonResponse.id;
    apiResponse = await apiUtils?.deleteObject(url, id);

    console.log(apiResponse.status()); // 200
    console.log(apiResponse.statusText()); // OK

    expect.soft(apiResponse.status()).toBe(200);
    expect.soft(apiResponse.statusText()).toBe('OK');

    jsonResponse = await apiResponse.json();

    expect.soft(jsonResponse.message).toBe(`Object with id = ${id} has been deleted.`);

});
*/

test.afterEach("Teardown", async () => {
    // apiUtils = null;
});



/*

,
{
  "name": "Apple MacBook Pro 26",
  "data": {
    "year": 2026,
    "price": 2026.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
    "color": "silver"
  }
},
{
  "name": "Apple MacBook Pro 17",
  "data": {
    "year": 2017,
    "price": 2017.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
    "color": "block"
  }
}
]

*/


