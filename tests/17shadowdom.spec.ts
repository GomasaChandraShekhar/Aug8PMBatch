import { test, expect } from '@playwright/test';

test( "File upload", async ( { page } ) => {

    await page.goto( "https://selectorshub.com/xpath-practice-page/" );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause();

    const shadowDom = page.locator('div#app2');
    // const pizzaNameField = shadowDom.locator('input#pizza');
    const pizzaNameField = shadowDom.getByPlaceholder('Enter pizza name');

    await shadowDom.hover();
    await pizzaNameField.fill('Playwright');


});