import { test, expect, Locator } from '@playwright/test';


test("Locatros Test", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.waitForLoadState('domcontentloaded');

    expect(page.url()).toContain('playwrightpractice');

    const userNameField = page.getByRole('textbox', { name: 'Username:' });

    const primaryActionButton = page.getByRole('button', { name: 'Primary Action' });
    const acceptTermsCheckbox = page.getByRole('checkbox', { name: 'Accept terms' });
    const homeLink = page.getByRole('link', { name: 'Home' });

    const submitFormButton: Locator = page.getByText('Submit Form');
    const listItem1Tex: Locator = page.getByText('List item 1');

    const emailAddressField: Locator = page.getByLabel('Email Address:');

    const fullName = page.getByPlaceholder('Enter your full name');

    const logoImg = page.getByAltText('logo image');

    const tooltip = page.getByTitle('Tooltip text');

    const editProfileBtn = page.getByTestId('edit-profile-btn');

    const passwordField = page.locator('input[placeholder="Enter Name"]');

    const passwordField1 = page.locator('css=input[placeholder="Enter Name"]');

    const passwordField2 = page.locator('css=#name');

    const passwordField3 = page.locator('css=form-control');

    const passwordField4 = page.locator('xpath=//input[@id="name"]');

    const passwordField5 = page.locator('//input[@id="name"]');





});














