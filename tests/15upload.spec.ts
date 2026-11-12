import { test, expect } from '@playwright/test';

test( "File upload", async ( { page } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause();

const singleFile = page.locator('input#singleFileInput');
const SingleFileBtn = page.getByText('Upload Single File');
const singleFileStatus = page.locator('p#singleFileStatus');

const multipleFiles = page.locator('input#multipleFilesInput');
const multipleFilesBtn = page.getByText('Upload Multiple Files');
const multipleFilesStatus = page.locator('p#multipleFilesStatus');

// upload single file
await singleFile.setInputFiles('./screenshots/FullPage.png');
await SingleFileBtn.click();
expect.soft(await singleFileStatus.innerText()).toContain('FullPage.png');

// upload multiple files
await multipleFiles.setInputFiles(['./screenshots/FullPage.png', './screenshots/PartialPage.png']);
await multipleFilesBtn.click();
expect.soft(await multipleFilesStatus.innerText()).toContain('FullPage.png');
expect.soft(await multipleFilesStatus.innerText()).toContain('PartialPage.png');

// Remove uploaded files
await singleFile.setInputFiles([]); 
await multipleFiles.setInputFiles([]);


});