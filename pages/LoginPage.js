import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.emailInput = Selector('#email');
    this.passwordInput = Selector('#pass');
    this.loginButton = Selector('.login.primary');
    this.errorMessage = Selector('.message-error');
  }

  async login(username = 'testmgt@getnada.com', password = 'strgPass12!') {
    await t.typeText(this.emailInput, username, { replace: true });
    await t.typeText(this.passwordInput, password, { replace: true });
    await t.click(this.loginButton);
  }
}

export default new LoginPage();
