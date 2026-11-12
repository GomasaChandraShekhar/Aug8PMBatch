import { test, chromium, expect } from '@playwright/test';

const coockieslist = [
    {
        name: '_ga',
        value: 'GA1.1.803696965.1793112175',
        domain: 'rahulshettyacademy',
        path: '/',
        httpOnly: true
    },
    {
        name: '_ga_NVJT9K1HZ2',
        value: 'GS2.1.s1793112174$o1$g1$t1793112201$j33$l0$h1904823415',
        domain: 'rahulshettyacademy',
        path: '/',
        httpOnly: true
    },
    {
        name: '_gcl_au',
        value: '1.1.522642828.1793112174.2102276960.1793198799.1793198811.2097207766.1793198769.1793198811',
        domain: 'rahulshettyacademy',
        path: '/',
        httpOnly: true
    }
]

test.skip('Handling Coockies', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1530, height: 690 },
        ignoreHTTPSErrors: true
    }
    );

    await context.addCookies(coockieslist);
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.waitForLoadState('domcontentloaded');

    const coockies = await context.cookies();

    for (let index = 0; index < coockies.length; index++) {
        console.log(coockies[index].name);
        console.log(coockies[index].value);
        console.log(coockies[index].domain);
    }

    expect(coockies[0].name).toBe(coockieslist[0].name);
    expect(coockies[1].name).toBe(coockieslist[1].name);
    expect(coockies[2].name).toBe(coockieslist[2].name);


});

test('Handling Proxy', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1530, height: 690 },
        ignoreHTTPSErrors: true,
        proxy: {
            server: 'http://myproxy.com:3128',
            bypass: 'bypass',
            username: 'MyUsername',
            password: 'mypassword'
        }
    }
    );

    const page = await context.newPage();

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForLoadState('domcontentloaded');

});





