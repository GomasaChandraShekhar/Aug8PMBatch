import { test, expect } from '@playwright/test';
import PageObjectManager from '../pages/PageObjectManager';
import ReadFiles from '../utils/ReadFiles';

let poManager: PageObjectManager;
const readFiles: ReadFiles = new ReadFiles();;
let orderId: string;

// const loginData = [
//     ['IPHONE 13 PRO', 'Canada'],
//     ['ADIDAS ORIGINAL', 'India'],
//     ['ZARA COAT 3', 'Japan']
// ];

// const filePath = './testdata/PlaceOrder.json';
// const data = fs.readFileSync(filePath, 'utf-8');

const loginData: any = readFiles.readJsonFile('./testdata/PlaceOrder.json');
// const loginData: any = readFiles.readCsvFile('./testdata/PlaceOrder.csv');
// const loginData: any = readFiles.readExcelFile('./testdata/PlaceOrder.xlsx');

for (const { prodName, country } of loginData) {

    test.describe(`Place Order for the product ${prodName}`, async function () {

        test.beforeEach(async ({ page }) => {
            poManager = new PageObjectManager(page);
            await poManager.loginPage.goto(poManager.testData.url);
            await poManager.loginPage.login(poManager.testData.email, poManager.testData.password);
            await poManager.loginPage.verifySignin();
        });

        test(`Place Order for the product ${prodName} verify through Orders Page`, async ({ page }) => {
            await poManager.placeOrderPage.addProdToCart(prodName);
            await poManager.placeOrderPage.navigateToCart();
            await poManager.placeOrderPage.placeOrder(country);
            orderId = await poManager.placeOrderPage.getOrderId();
            await poManager.placeOrderPage.navigateToOrders();
            await poManager.placeOrderPage.viewOrder(orderId);
            await poManager.placeOrderPage.verifyOrderInSummaryPage(orderId);
            await poManager.placeOrderPage.clickViewOrdersButton();
        });

        // test(`Place Order for the product ${prodName} verify through Orders History Link`, async ({ page }) => {
        //     await poManager.placeOrderPage.addProdToCart(prodName);
        //     await poManager.placeOrderPage.navigateToCart();
        //     await poManager.placeOrderPage.placeOrder(country);
        //     orderId = await poManager.placeOrderPage.getOrderId();
        //     await poManager.placeOrderPage.clickOrderHistoryLink();
        //     await poManager.placeOrderPage.viewOrder(orderId);
        //     await poManager.placeOrderPage.verifyOrderInSummaryPage(orderId);
        //     await poManager.placeOrderPage.clickViewOrdersButton();
        // });

        test.afterEach(async () => {
            await poManager.loginPage.signOut();
            await poManager.loginPage.verifySignOut();
        });

    });

}


