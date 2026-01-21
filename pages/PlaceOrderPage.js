import { Selector, t } from "testcafe";
import Chance from "chance";
import utils from "../helpers/utils";

const chance = new Chance();

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
      'button[data-test*="proceed-2"]',
    );
    this.proceedToCheckoutButtonStep3 = Selector(
      'button[data-test*="proceed-3"]',
    );
    this.continueAsGuestConfirmation = Selector("p.ng-star-inserted");

    this.billingAddressStret = Selector("form #street");
    this.billingAddressCity = Selector("form #city");
    this.billingAddressState = Selector("form #state");
    this.billingAddressCountry = Selector("form #country");
    this.billingAddressPostalCode = Selector("form #postal_code");

    this.paymentMethodDropdown = Selector("#payment-method");
    this.confirmButton = Selector('button[data-test="finish"]');
    this.paymentMethodDropdown = Selector("#payment-method");
    this.bankNameInput = Selector("#bank_name");
    this.accountNameInput = Selector("#account_name");
    this.accountNumberInput = Selector("#account_number");
    this.confirmationMessage = Selector(".alert-success");
  }

  async fillBillingAddress(
    street = chance.street(),
    city = chance.city(),
    state = chance.state(),
    country = chance.country(),
    postalCode = chance.zip(),
  ) {
    await t.typeText(this.billingAddressStret, street, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.billingAddressCity, city, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.billingAddressState, state, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.billingAddressCountry, country, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.billingAddressPostalCode, postalCode, {
      paste: true,
      replace: true,
    });
    await t.click(this.proceedToCheckoutButtonStep3);
  }

  async fillPaymentDetails(
    bankName = `${chance.word({ length: 8, capitalize: true })} Bank`,
    accountName = chance.name(),
    accountNumber = chance.string({ length: 10, pool: "0123456789" }),
  ) {
    await utils.selectOptionFromDropdown(
      this.paymentMethodDropdown,
      "Bank Transfer",
    );
    await t.typeText(this.bankNameInput, bankName, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.accountNameInput, accountName, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.accountNumberInput, accountNumber, {
      paste: true,
      replace: true,
    });
  }

  async fillGuestDetails(
    email = chance.email(),
    firstName = chance.first(),
    lastName = chance.last(),
  ) {
    await t.typeText(this.guestEmailInput, email, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.guestFirstNameInput, firstName, {
      paste: true,
      replace: true,
    });
    await t.typeText(this.guestLastNameInput, lastName, {
      paste: true,
      replace: true,
    });
    await t.click(this.guestContinueButton);
  }
}
export default new PlaceOrderPage();
