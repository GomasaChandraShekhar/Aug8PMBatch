import { test } from '@playwright/test';

test(`Click on Element`, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const startButton = page.getByText('START');

    await page.pause();

    // await startButton.click();

    // await startButton.click({ button: 'right' });
    // await startButton.click({ button: 'left' });
    // await startButton.click({ button: 'middle' });

});













