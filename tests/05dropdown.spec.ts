import { test, type Locator, expect } from '@playwright/test';

test.skip("Handling Single Selection Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const countryDrp: Locator = page.locator('select#country');

    await countryDrp.selectOption({ value: "uk" });
    console.log('Selected Country is :: ', await countryDrp.inputValue());
    await countryDrp.selectOption('France');
    console.log('Selected Country is :: ', await countryDrp.inputValue());
    await countryDrp.selectOption({ index: 9 });
    console.log('Selected Country is :: ', await countryDrp.inputValue());

    // const countriesList: string = await countryDrp.innerText();
    // console.log(countriesList);

    // const countriesList1: string | null = await countryDrp.textContent();
    // console.log(countriesList1);

    // const countriesList3: string[] = await countryDrp.allInnerTexts();
    // console.log(countriesList3);

    // const countriesList4: string[] = await countryDrp.allTextContents();
    // console.log(countriesList4);

    const options: Locator[] = await countryDrp.locator('option').all();

    console.log('Options count :: ', options.length); // 10

    for (const option of options) {
        console.log(await option.innerText());
    }


    await page.close();

});


test.skip("Handling Multi Selection Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const colorsDrp = page.locator('select#colors');

    // await colorsDrp.selectOption(['Red', 'Blue', 'Green']);

    await colorsDrp.selectOption([{ value: 'red' }, { index: 2 }, { label: 'Yellow' }]);

    await page.close();

});


test("Handling Auto Suggestion Dropdown", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    await page.pause();

    const searchField: Locator = page.locator('textarea#APjFqb.gLFyf');
    const suggestions: Locator = page.locator('ul.G43f7e li.sbct');

    await searchField.fill('Playwright');
    await expect.soft(suggestions.nth(8)).toBeVisible();

    for (const element of await suggestions.all()) {
        if (await element.innerText() == 'playwright documentation') {
            await element.click();
            break;
        }
    }

    await page.close();

});
