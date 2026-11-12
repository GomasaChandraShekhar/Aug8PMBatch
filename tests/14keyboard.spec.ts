import { test, expect, type Locator } from '@playwright/test';

test( "Key Board Actions", async ( { page } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause();

const nameField = page.locator('input#name');
const emailField = page.locator('input#email');

await nameField.pressSequentially('Playwright', {delay: 1000});
await nameField.press('Control+A'); // Select All
await nameField.press('Control+C'); // Copy
await emailField.press('Control+V'); // Select All




});