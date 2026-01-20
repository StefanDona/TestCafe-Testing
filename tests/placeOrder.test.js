import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";
import Utils from "../helpers/utils";
import PlaceOrderPage from "../pages/PlaceOrderPage";

require("dotenv").config();

fixture`Place Order Tests`.beforeEach(async (t) => {
  await t.maximizeWindow();
});

test("Place an order as a registered user", async (t) => {
  const categoryId = await Utils.getCategoryIdByName("Pliers");
  const products = await Utils.getProductsByCategoryId(categoryId);
  const product = products[0];

  await LoginPage.navigateToLoginPage();
  await LoginPage.login();
  await t.navigateTo(`/product/${product.id}`);
  await t.click(PlaceOrderPage.addToCartButton);
  await t
    .expect(PlaceOrderPage.addToCartMessage.innerText)
    .eql("Product added to shopping cart.");
  await t.click(HeaderPage.cartButton);
  await t.expect(PlaceOrderPage.productQuantity.value).eql("1");
  await t
    .expect(PlaceOrderPage.productPrice.innerText)
    .eql(`$${product.price}`);
  await t.click(PlaceOrderPage.proceedToCheckoutButton);
  await t
    .expect(PlaceOrderPage.continueAsGuestConfirmation.innerText)
    .eql(
      "Hello Jack Howe, you are already logged in. You can proceed to checkout.",
    );
  await t.click(PlaceOrderPage.proceedToCheckoutButtonStep2);
  await PlaceOrderPage.fillBillingAddress();
  await PlaceOrderPage.fillPaymentDetails();
  await t.click(PlaceOrderPage.confirmButton);
  await t
    .expect(PlaceOrderPage.confirmationMessage.innerText)
    .eql("Payment was successful");
});

test("Place an order as a guest user", async (t) => {
  const categoryId = await Utils.getCategoryIdByName("Pliers");
  const products = await Utils.getProductsByCategoryId(categoryId);
  const product = products[0];

  await t.navigateTo(`product/${product.id}`);
  await t.click(PlaceOrderPage.addToCartButton);
  await t
    .expect(PlaceOrderPage.addToCartMessage.innerText)
    .eql("Product added to shopping cart.");
  await t.click(HeaderPage.cartButton);
  await t.expect(PlaceOrderPage.productQuantity.value).eql("1");
  await t
    .expect(PlaceOrderPage.productPrice.innerText)
    .eql(`$${product.price}`);
  await t.click(PlaceOrderPage.proceedToCheckoutButton);
  await t.click(PlaceOrderPage.continueAsGuestButton);
  await PlaceOrderPage.fillGuestDetails();
  await t.click(PlaceOrderPage.proceedToCheckoutButtonStep2);
  await PlaceOrderPage.fillBillingAddress();
  await PlaceOrderPage.fillPaymentDetails();
  await t.click(PlaceOrderPage.confirmButton);
  await t
    .expect(PlaceOrderPage.confirmationMessage.innerText)
    .eql("Payment was successful");
});
