import { Selector, t } from "testcafe";

require("dotenv").config();

class LoginPage {
  constructor() {
    this.emailInput = Selector("#email");
    this.passwordInput = Selector("#password");
    this.loginButton = Selector(".btnSubmit");
    this.loginForm = Selector(".auth-container");
    this.myAccountPageTitle = Selector('[data-test="page-title"]');
    this.loginErrorMessage = Selector('[data-test="login-error"]');
  }

  async navigateToLoginPage() {
    await t.navigateTo(`/auth/login`);
    await t.expect(this.loginForm.exists).ok("Login form not found");
  }

  async login(
    username = process.env.CUSTOMER_EMAIL,
    password = process.env.CUSTOMER_PASSWORD,
  ) {
    await t
      .typeText(this.emailInput, username, { paste: true, replace: true })
      .typeText(this.passwordInput, password, { paste: true, replace: true })
      .click(this.loginButton);
  }
}

export default new LoginPage();
