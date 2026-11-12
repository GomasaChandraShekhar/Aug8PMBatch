import { test } from '@playwright/test';
import { PageObjectManager } from '../pages2/PageObjectManager';
import ReadFiles from '../utils/ReadFiles';

let orderId: string;
let pom: PageObjectManager;
const readFiles = new ReadFiles();

const filePath = './testdata/PlaceOrder.json';
const jsondata: any = readFiles.readJsonFile(filePath);

for (const { prodName, country } of jsondata) {

  test.describe(`E2E Purchase Flow`, { tag: ["@Smoke", '@Regression'] }, () => {

    test.beforeEach(async ({ page }) => {
      pom = new PageObjectManager(page);
      await pom.loginPage.goto(pom.constants.url);
      await pom.loginPage.login(pom.constants.email, pom.constants.password);

    });

    test(`Verify Place Order for ${prodName}`, async () => {
      await pom.placeOrderPage.addProdToCart(prodName);
      await pom.placeOrderPage.navigateToCart();
      await pom.placeOrderPage.placeOrder(country);
      orderId = await pom.placeOrderPage.getOrderId();
      await pom.placeOrderPage.clickOrderHistoryLink();
      await pom.placeOrderPage.verifyOrder(orderId);
      await pom.placeOrderPage.clickViewOrdersButton();
    });

    test.afterEach(async () => {
      await pom.loginPage.signOut();
    });

  });

}

