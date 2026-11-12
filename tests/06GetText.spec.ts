import { test, expect } from '@playwright/test';

test(`Capturing Text 001`, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    let atpText_Role = page.getByRole(`heading`, { name: 'Automation Testing Practice' });
    let atpText_Text = page.getByText(`Automation Testing Practice`);
    let atpText_css = page.locator(`h1.title`);

    let innerText = await atpText_Role.innerText();
    console.log(innerText);

    let allInnerTexts = await atpText_Role.allInnerTexts();
    console.log(allInnerTexts);

    let textContent = await atpText_Role.textContent();
    console.log(textContent);

    let allTextContents = await atpText_Role.allTextContents();
    console.log(allTextContents);

    let innerHTML = await atpText_Role.innerHTML();
    console.log(innerHTML);

});


