import { test } from '@playwright/test';

test('Keyboard Handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const nameFiled = page.getByRole('textbox', { name: 'Enter Name', exact: true });
    const emailFiled = page.getByRole('textbox', { name: 'Enter EMail', exact: true });
    const phoneFiled = page.getByRole('textbox', { name: 'Enter Phone', exact: true });
    const addressFiled = page.getByRole('textbox', { name: 'Address:', exact: true });

    await page.pause();

    await nameFiled.pressSequentially('Playwright');
    await phoneFiled.fill('9100774577');
    await addressFiled.pressSequentially('Playwright', { delay: 1000 });

    await nameFiled.press('Control+A')

    await nameFiled.press('Control+C');

    await nameFiled.press('Delete');

    await emailFiled.press('Control+V');



});


