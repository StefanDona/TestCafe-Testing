import { Selector, t } from "testcafe";
import testHelpers from "../helpers/testHelpers";
import testData from "../data/testData";

class LoginPage {
  constructor() {
    this.emailInput = Selector('#email');
    this.passwordInput = Selector('#pass');
    this.loginButton = Selector('.login.primary');
    this.errorMessage = Selector('.message-error');
    this.forgotPasswordLink = Selector('a').withText('Forgot Your Password?');
    this.createAccountButton = Selector('a').withText('Create an Account');
    this.pageTitle = Selector('.page-title').withText('Customer Login');
  }

  /**
   * Navigate to the login page
   */
  async navigateToLoginPage() {
    await t.navigateTo(`${testData.baseUrl}/customer/account/login/`);
    return testHelpers.waitForVisible(this.pageTitle, 'Login page did not load');
  }

  /**
   * Login with the provided credentials
   * @param {string} username - Email address
   * @param {string} password - Password
   */
  async login(username = testData.users.standard.email, password = testData.users.standard.password) {
    await testHelpers.waitForVisible(this.emailInput, 'Email input not found');
    await t
      .typeText(this.emailInput, username, { replace: true })
      .typeText(this.passwordInput, password, { replace: true })
      .click(this.loginButton);
  }

  /**
   * Login with invalid credentials
   */
  async loginWithInvalidCredentials() {
    return this.login(testData.users.invalid.email, testData.users.invalid.password);
  }

  /**
   * Check if login error message is displayed
   * @returns {Promise<boolean>} - True if error message exists
   */
  async isErrorMessageDisplayed() {
    return await this.errorMessage.exists;
  }

  /**
   * Get the error message text
   * @returns {Promise<string>} - Error message text
   */
  async getErrorMessage() {
    return await this.errorMessage.innerText;
  }

  /**
   * Click the "Forgot Password" link
   */
  async clickForgotPassword() {
    await t.click(this.forgotPasswordLink);
  }

  /**
   * Click the "Create an Account" button
   */
  async clickCreateAccount() {
    await t.click(this.createAccountButton);
  }
}

export default new LoginPage();
