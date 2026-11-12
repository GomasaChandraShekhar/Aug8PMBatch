import { test, expect } from '@playwright/test';

test('Handling Simple Alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');


    const simpleAlert = page.getByText('Simple Alert');
    const confirmationAlert = page.getByText('Confirmation Alert');
    const promptAlert = page.getByText('Prompt Alert');
    const displayMessage = page.locator('#demo');

    page.on('dialog', async dialog => {
        console.log(dialog.type());
        expect(dialog.type()).toBe('prompt'); // alert, confirm, prompt
        console.log(dialog.message());
        console.log(dialog.defaultValue());

        // await dialog.accept('Playwrignt');
        await dialog.accept();
        // await dialog.dismiss();
        await expect(displayMessage).toBeVisible();
        console.log(await displayMessage.innerText());
    });

    // await simpleAlert.click();
    // await confirmationAlert.click();
    await promptAlert.click();


});








