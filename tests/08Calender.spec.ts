import { test, expect } from '@playwright/test';

test.skip('Handling Calender with Single month Dates', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');
    await page.waitForLoadState('domcontentloaded');

    let date: string = '30';
    let month: string = 'July';
    let year: string = '2026';
    let flag = true;

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('//input[@id="datepicker"]');

    const prevButton = frame.getByTitle('Prev');
    const nextButton = frame.getByTitle('Next');
    const monthTitle = frame.locator('.ui-datepicker-month');
    const yearTitle = frame.locator('.ui-datepicker-year');
    const dateValue = frame.getByRole('link', { name: `${date}` });


    await page.pause();
    // await dateField.fill('09/29/2026');

    await dateField.click();
    await expect(prevButton).toBeVisible();

    // Future Date

    // do {
    //     if (await monthTitle.innerText() == month && await yearTitle.innerText() == year) {
    //         await dateValue.click();
    //         flag = false;
    //     } else {
    //         await nextButton.click();
    //     }
    // } while (flag);

    // previous date

    do {
        if (await monthTitle.innerText() == month && await yearTitle.innerText() == year) {
            await dateValue.click();
            flag = false;
        } else {
            await prevButton.click();
        }
    } while (flag);


});

test.skip('Handling Calender with Other month Dates', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/#other-months');
    await page.waitForLoadState('domcontentloaded');

    let date: string = '29';
    let month: string = 'July';
    let datamonth: number = 6;
    let year: string = '2026';

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('//input[@id="datepicker"]');

    const prevButton = frame.getByTitle('Prev');
    const nextButton = frame.getByTitle('Next');
    const monthTitle = frame.locator('.ui-datepicker-month');
    const yearTitle = frame.locator('.ui-datepicker-year');
    // const dateValue = frame.getByRole('link', { name: `${date}` });

    const dateValue = frame.locator(`//td[@data-month=${datamonth}]//a[text()=${date}]`)

    await page.pause();
    // await dateField.fill('09/29/2026');

    await dateField.click();
    await expect(prevButton).toBeVisible();
    let flag = await nextButton.isVisible();

    // Future Date

    // do {
    //     if (await monthTitle.innerText() == month && await yearTitle.innerText() == year) {
    //         await dateValue.click();
    //         flag = await nextButton.isVisible();
    //     } else {
    //         await nextButton.click();
    //     }
    // } while (flag);

    // previous date

    do {
        if (await monthTitle.innerText() == month && await yearTitle.innerText() == year) {
            await dateValue.click();
            flag = await prevButton.isVisible();
        } else {
            await prevButton.click();
        }
    } while (flag);


});


test('Handling Calender with multiple months', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/#multiple-calendars');
    await page.waitForLoadState('domcontentloaded');

    let date: string = '29';
    let month: string = 'July';
    let datamonth: number = 6;
    let year: string = '2026';

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('//input[@id="datepicker"]');

    const firstMonth = frame.locator('.ui-datepicker-group-first');
    const middleMonth = frame.locator('.ui-datepicker-group-middle');
    const lastMonth = frame.locator('.ui-datepicker-group-last');

    const prevButton = firstMonth.getByTitle('Prev');
    const nextButton = lastMonth.getByTitle('Next');

    const firstMonthTitle = firstMonth.locator('.ui-datepicker-month');
    const middleMonthTitle = middleMonth.locator('.ui-datepicker-month');
    const lastMonthTitle = lastMonth.locator('.ui-datepicker-month');

    const firstMonthyear = firstMonth.locator('.ui-datepicker-year');
    const middleMonthyear = middleMonth.locator('.ui-datepicker-year');
    const lastMonthyear = lastMonth.locator('.ui-datepicker-year');

    const firstMonthdate = firstMonth.locator(`//td[@data-month=${datamonth}]//a[text()=${date}]`)
    const middleMonthdate = middleMonth.locator(`//td[@data-month=${datamonth}]//a[text()=${date}]`)
    const lastMonthdate = lastMonth.locator(`//td[@data-month=${datamonth}]//a[text()=${date}]`)

    await page.pause();

    await dateField.click();
    await expect(prevButton).toBeVisible();
    let flag = await nextButton.isVisible();

    // Future Date

    // do {
    //     if (await firstMonthTitle.innerText() == month && await firstMonthyear.innerText() == year) {
    //         await firstMonthdate.click();
    //         flag = await nextButton.isVisible();
    //     } else if (await middleMonthTitle.innerText() == month && await middleMonthyear.innerText() == year) {
    //         await middleMonthdate.click();
    //         flag = await nextButton.isVisible();
    //     }
    //     else if (await lastMonthTitle.innerText() == month && await lastMonthyear.innerText() == year) {
    //         await lastMonthdate.click();
    //         flag = await nextButton.isVisible();
    //     } else {
    //         await nextButton.click();
    //     }
    // } while (flag);

    // previous date

    do {
        if (await firstMonthTitle.innerText() == month && await firstMonthyear.innerText() == year) {
            await firstMonthdate.click();
            flag = await nextButton.isVisible();
        } else if (await middleMonthTitle.innerText() == month && await middleMonthyear.innerText() == year) {
            await middleMonthdate.click();
            flag = await nextButton.isVisible();
        } else if (await lastMonthTitle.innerText() == month && await lastMonthyear.innerText() == year) {
            await lastMonthdate.click();
            flag = await nextButton.isVisible();
        } else {
            await prevButton.click();
        }
    } while (flag);

});

