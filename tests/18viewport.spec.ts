import { test, chromium } from '@playwright/test';

test.skip('Handling View Port', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1530, height: 690 },
        ignoreHTTPSErrors: true
    }

    );
    const page = await context.newPage();

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForLoadState('domcontentloaded');

    const shodwDom = page.locator('#userName');
    const userNameField = shodwDom.locator('#kils');

    const closedDom = page.locator('#userPass');
    const pswdField = closedDom.locator('#pwd');

    await page.pause();
    await userNameField.scrollIntoViewIfNeeded();

    await userNameField.fill('Playwright');


});

test('Handling SSL Cert', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1530, height: 690 },
        ignoreHTTPSErrors: true
    }

    );
    const page = await context.newPage();

    await page.goto('https://expired.badssl.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

});

