import { Selector, t } from "testcafe";
import testData from "../data/testData";

class LoginPage {
  constructor() {
    this.emailInput = Selector('#email');
    this.passwordInput = Selector('#password');
    this.loginButton = Selector('.btnSubmit');
    this.loginForm = Selector('.auth-container');
    this.myAccountPageTitle = Selector('[data-test="page-title"]');
    this.loginErrorMessage = Selector('[data-test="login-error"]');
  }

  async navigateToLoginPage() {
    await t.navigateTo(`/auth/login`);
    await t.expect(this.loginForm.exists).ok('Login form not found');
  }

  async login(username = testData.users.customer.email, password = testData.users.customer.password) {
    await t
      .typeText(this.emailInput, username, { replace: true })
      .typeText(this.passwordInput, password, { replace: true })
      .click(this.loginButton);
  }
}

export default new LoginPage();
