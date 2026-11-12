import { test, expect, type Locator } from '@playwright/test';

test("Handling CHeck Boxes", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const sundayCb: Locator = page.locator('input#sunday');
    const mondayCb: Locator = page.locator('input#monday');

    await sundayCb.check();
    await expect.soft(sundayCb).toBeChecked();

    await expect.soft(mondayCb).not.toBeChecked();

    await mondayCb.check();
    await expect.soft(mondayCb).toBeChecked();

    await sundayCb.uncheck();
    await expect.soft(sundayCb).not.toBeChecked();

    await page.close();

});