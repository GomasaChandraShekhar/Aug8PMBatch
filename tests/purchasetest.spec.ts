import { test, expect } from '@playwright/test';

test("Login to Client Application", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForLoadState('domcontentloaded');

    await page.locator('input#userEmail').fill('splaywright@gmail.com');
    await page.locator('input#userPassword').fill('Gomasa@1988');
    await page.locator('input#login').click();

    await expect.soft(page.locator('div#toast-container')).toBeVisible();
    await expect.soft(page.getByText(' Sign Out ')).toBeVisible();

    const products = await page.locator('div.card-body').all();

    for (const product of products) {
        const prodName = await product.locator('b').innerText();
        if (prodName == 'IPHONE 13 PRO') {
            await product.getByText(' Add To Cart').click();
            break;
        }
    }
    expect.soft(page.locator('button[routerlink*="cart"]')).toBeVisible();
    await page.locator('button[routerlink*="cart"]').click();

    expect.soft(page.getByText('Checkout')).toBeVisible();
    await page.getByText('Checkout').click();

    await page.getByPlaceholder('Select Country').pressSequentially('Canada');

    await page.locator('span.ng-star-inserted').last().click();
    await page.getByText('Place Order ').click();

    const orderId = (await page.locator('label.ng-star-inserted').innerText()).replaceAll('|', '').trim();

    await page.locator('button[routerlink*="myorders"]').click();

    const rows = await page.locator('table.table-bordered tbody tr').all();

    for (const row of rows) {
        const orderIdFromTable = await row.locator('th').innerText();
        if (orderId == orderIdFromTable) {
            await row.getByText('View').click();
            break;
        }
    }

    const orderIdSummaryPage = await page.locator('div.col-text.-main').innerText();

    expect.soft(orderId).toBe(orderIdSummaryPage);

    await page.getByText(' View Orders ').click();

    await page.locator('button[routerlink="/dashboard/"]').click();

    await page.pause();

    await page.getByText(' Sign Out ').click();

    await page.close();

});


