import { test, expect } from '@playwright/test';

test.skip('test 001', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Automation Testing Practice');
    await expect(page.getByRole('textbox', { name: 'Enter Name' })).toBeEmpty();
    await page.getByRole('textbox', { name: 'Enter Name' }).click();
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Playwright');
    await expect(page.getByRole('textbox', { name: 'Enter Name' })).toHaveValue('Playwright');
    await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Automation Testing Practice" [level=1]`);
    await page.getByRole('textbox', { name: 'Enter EMail' }).click();
    await page.getByRole('textbox', { name: 'Enter EMail' }).click();
    await page.getByRole('textbox', { name: 'Enter EMail' }).fill('playwright@abc.com');
    await page.getByRole('textbox', { name: 'Enter Phone' }).click();
    await page.getByRole('textbox', { name: 'Enter Phone' }).fill('900090000');
    await page.getByRole('textbox', { name: 'Enter Phone' }).press('Tab');
    await page.getByRole('textbox', { name: 'Address:' }).fill('Hyderabad, India.');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('checkbox', { name: 'Saturday' }).check();
    await page.getByLabel('Country:').selectOption('japan');
    await page.getByLabel('Colors:').selectOption('green');
    await page.getByLabel('Colors:').selectOption(['blue', 'green']);
    await page.getByLabel('Colors:').selectOption(['blue', 'green', 'yellow']);
    await page.getByLabel('Sorted List:').selectOption('deer');
    await page.getByLabel('Sorted List:').selectOption(['cheetah', 'deer']);
    await page.getByLabel('Sorted List:').selectOption(['cat', 'cheetah', 'deer']);
    await page.locator('#datepicker').click();
    await page.locator('#ui-datepicker-div').getByRole('link', { name: '2', exact: true }).click();
    await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#result')).toContainText('Please select both start and end dates.');
    await page.getByText('Drag me to my target').click();
    await page.getByText('Drop here').click();
    await page.locator('#singleFileInput').click();
    await page.locator('#singleFileInput').setInputFiles('API01.jpg');
    await page.locator('#PageList1').getByRole('link', { name: 'Home' }).click();
    await page.getByRole('link', { name: 'PlaywrightPractice' }).click();
    await page.locator('#PageList2').getByRole('link', { name: 'Home' }).click();
});

test('test 002', async ({ page }) => {

    await page.pause();




});
