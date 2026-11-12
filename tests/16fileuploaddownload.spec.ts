import { test, expect } from '@playwright/test';

test('File upload Handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    const chooseOneFile = page.locator('#singleFileInput');
    const uploadSingleFile = page.getByRole('button', { name: 'Upload Single File', exact: true });
    const singleFileStatus = page.locator('#singleFileStatus');
    const multipleFilesInput = page.locator('#multipleFilesInput');
    const uploadMultiFile = page.getByRole('button', { name: 'Upload Multiple Files', exact: true });
    const multipleFilesStatus = page.locator('#multipleFilesStatus');

    // await page.pause();

    // Single File Upload
    await chooseOneFile.setInputFiles('./screenshots/submitBtn.jpg');
    await uploadSingleFile.click();
    await expect(singleFileStatus).toBeVisible();

    // Multiple Files Upload
    await multipleFilesInput.setInputFiles(['./screenshots/partialPage.jpg', './screenshots/fullPage.jpg']);
    await uploadMultiFile.click();
    await expect(multipleFilesStatus).toBeVisible();

});

test('File Download Handling', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.waitForLoadState('domcontentloaded');

    const downloadLink = page.getByRole('link', { name: 'Download1' });

    const [download] = await Promise.all(
        [
            page.waitForEvent('download'),
            await downloadLink.click()
        ]);

    await download.saveAs(`./screenshots/${download.suggestedFilename()}`);
});