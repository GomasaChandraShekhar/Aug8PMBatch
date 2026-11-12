import { test, expect, type Locator } from '@playwright/test';

test("Handling Click", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.waitForTimeout(2000);
    // await page.pause();

    const emailField: Locator = page.locator('input#userEmail');
    const paswdField: Locator = page.locator('input#userPassword');
    const loginButton: Locator = page.getByRole('button', { name: 'Login' });
    const signOutButton: Locator = page.getByRole('button', { name: 'Sign Out' });
    const ordersButton: Locator = page.locator('button[routerlink*="myorders"]');
    const cartButton: Locator = page.locator('button[routerlink*="cart"]');
    const homeButton: Locator = page.locator('button[routerlink="/dashboard/"]');
    const goBackShopBtn: Locator = page.getByText('Go Back to Shop');
    const goBackCartBtn: Locator = page.getByText('Go Back to Cart');

    await expect.soft(loginButton, 'Login button shoulbe visible, So I am in Login Page').toBeVisible();

    await emailField.fill('gomasachandrashekhar@gmail.com');
    await paswdField.fill('Gomasa@1988');
    await loginButton.click();

    await expect.soft(signOutButton, 'Sign out button should be visible, So I am in Home page').toBeVisible();

    await ordersButton.click({ button: 'left' });
    await expect.soft(goBackCartBtn).toBeVisible();

    await goBackShopBtn.click({ button: 'right' });
    await goBackShopBtn.click({ button: 'left', delay: 200 });
    await cartButton.click({ button: 'middle' });

    await signOutButton.click();
    await expect.soft(loginButton, 'Login button shoulbe visible, So I am in Login Page').toBeVisible();

    await page.close();

});


