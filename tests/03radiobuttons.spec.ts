import { test, expect, type Locator } from '@playwright/test';

test("Handling Radio Button", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const maleRdButton: Locator = page.locator('input#male');
    const femaleRdButton: Locator = page.locator('input#female');

    await maleRdButton.check();
    await expect.soft(maleRdButton).toBeChecked();

    await expect.soft(femaleRdButton).not.toBeChecked();

    await femaleRdButton.check();
    await expect.soft(femaleRdButton).toBeChecked();

    await expect.soft(maleRdButton).not.toBeChecked();

    await page.close();

});