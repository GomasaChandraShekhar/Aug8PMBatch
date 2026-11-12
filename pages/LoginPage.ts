import { type Page, expect, type Locator } from '@playwright/test';
import PwUtils from '../utils/PwUtils';

const pwUtils = new PwUtils();

export default class LoginPage extends PwUtils {

  readonly page: Page;
  readonly userName: Locator;
  readonly userPassword: Locator;
  readonly loginButton: Locator;
  readonly signOutButton: Locator;

  constructor(page: Page) {
    super();
    this.page = page;
    this.userName = this.page.locator('#userEmail');
    this.userPassword = this.page.locator('#userPassword');
    this.loginButton = this.page.locator('#login');
    this.signOutButton = this.page.getByRole('button', { name: 'Sign Out', exact: true });
  }

  async goto(url: string) {
    await this.page.goto(url);
    await pwUtils.toBeVisible(this.loginButton);
  }

  async login(email: string, password: string) {
    await pwUtils.fill(this.userName, email);
    await pwUtils.fill(this.userPassword, password);
    await pwUtils.click(this.loginButton);
  }

  async verifySignin() {
    await pwUtils.toBeVisible(this.signOutButton);
  }

  async signOut() {
    await pwUtils.click(this.signOutButton);
  }

  async verifySignOut() {
    await pwUtils.toBeVisible(this.loginButton);
  }


}