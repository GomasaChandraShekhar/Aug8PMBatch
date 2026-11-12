import { test, expect } from '@playwright/test';
import PageObjectManager from '../pages/PageObjectManager';
import ReadFiles from '../utils/ReadFiles';

let poManager: PageObjectManager;
const readFiles: ReadFiles = new ReadFiles();
let orderId: string;
// const prodName = 'ADIDAS ORIGINAL';
// const country = 'India';

const loginData: any = readFiles.readJsonFile('./testdata/PlaceOrder.json');
// const loginData: any = readFiles.readCsvFile('./testdata/PlaceOrder.csv');
// const loginData: any = readFiles.readExcelFile('./testdata/PlaceOrder.xlsx');

for (const { prodName, country } of loginData) {

    test.describe(`Place Order for the product ${prodName}`, async function () {

        test.beforeEach(async ({ page }) => {
            poManager = new PageObjectManager(page);
            await poManager.loginPage.goto(poManager.constants.url);
            await poManager.loginPage.login(poManager.constants.email, poManager.constants.password);
            await poManager.loginPage.verifySignin();
        });

        test.afterEach(async ({ }) => {
            await poManager.loginPage.signOut();
            await poManager.loginPage.verifySignOut();
        });

        test(`Place Order for the product ${prodName} verify through Orders Button`, async ({ page }) => {

            test.step('Add prod to cart', async () => {
                await poManager.placeOrderPage.addProdToCart(prodName);
            });

            test.step('Navigate to cart page', async () => {
                await poManager.placeOrderPage.navigateToCart();
            });

            test.step('Place order', async () => {
                await poManager.placeOrderPage.placeOrder(country);
                orderId = await poManager.placeOrderPage.getOrderId();
            });

            test.step('Verify order details', async () => {
                await poManager.placeOrderPage.navigateToOrders();
                await poManager.placeOrderPage.viewOrder(orderId);
                await poManager.placeOrderPage.verifyOrderInSummaryPage(orderId);
                await poManager.placeOrderPage.clickViewOrdersButton();
            });

        });

        test(`Place Order for the product ${prodName} verify through Orders History Link`, async ({ page }) => {

            test.step('Add prod to cart', async () => {
                await poManager.placeOrderPage.addProdToCart(prodName);
            });

            test.step('Navigate to cart page', async () => {
                await poManager.placeOrderPage.navigateToCart();
            });

            test.step('Place order', async () => {
                await poManager.placeOrderPage.placeOrder(country);
                orderId = await poManager.placeOrderPage.getOrderId();
            });

            test.step('Verify order details', async () => {
                await poManager.placeOrderPage.clickOrderHistoryLink();
                await poManager.placeOrderPage.viewOrder(orderId);
                await poManager.placeOrderPage.verifyOrderInSummaryPage(orderId);
                await poManager.placeOrderPage.clickViewOrdersButton();
            });

        });

    });

}


