import { Selector } from "testcafe";

class RegisterPage {
  constructor() {
    this.firstName = Selector('#firstname');
    this.lastName = Selector('#lastname');
    this.email = Selector('#email_address');
    this.psw = Selector('#password');
    this.pswConfirmation = Selector('#password-confirmation');
    this.registerBtn = Selector('.action.submit.primary');
    this.confirmationMessage = Selector(`div[data-bind*='html']`);
    this.firstNameError = Selector('#firstname-error');
    this.lastNameError = Selector('#lastname-error');
    this.emailError = Selector('#email_address-error');
    this.passwordError = Selector('#password-error');
    this.passwordMatchError = Selector('#password-confirmation-error');
  }
}

export default new RegisterPage();