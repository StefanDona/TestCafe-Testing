import { Selector } from "testcafe";

class HeaderPage {
  constructor() {
    this.signInButton = Selector('.nav-item [data-test="nav-sign-in"]');
    this.createAccountButton = Selector('[data-test="register-link"]');
    this.myAccountButton = Selector(".greet .logged-in");
    this.myAccountDropdown = Selector(".nav-item #menu");
    this.logoutButton = Selector(".nav-item .dropdown-item").withExactText(
      "Sign out",
    );
    this.cartButton = Selector('.nav-item [data-test="nav-cart"]');
  }
}

export default new HeaderPage();
