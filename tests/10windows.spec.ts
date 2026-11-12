import { test, expect } from '@playwright/test';

test.skip('Handling Single window/Tab', async ({ page, context }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const newTabButton = page.getByRole('button', { name: 'New Tab' });
    const popupWindowsButton = page.getByRole('button', { name: 'Popup Windows' });

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            newTabButton.click()
        ]
    );

    const title = await newPage.title()
    console.log(`New Page title is :: ${title}`);
    expect(title).toBe('SDET-QA Blog');

    const sdetHeading = newPage.getByRole('heading', { name: 'SDET-QA Blog' });
    await expect(sdetHeading).toBeVisible();
    await page.pause();
    // await newPage.close();
    await page.bringToFront();
    await expect(newTabButton).toBeVisible();

});

test('Handling Multiple window', async ({ page, context }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const popupWindowsButton = page.getByRole('button', { name: 'Popup Windows' });
    const nameField = page.getByRole('textbox', { name: 'Enter Name' });
    await expect(nameField).toBeVisible();

    await page.pause();
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            popupWindowsButton.click()
        ]
    );
    await page.waitForTimeout(5000); // 5 * 1000 ms

    const pages = context.pages();

    console.log(pages.length); // 3
    const autoPage = await pages[0].title();
    const selPage = await pages[1].title();
    const playPage = await pages[2].title();

    console.log(autoPage);
    console.log(selPage);
    console.log(playPage);

    for (const cPage of pages) {

        if (await cPage.title() == 'Selenium') {
            await cPage.bringToFront();
            const element = cPage.locator(`//span[text()='Downloads']`);
            await expect(element).toBeVisible();
            cPage.close();
        }

        if (await cPage.title() == 'Playwright') { // Fast and reliable end-to-end testing for modern web apps | Playwright
            await cPage.bringToFront();
            const element = cPage.locator(`//b[text()='Playwright']`);
            await expect(element).toBeVisible();
            cPage.close();
        }

    }

    await expect(nameField).toBeVisible();
    await page.close();


});



