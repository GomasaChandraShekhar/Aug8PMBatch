import { type Page, expect } from '@playwright/test';
import PageObjects from './PageObjects';

export default class LoginPage extends PageObjects {

  constructor(page: Page) {
    super(page);
  }

  async goto(url: string) {
    await this.page.goto(url);
    await expect.soft(this.loginButton).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.userName.fill(email);
    await this.userPassword.fill(password);
    await this.loginButton.click();
  }

  async verifySignin() {
    await expect.soft(this.signOutButton).toBeVisible();
  }

  async signOut() {
    await this.signOutButton.click();
  }

  async verifySignOut() {
    await expect.soft(this.loginButton).toBeVisible();
  }


}