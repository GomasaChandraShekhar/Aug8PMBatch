import { test, expect, type Locator } from '@playwright/test';

test( "Scroll", async ( { page } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause();

    const nameField = page.locator( 'input#name' );
    const source = page.locator( 'div#draggable' );
    const target = page.locator( 'div#droppable' );

    await target.scrollIntoViewIfNeeded();
    // await target.hover();

    // await page.mouse.wheel(0, 1500); // scroll page up
    // await page.waitForTimeout(2000);
    // await page.mouse.wheel( 0, -1000 ); // scroll page down

    // await source.evaluate( source => source.scrollTop += 500);


    await page.close();

} );