import { test, expect, type Locator } from '@playwright/test';

test( "Handling SIngle Frames", async ( { page } ) => {

    await page.goto( "https://the-internet.herokuapp.com/iframe" );
    await page.waitForLoadState( 'domcontentloaded' );
    // await page.pause();

    const frame = page.frameLocator( 'iframe#mce_0_ifr' );

    const data = await frame.locator( 'body#tinymce p' ).innerText();
    console.log( data );
    // await page.locator('div.abcgdf').click();
    await page.close();

} );


test( "Handling Nested Frames", async ( { page } ) => {

    await page.goto( "https://the-internet.herokuapp.com/nested_frames" );
    await page.waitForLoadState( 'domcontentloaded' );
    // await page.pause();

    const frame = page.frame( { url: 'https://the-internet.herokuapp.com/frame_top' } );
    // const frame = page.frame( { name: 'frame-top' } );
    // const frame = page.frame( 'frame-top' );

    const frames = frame?.childFrames();
    console.log( frames?.length ); // 3

    const leftText = await frames?.at( 0 )?.getByText( 'LEFT' ).innerText();
    console.log( leftText );

    const middleText = await frames?.at( 1 )?.locator( 'div#content' ).innerText();
    console.log( middleText );

    await page.locator('div.abcgdf').click();
    await page.close();

} );





