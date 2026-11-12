import { APIResponse, expect, request, test } from '@playwright/test';


const url: string = 'https://api.restful-api.dev/objects';
let response: any;

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
  "name": "Apple MacBook 2026 - Update Put",
  "data": {
    "year": 2026,
    "price": 20261.99,
    "CPU model": "Intel Core i2026",
    "Hard disk size": "2026 TB"
  }
};

const patchPayload = {
  "name": "Apple MacBook 16 - Update Patch"
};

const cpuModel = 'CPU model';
const hardDisk = 'Hard disk size';

test("Post Request", async ({ request }) => {
  console.log("Post Request");
  const postResponse = await request.post(url, {
    data: postPayload,
    headers: {
      "Content-Type": "application/json"
    }
  });

  console.log(postResponse.status()); // 200
  console.log(postResponse.statusText()); // OK

  response = await postResponse.json();

  console.log(`Id is :: ${response.id}`);
  // console.log(`Name is :: ${response.name}`);
  // console.log(`Created At is :: ${response.createdAt}`);
  // console.log(`Year is :: ${response.data.year}`);
  // console.log(`Price is :: ${response.data.price}`);
  // console.log(`Cpu Model is :: ${response.data[cpuModel]}`);
  // console.log(`Hard Disk Size is :: ${response.data[hardDisk]}`);
  console.log("=============================");
});

test("Get Request", async ({ request }) => {
  console.log("Get Request");

  const getResp = await request.get(`${url}/${response.id}`);
  console.log(getResp.status()); // 200
  expect.soft(getResp.status()).toBe(200);
  console.log(getResp.statusText()); // OK
  expect.soft(getResp.statusText()).toBe('OK');

  response = await getResp.json();

  expect.soft(response.name).toBe(postPayload.name);
  expect.soft(response.data.year).toBe(postPayload.data.year);
  expect.soft(response.data.price).toBe(postPayload.data.price);
  expect.soft(response.data[cpuModel]).toBe(postPayload.data[cpuModel]);
  expect.soft(response.data[hardDisk]).toBe(postPayload.data[hardDisk]);

  console.log("=============================");


});


test("Put Request", async ({ request }) => {
  console.log("Put Request");
  const putResponse = await request.put(`${url}/${response.id}`,
    {
      data: putPayload,
      headers: {
        "Content-Type": "application/json"
      }
    });

  console.log(putResponse.status()); // 200
  expect.soft(putResponse.status()).toBe(200);
  console.log(putResponse.statusText()); // OK
  expect.soft(putResponse.statusText()).toBe('OK');

  response = await putResponse.json();

  expect.soft(response.name).toBe(putPayload.name);
  expect.soft(response.data.year).toBe(putPayload.data.year);
  expect.soft(response.data.price).toBe(putPayload.data.price);
  expect.soft(response.data[cpuModel]).toBe(putPayload.data[cpuModel]);
  expect.soft(response.data[hardDisk]).toBe(putPayload.data[hardDisk]);
  console.log(response.updatedAt);
  console.log("=============================");
});

test("Patch Request", async ({ request }) => {
  console.log("Patch Request");
  const patchResponse = await request.patch(`${url}/${response.id}`,
    {
      data: patchPayload,
      headers: {
        "Content-Type": "application/json"
      }
    });

  console.log(patchResponse.status()); // 200
  expect.soft(patchResponse.status()).toBe(200);
  console.log(patchResponse.statusText()); // OK
  expect.soft(patchResponse.statusText()).toBe('OK');

  response = await patchResponse.json();

  expect.soft(response.name).toBe(patchPayload.name);
  console.log(response.updatedAt);


  console.log("=============================");
});

test("Delete Request", async ({ request }) => {
  console.log("Delete Request");
  const id = response.id;
  const deleteResp = await request.delete(`${url}/${id}`);
  console.log(deleteResp.status()); // 200
  expect.soft(deleteResp.status()).toBe(200);
  console.log(deleteResp.statusText()); // OK
  expect.soft(deleteResp.statusText()).toBe('OK');

  response = await deleteResp.json();
  console.log(response.message);
  expect.soft(response.message).toBe(`Object with id = ${id} has been deleted.`);

  console.log("=============================");

});

