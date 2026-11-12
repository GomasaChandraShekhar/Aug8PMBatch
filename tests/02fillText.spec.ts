import { test } from '@playwright/test';

test(`Insert Data in text field`, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const nameFiled = page.getByRole('textbox', { name: 'Enter Name', exact: true });
    const emailFiled = page.getByRole('textbox', { name: 'Enter EMail', exact: true });
    const phoneFiled = page.getByRole('textbox', { name: 'Enter Phone', exact: true });
    const addressFiled = page.getByRole('textbox', { name: 'Address:', exact: true });

    await page.pause();

    await nameFiled.fill('Playwright');
    await nameFiled.clear();
    await emailFiled.fill('abcd@gmail.com');
    await emailFiled.clear();
    await phoneFiled.fill('9100774577');
    await phoneFiled.clear();
    await addressFiled.fill('Hyderabad, India');


});















