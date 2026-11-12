import { type Page } from '@playwright/test';
import LoginPage from "./LoginPage";
import PlaceOrderPage from "./PlaceOrderPage";
import Constants from '../testdata/Constants';

export default class PageObjectManager {

    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly placeOrderPage: PlaceOrderPage;
    readonly constants: Constants;


    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
        this.constants = new Constants();
    }


}


