import { test, expect, type Locator } from '@playwright/test';

test( "Mouse Actions", async ( { page } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForLoadState( 'domcontentloaded' );
    await page.pause();

    const blogLink = page.getByRole( 'link', { name: 'Blog' } );
    const ppLink = page.getByRole( 'link', { name: 'PlaywrightPractice' } );
    const startBtn = page.getByText( 'START' );
    const nameField = page.locator( 'input#name' );
    const source = page.locator( 'div#draggable' );
    const target = page.locator( 'div#droppable' );

    await blogLink.first().hover();
    await page.waitForTimeout(2000);
    await ppLink.hover();

    await ppLink.click( { button: 'right' } );

    await nameField.fill('Playwright');
    await nameField.dblclick();

    await source.scrollIntoViewIfNeeded();
    await source.dragTo(target);
    


    await page.close();

} );