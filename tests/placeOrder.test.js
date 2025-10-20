import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";
import Utils from "../helpers/utils";
import PlaceOrderPage from "../pages/PlaceOrderPage";

require("dotenv").config();

fixture`Place Order Tests`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Place an order as a registered user", async (t) => {
  await LoginPage.navigateToLoginPage();
  await LoginPage.login();
  await t.navigateTo(
    "https://practicesoftwaretesting.com/product/01K806P9X6K02DDQ9651HTEKDD",
  );
  await t.click(PlaceOrderPage.addToCartButton);
  await t
    .expect(PlaceOrderPage.addToCartMessage.innerText)
    .eql("Product added to shopping cart.");
  await t.click(HeaderPage.cartButton);
  await t.expect(PlaceOrderPage.productQuantity.value).eql("1");
  await t.expect(PlaceOrderPage.productPrice.innerText).eql("$12.01");
  await t.click(PlaceOrderPage.proceedToCheckoutButton);
  await t
    .expect(PlaceOrderPage.continueAsGuestConfirmation.innerText)
    .eql(
      "Hello Jane Doe, you are already logged in. You can proceed to checkout.",
    );
  await t.click(PlaceOrderPage.proceedToCheckoutButtonStep2);
  await t.click(PlaceOrderPage.proceedToCheckoutButtonStep3);
  await Utils.selectOptionFromDropdown(
    PlaceOrderPage.paymentMethodDropdown,
    "Bank Transfer",
  );
});

test.only("Place an order as a guest user", async (t) => {
  await t.navigateTo(
    "https://practicesoftwaretesting.com/product/01K806P9X6K02DDQ9651HTEKDD",
  );
  await t.click(PlaceOrderPage.addToCartButton);
  await t
    .expect(PlaceOrderPage.addToCartMessage.innerText)
    .eql("Product added to shopping cart.");
  await t.click(HeaderPage.cartButton);
  await t.expect(PlaceOrderPage.productQuantity.value).eql("1");
  await t.expect(PlaceOrderPage.productPrice.innerText).eql("$12.01");
  await t.click(PlaceOrderPage.proceedToCheckoutButton);
});
