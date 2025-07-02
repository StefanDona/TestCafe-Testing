import RegisterPage from "../pages/RegisterPage";
import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";

fixture`User Registration Tests`
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    });

test('Create a new user account with valid data', async (t) => {
    await t.click(HeaderPage.signInButton);
    await t.click(HeaderPage.createAccountButton);
    await RegisterPage.fillRegisterForm();
    await t.expect(LoginPage.loginForm.exists).ok('Login form not found');

});
