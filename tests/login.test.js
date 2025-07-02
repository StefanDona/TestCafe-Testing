import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";
import testData from "../data/testData";

fixture`Authentication Tests`
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    })

test('Login with valid credentials', async (t) => {
    await LoginPage.navigateToLoginPage();
    await LoginPage.login();
    await t.expect(LoginPage.myAccountPageTitle.innerText).eql('My account', 'Failed to navigate to My Account page after login');
});

test('Login with invalid credentials displays error message', async (t) => {
    await LoginPage.navigateToLoginPage();
    await LoginPage.login(
        testData.users.invalid.email,
        testData.users.invalid.password
    );

    await t.expect(LoginPage.loginErrorMessage.innerText).eql('Invalid email or password', 'Failed to display error message for invalid login');
});

test('Login and logout successfully', async (t) => {
    await LoginPage.navigateToLoginPage();
    await LoginPage.login();
    await t.click(HeaderPage.myAccountDropdown);
    await t.click(HeaderPage.logoutButton);
    await t.expect(HeaderPage.signInButton.exists).ok('Failed to log out, Sign In button not found');
});
