import { test, expect } from '@playwright/test';

test( "Title1", async ( { page } ) => {

    await page.goto( "https://testautomationpractice.blogspot.com/" );
    await page.waitForTimeout( 3000 );
    await page.pause();

    const pagesLinks = await page.locator( 'ul.pagination a' ).all();
    const table = page.locator( 'table#productTable' );
    const headerCols = await table.locator( 'thead tr th' ).all();
    
    const rows = await table.locator('tbody tr').all();
    
    for ( const header of headerCols) {
        console.log(await header.innerText());
    }
    
    for ( const link of pagesLinks ) {
        await link.click();
        for (const row of rows){
            const cols = row.locator( 'td' );
            const prodName = await cols.nth( 1 ).innerText();
            if ( prodName == 'Tablet' || prodName == 'Digital Camera' ||
                prodName == 'Fitness Tracker' || prodName =='Soundbar'
            ) {
                await cols.nth( 3 ).locator( 'input' ).check();
                break;
            }
        }

    }

    await page.close();

} );