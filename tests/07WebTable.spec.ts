import { test, expect } from '@playwright/test';

test('Handling Web Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    const table = page.locator(`//table[@id='taskTable']`);

    const headerColumns = await table.locator(`//thead//tr[@id='headers']`).all();

    const rows = table.locator('//tbody//tr')
    let rowsCount = (await rows.all()).length;
    console.log(`Rows count is ${rowsCount}`);

    // for (let column of headerColumns) {
    //     let colData = await column.innerText();
    //     console.log(colData);
    // }

    // for (let hcindex = 0; hcindex < headerColumns.length; hcindex++) {
    //     let headerColumnData = await headerColumns[hcindex].innerText();
    //     console.log(headerColumnData);
    // }

    for (let row = 0; row < rowsCount; row++) {
        const columns = rows.nth(row).locator('//td');
        let columnsCount = (await columns.all()).length;
        for (let column = 0; column < columnsCount; column++) {
            if (await columns.nth(0).innerText() == 'Chrome') {
                let tblCellData = await columns.nth(column).innerText();
                console.log(`Data at row ${row + 1} and column ${column + 1} is :: ${tblCellData}`);
            }
        }
    }

});



