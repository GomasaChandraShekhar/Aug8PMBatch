import { test, expect, type Locator } from '@playwright/test';

test( "Screenshot", async ( { page } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForLoadState( 'domcontentloaded' );
    // await page.waitForTimeout(5000);
    await page.pause();

    const ATPractice = page.locator( 'div#header-inner' );

    // await ATPractice.screenshot({path: './screenshots/ATPractice.png'});
    // await page.screenshot({path: './screenshots/PartialPage.png'})
    await page.screenshot({path: './screenshots/FullPage.png', fullPage: true})

    expect.soft(await page.screenshot({path: 'PartialPage.png'}))
                    .toMatchSnapshot({ path: './screenshots/PartialPage.png'});

    expect.soft(await page.screenshot({path: 'FullPage.png', fullPage: true}))
                    .toMatchSnapshot({ path: './screenshots/FullPage.png'});


    await page.close();
});