import { test, expect } from '@playwright/test';

test( "File Download", async ( { page } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/p/download-files_25.html" );
    await page.waitForLoadState( 'domcontentloaded' );
    // await page.pause();

const textBox = page.locator('textarea#inputText');
const generateTxt = page.locator('button#generateTxt');
const generatePdf = page.locator('button#generatePdf');
const txtDownloadLink = page.locator('a#txtDownloadLink');
const pdfDownloadLink = page.locator('a#pdfDownloadLink');

await textBox.fill('Sample data');
await generatePdf.click();

const [download] = await Promise.all(
[
    page.waitForEvent('download'),
    pdfDownloadLink.click()

]
);

// const fileName = download.suggestedFilename();

await download.saveAs(`./downloads/${download.suggestedFilename()}`);




});