import { test, expect } from '@playwright/test';

test.skip("Single Frame handlling", async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const frame = page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' });
    const frame1 = page.frame('SingleFrame'); // name
    const frame2 = page.frameLocator('#singleframe'); // id

    const inputField = frame?.locator('input');
    await inputField?.fill('Data in url');
    console.log(await inputField?.inputValue());
    await inputField?.clear();

    const inputField1 = frame1?.locator('input');
    await inputField1?.fill('Data in name');
    console.log(await inputField1?.inputValue());
    await inputField1?.clear();

    const inputField2 = frame2?.locator('input');
    await inputField2?.fill('Data in id');
    console.log(await inputField2?.inputValue());
    await inputField2?.clear();

});

test("Multiple Frames handlling", async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const iframeLink = page.getByRole('link', { name: 'Iframe with in an Iframe' });
    await iframeLink.click();

    const outerFrame = page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' });

    const frames = outerFrame?.childFrames();

    const inputField = frames?.at(0)?.locator('input');

    await inputField?.fill('Data in url');
    console.log(await inputField?.inputValue());
    await inputField?.clear();


});









