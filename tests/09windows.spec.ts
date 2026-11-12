import { test, expect } from '@playwright/test';

test.skip( "Handling Tab", async ( { page, context } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForTimeout( 3000 );
    await page.pause();

    const newTabBtn = page.getByText( 'New Tab' );
    const popupWindowsBtn = page.getByText( 'Popup Windows' );
    const descriptionText = page.locator( 'p.description' );

    const [ newPage ] = await Promise.all(
        [
            context.waitForEvent( 'page' ),
            newTabBtn.click()
        ]
    );


    const newTabTitle = await newPage.title();
    console.log( 'New Tab Title is :: ', newTabTitle );

    expect.soft( newTabTitle ).toBe( 'SDET-QA Blog' );

    await page.bringToFront(); // To activate the desired tab

    console.log( await page.title() );

    await expect.soft( popupWindowsBtn ).toBeVisible();

    await newPage.bringToFront();

    await expect.soft( descriptionText ).toBeVisible();

    await newPage.close();

    await page.bringToFront();

    await page.close();


} );


test( "Handling Multiple windows", async ( { page, context } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForTimeout( 3000 );
    await page.pause();

    const newTabBtn = page.getByText( 'New Tab' );
    const popupWindowsBtn = page.getByText( 'Popup Windows' );
    const descriptionText = page.locator( 'p.description' );

    await Promise.all(
        [
            context.waitForEvent( 'page' ),
            popupWindowsBtn.click()
        ]
    );
    await page.waitForTimeout( 10000 );

    const pages = context.pages();
    console.log( pages.length );

    console.log( await pages[ 0 ].title() );

    const page0Title = await pages[ 0 ].title();
    console.log( 'Page 0 Title is :: ', page0Title );

    const page1Title = await pages[ 1 ].title();
    console.log( 'Page 1 Title is :: ', page1Title );

    const page2title = await pages[ 2 ].title();
    console.log( 'Page 2 Title is :: ', page2title );

    await pages[ 2 ].bringToFront();
    const searchBox = pages[ 2 ].locator( 'span.DocSearch-Button-Placeholder' );
    await expect.soft( searchBox ).toBeVisible();
    await pages[ 2 ].close();

    await pages[ 1 ].bringToFront();

    const navBar = pages[ 1 ].locator( 'a.navbar-brand' );
    await expect.soft( navBar ).toBeVisible();
    await pages[ 1 ].close();

    await pages[ 0 ].bringToFront();
    await expect.soft( newTabBtn ).toBeVisible();
    await pages[ 0 ].close();


} );