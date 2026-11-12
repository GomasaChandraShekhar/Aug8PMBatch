import { test, expect } from '@playwright/test';

test('Handling Scroll', async ({ page, context }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    const submitBtn = page.locator('button.submit-btn');
    const dyText = page.locator(`h1.title1`);
    const result = page.locator('div.result');
    const blogLink = page.locator(`//a[text()='Blog']`);
    const chooseFile = page.locator('#singleFileInput');
    const sourceEle = page.locator('#draggable');
    const targetEle = page.locator('#droppable');


    // Normal click
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();
    await expect(result).toBeVisible();

    // Right click on homeLink
    await blogLink.scrollIntoViewIfNeeded();
    // await blogLink.click({ button: 'right' })
    // await blogLink.click({ button: 'left' })

    // middle click()
    // await result.click({ button: 'middle' })

    // Hover on element
    await blogLink.hover();


    // Drag & Drop
    await sourceEle.scrollIntoViewIfNeeded();
    await sourceEle.dragTo(targetEle);

    // Double click
    await dyText.dblclick();

});
