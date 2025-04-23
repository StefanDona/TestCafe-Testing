import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";


fixture`Login Page Tests`
    .page`https://magento.softwaretestingboard.com/`
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    });

test("Login with invalid credentials", async (t) => {
    await t.click(HeaderPage.signInButton);
    await LoginPage.login("invalidUser@test.com", "invalidPassword");
    await t.expect(LoginPage.errorMessage.exists).ok("Error message is not displayed");
});

test("Login with valid credentials", async (t) => {
    await t.click(HeaderPage.signInButton);
    await LoginPage.login();
    await t.expect(HeaderPage.myAccountButton.exists).ok("Login failed or My Account button not found");
});

test("Logout", async (t) => {
    await t.click(HeaderPage.signInButton);
    await LoginPage.login();
    await t.click(HeaderPage.myAccountDropdown);
    await t.click(HeaderPage.logoutButton);
    await t.expect(HeaderPage.signInButton.exists).ok("Logout failed or Sign In button not found");
    await t.expect(HeaderPage.myAccountButton.exists).notOk("My Account button should not be visible after logout");
});  
