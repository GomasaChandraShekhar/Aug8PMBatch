import { test, chromium, Browser, BrowserContext, Page, expect } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe("Grouping OrangeHRM Tests", async () => {

  test.beforeAll("BeforeAll", async () => {
    console.log("BeforeAll");
    browser = await chromium.launch();
  });

  test.afterAll("AfterAll", async () => {
    console.log("AfterAll");
    await browser.close();
  });

  test.beforeEach("BeforeEach", async () => {
    console.log('Before Each');
    context = await browser.newContext();
    page = await context.newPage();
  });

  test.afterEach("AfterEach", async () => {
    console.log('AfterEach');
    await page.close();
    await context.close();
  });

  test("Verify OrangeHRM Login Logout functionality", async () => {

    await test.step('Launch application', async () => {
      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      await page.waitForTimeout(3000);
    });

    await test.step('Login to application', async () => {
      await page.locator('//input[@name="username"]').fill('Admin');
      await page.locator('//input[@name="password"]').fill('admin123');
      await page.locator('//button[text()=" Login "]').click();
    });

    await test.step("Verify Logout OrangeHRM", async () => {
      await expect.soft(page.locator('span.oxd-userdropdown-tab')).toBeVisible();
      await page.locator('span.oxd-userdropdown-tab').click();
      await expect.soft(page.getByText('Logout')).toBeVisible();
      await page.getByText('Logout').click();
    });

  });

  test("Verify OrangeHRM Login, Home page and Logout functionality", async () => {

    await test.step('Launch application', async () => {
      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      await page.waitForTimeout(3000);
    });

    await test.step('Login to application', async () => {
      await page.locator('//input[@name="username"]').fill('Admin');
      await page.locator('//input[@name="password"]').fill('admin123');
      await page.locator('//button[text()=" Login "]').click();
    });

    await test.step("Verify OrangeHRM Home Page", async () => {
      await expect.soft(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
      await expect.soft(page.getByAltText('client brand banner')).toBeVisible();
      await expect.soft(page.locator('ul.oxd-main-menu')).toBeVisible();
    });

    await test.step("Verify Logout OrangeHRM", async () => {
      await expect.soft(page.locator('span.oxd-userdropdown-tab')).toBeVisible();
      await page.locator('span.oxd-userdropdown-tab').click();
      await expect.soft(page.getByText('Logout')).toBeVisible();
      await page.getByText('Logout').click();
    });

  });

});


/*

test("Verify Login OrangeHRM", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForTimeout(3000);

  await page.locator('//input[@name="username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[text()=" Login "]').click();

});

test("Verify OrangeHRM Home Page", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForTimeout(3000);

  await page.locator('//input[@name="username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[text()=" Login "]').click();

  await expect.soft(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
  await expect.soft(page.getByAltText('client brand banner')).toBeVisible();
  await expect.soft(page.locator('ul.oxd-main-menu')).toBeVisible();


});

test("Verify Logout OrangeHRM", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForTimeout(3000);

  await page.locator('//input[@name="username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[text()=" Login "]').click();

  await expect.soft(page.locator('span.oxd-userdropdown-tab')).toBeVisible();
  await page.locator('span.oxd-userdropdown-tab').click();
  await expect.soft(page.getByText('Logout')).toBeVisible();
  await page.getByText('Logout').click();

});
*/


