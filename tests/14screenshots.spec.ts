import { test, expect } from '@playwright/test';

test('Handling screenshots', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const submitBtn = page.locator('button.submit-btn');

    await submitBtn.screenshot({ path: './screenshots/submitBtn.jpg' });

    await page.screenshot({ path: './screenshots/fullPage.jpg', fullPage: true });

    await page.screenshot({ path: './screenshots/partialPage.jpg' });

    expect(await submitBtn.screenshot({ path: './screenshots/submitBtn.jpg' })).toMatchSnapshot();
    expect(await page.screenshot({ path: './screenshots/partialPage.jpg' })).toMatchSnapshot();
    // expect(await page.screenshot({ fullPage: true, path: './screenshots/fullPage.jpg' })).toMatchSnapshot();

});
