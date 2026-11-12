import { test, expect } from '@playwright/test';

test.skip( "Handling Simple Alert", async ( { page } ) => {

    await page.goto( "https://the-internet.herokuapp.com/javascript_alerts" );
    await page.waitForTimeout( 3000 );
    await page.pause();

    const simpleAlert = page.getByText( 'Click for JS Alert' );
    const result = page.locator( 'p#result' );

    page.on( 'dialog', async dialog => {
        const message = dialog.message();
        console.log( message );
        expect.soft( dialog.message() ).toBe( 'I am a JS Alert' );
        
        const type = dialog.type();
        console.log( type );
        expect.soft( dialog.type() ).toBe('alert');
        
        await dialog.accept();
    } );

    await simpleAlert.click();
    console.log( await result.innerText() );
    await page.close();

} );


test.skip( "Handling Confirmation Alert", async ( { page } ) => {

    await page.goto( "https://the-internet.herokuapp.com/javascript_alerts" );
    await page.waitForTimeout( 3000 );
    await page.pause();

    const simpleAlert = page.getByText( 'Click for JS Confirm' );
    const result = page.locator('p#result');

    page.on( 'dialog', async dialog => {
        const message = dialog.message();
        console.log( message );
        expect.soft( dialog.message() ).toBe( 'I am a JS Confirm' );

        const type = dialog.type();
        console.log( type );
        expect.soft( dialog.type() ).toBe( 'confirm' );

        // await dialog.accept();
        await dialog.dismiss();
    } );

    await simpleAlert.click();

    console.log(await result.innerText());
    await page.close();

} );


test( "Handling Prompt Alert", async ( { page } ) => {

    await page.goto( "https://the-internet.herokuapp.com/javascript_alerts" );
    await page.waitForTimeout( 3000 );
    await page.pause();

    const simpleAlert = page.getByText( 'Click for JS Prompt' );
    const result = page.locator( 'p#result' );

    page.on( 'dialog', async dialog => {
        const message = dialog.message();
        console.log( message );
        expect.soft( dialog.message() ).toBe( 'I am a JS prompt' );

        const type = dialog.type();
        console.log( type );
        expect.soft( dialog.type() ).toBe( 'prompt' );

        // await dialog.accept('Playwright');
        await dialog.dismiss();
    } );

    await simpleAlert.click();

    console.log( await result.innerText() );
    await page.close();

} );


