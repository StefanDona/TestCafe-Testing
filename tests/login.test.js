import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";
import testData from "../data/testData";
import testHelpers from "../helpers/testHelpers";

fixture`Authentication Tests`
    .page`${testData.baseUrl}`    .beforeEach(async (t) => {
        await t.maximizeWindow();
        // Ensure we start from a logged-out state
        if (await HeaderPage.myAccountDropdown.exists) {
            await t.click(HeaderPage.myAccountDropdown);
            if (await HeaderPage.logoutButton.exists) {
                await t.click(HeaderPage.logoutButton);
                await t.expect(HeaderPage.signInButton.exists).ok('Failed to log out before test');
            }
        }
    })

test('Login with valid credentials', async (t) => {
    // Navigate to login page
    await LoginPage.navigateToLoginPage();
    
    // Login with valid credentials from test data
    await LoginPage.login(
        testData.users.standard.email,
        testData.users.standard.password
    );
    
    // Verify user is logged in
    await testHelpers.waitForVisible(
        HeaderPage.myAccountButton, 
        'Login failed - My Account button not found'
    );
    
    // Additional verification - check welcome message exists
    await t.expect(HeaderPage.welcomeMessage.exists)
        .ok('Welcome message not displayed after login');
});

test('Login with invalid credentials displays error message', async (t) => {
    // Navigate to login page
    await LoginPage.navigateToLoginPage();
    
    // Login with invalid credentials from test data
    await LoginPage.login(
        testData.users.invalid.email,
        testData.users.invalid.password
    );
    
    // Verify error message is displayed
    await testHelpers.waitForVisible(
        LoginPage.errorMessage, 
        'Error message not displayed after invalid login'
    );
    
    // Verify error message text
    await t.expect(LoginPage.errorMessage.innerText)
        .contains('The account sign-in was incorrect', 'Unexpected error message text');
    
    // Verify user is not logged in
    await t.expect(HeaderPage.signInButton.exists).ok('Sign In button should still be present');
});

test('Login and logout successfully', async (t) => {
    // Navigate to login page
    await LoginPage.navigateToLoginPage();
    
    // Login with valid credentials
    await LoginPage.login();
    
    // Verify successful login
    await testHelpers.waitForVisible(
        HeaderPage.myAccountButton, 
        'Login failed - My Account button not found'
    );
    
    // Perform logout
    await t.click(HeaderPage.myAccountDropdown);
    await testHelpers.waitForVisible(
        HeaderPage.logoutButton, 
        'Logout button not found in dropdown'
    );
    await t.click(HeaderPage.logoutButton);
    
    // Verify successful logout
    await testHelpers.waitForVisible(
        HeaderPage.signInButton, 
        'Logout failed - Sign In button not found after logout'
    );
    
    // Double-check user is logged out
    await t.expect(HeaderPage.myAccountButton.exists).notOk('My Account button should not be visible after logout');
});

test('Password is required for login', async (t) => {
    // Navigate to login page
    await LoginPage.navigateToLoginPage();
    
    // Enter only email, leave password blank
    await t
        .typeText(LoginPage.emailInput, testData.users.standard.email, { replace: true })
        .click(LoginPage.loginButton);
    
    // Verify validation message using a selector created properly
    const passwordError = LoginPage.passwordInput.sibling('#pass-error');
    await testHelpers.waitForVisible(
        passwordError, 
        'Password validation error not displayed'
    );
    
    // Verify error message text
    await t.expect(passwordError.innerText)
        .contains('This is a required field', 'Unexpected validation message');
});
