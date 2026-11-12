import { test, expect } from '@playwright/test';

test(`Radio button Handling`, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const male = page.locator('#male');
    const female = page.locator('#female');

    await page.pause();

    await male.check();
    let maleStatus = await male.isChecked();
    expect(maleStatus, 'Male radio button should be selected').toBe(true);

    // await male.uncheck();

    expect.soft(await male.isChecked(), 'Male radio button should be un checked').toBe(true);

    await female.check();
    let femaleStatus = await female.isChecked();
    expect(femaleStatus, 'Female radio button should be selected').toBe(true);

    let maleStatusAfter = await male.isChecked(); // false
    expect(maleStatusAfter, 'Male radio button should be selected').toBe(true); // fail 

});

test.skip(`Check box handling`, async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const sunday = page.locator('#sunday');
    const monday = page.locator('#monday');
    const tuesday = page.getByLabel('Tuesday');
    const wednesday = page.getByLabel('Wednesday');

    await page.pause();

    await sunday.check();
    expect(await sunday.isChecked()).toBe(true);
    await monday.check();
    await tuesday.check();
    await wednesday.check();

    await sunday.uncheck();
    expect(await sunday.isChecked()).toBe(false);


});













