import { Selector } from "testcafe";

class HeaderPage {
    constructor() {
        this.signInButton = Selector('.authorization-link a').withExactText('Sign In');
        this.createAccountButton = Selector('.header.links a').withExactText('Create an Account');
        this.myAccountButton = Selector('.greet .logged-in');
        this.myAccountDropdown = Selector('.customer-name button');
        this.logoutButton = Selector('.customer-menu .authorization-link a');
        this.welcomeMessage = Selector('.greet .logged-in').withText('Welcome, Automated Test!');
      }
}

export default new HeaderPage();