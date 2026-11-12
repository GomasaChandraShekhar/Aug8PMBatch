import { test, expect } from '@playwright/test';

let expectedTitle: string = "STORE";

test("Test_02", async ({ page }) => {

  await page.goto('https://demoblaze.com/');
  await page.waitForLoadState('domcontentloaded');

  let actualTitle = await page.title();
  console.log(`Page Title is :: ${actualTitle}`);

  // verify the title of the page - STORE - assertion

  expect.soft(actualTitle).toEqual('Store'); // Hard Assertion - failed

  await page.locator('#login2').click();
  await page.waitForLoadState('domcontentloaded');

  await page.close();


});









