import { test, type Locator } from '@playwright/test';

test("Handling Text Field", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    // await page.pause();

    const nameField: Locator = page.getByRole('textbox', { name: 'Enter Name' });
    await nameField.fill('Playwright');
    const data: string = await nameField.inputValue();
    console.log("Before clear :: ", data);
    await nameField.clear();
    const data2: string = await nameField.inputValue();
    console.log("After clear :: ", data2);
    // await page.close();

});

test("Handling Text Field 02", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    // await page.pause();

    const nameField: Locator = page.getByRole('textbox', { name: 'Enter Name' });
    await nameField.fill('Playwright');
    const data: string = await nameField.inputValue();
    console.log("Before clear :: ", data);
    await nameField.clear();
    const data2: string = await nameField.inputValue();
    console.log("After clear :: ", data2);
    // await page.close();

});

test.fail("Handling Text Field 03", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    // await page.pause();

    const nameField: Locator = page.getByRole('textbox', { name: 'Enter Name' });
    await nameField.fill('Playwright');
    const data: string = await nameField.inputValue();
    console.log("Before clear :: ", data);
    await nameField.clear();
    const data2: string = await nameField.inputValue();
    console.log("After clear :: ", data2);
    // await page.close();

});
