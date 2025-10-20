import { Selector, t } from "testcafe";

class PlaceOrderPage {
  constructor() {
    this.addToCartButton = Selector("#btn-add-to-cart");
    this.increaseQuantityButton = Selector("#btn-increase-quantity");
    this.decreaseQuantityButton = Selector("#btn-decrease-quantity");
    this.addToCartMessage = Selector('div[role="alert"]');
    this.productTitle = Selector(".product-title");
    this.productQuantity = Selector(".form-control.quantity");
    this.productPrice = Selector('[data-test="product-price"]');
    this.totalPrice = Selector('[data-test="cart-total"]');
    this.proceedToCheckoutButton = Selector('button[data-test="proceed-1"]');
    this.signInOption = Selector(".login-container .nav-item").withText(
      "Sign In",
    );
    this.continueAsGuestButton = Selector(
      ".login-container .nav-item",
    ).withText("Continue as Guest");
    this.loginButton = Selector("#signin-tab .btnSubmit");
    this.guestEmailInput = Selector("#guest-email");
    this.guestFirstNameInput = Selector("#guest-first-name");
    this.guestLastNameInput = Selector("#guest-last-name");
    this.guestContinueButton = Selector("#guest-tab .btnSubmit");
    this.proceedToCheckoutButtonStep2 = Selector(
      'button[data-test="proceed-2-guest"]',
    );
    this.proceedToCheckoutButtonStep3 = Selector(
      'button[data-test="proceed-3"]',
    );
    this.continueAsGuestConfirmation = Selector("p.ng-star-inserted");
    this.paymentMethodDropdown = Selector("#payment-method");
    this.confirmButton = Selector('button[data-test="finish"]');
    this.paymentMethodDropdown = Selector("#payment-method");
    this.bankNameInput = Selector("#bank-name");
    this.accountNameInput = Selector("#account-name");
    this.accountNumberInput = Selector("#account-number");
    this.confirmationMessage = Selector(".alert-success");
  }
}
export default new PlaceOrderPage();
