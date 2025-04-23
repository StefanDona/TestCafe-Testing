import RegisterPage from "../pages/RegisterPage";
import HeaderPage from "../pages/HeaderPage";
import Chance from "chance";

var chance = new Chance();


fixture`Register Test Suite`
    .page`https://magento.softwaretestingboard.com/`
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    });

test("User Registration", async (t) => {
    const password = "zw*25#P$(S(5~PGE"
    await t.click(HeaderPage.createAccountButton);
    await t.typeText(RegisterPage.firstName, chance.first(), { replace: true });
    await t.typeText(RegisterPage.lastName, chance.last(), { replace: true });
    await t.typeText(RegisterPage.email, chance.email(), { replace: true });
    await t.typeText(RegisterPage.psw, password, { replace: true });
    await t.typeText(RegisterPage.pswConfirmation, password, { replace: true });
    await t.click(RegisterPage.registerBtn);
    await t.expect(RegisterPage.confirmationMessage.innerText).contains("Thank you for registering with Main Website Store.", "Registration failed or confirmation message not found.");
});
