import RegisterPage from "../pages/RegisterPage";
import HeaderPage from "../pages/HeaderPage";
import AccountPage from "../pages/AccountPage";
import testData from "../data/testData";
import testHelpers from "../helpers/testHelpers";

fixture`User Registration Tests`
    .page`https://magento.softwaretestingboard.com/`    .beforeEach(async (t) => {
        await t.maximizeWindow();
        // Handle any native dialogs
        await t.setNativeDialogHandler(() => true);
    });

test('Create a new user account with valid data', async (t) => {
    // Generate random user data for test
    const userData = testData.generateUser();
    
    // Navigate to registration page
    await t.click(HeaderPage.createAccountButton);
    await testHelpers.waitForVisible(RegisterPage.firstName, 'Registration form not loaded');
    
    // Fill registration form
    await t
        .typeText(RegisterPage.firstName, userData.firstName, { replace: true })
        .typeText(RegisterPage.lastName, userData.lastName, { replace: true })
        .typeText(RegisterPage.email, userData.email, { replace: true })
        .typeText(RegisterPage.psw, userData.password, { replace: true })
        .typeText(RegisterPage.pswConfirmation, userData.password, { replace: true });
    
    // Submit registration form
    await t.click(RegisterPage.registerBtn);
    
    // Verify registration was successful
    await testHelpers.waitForVisible(
        RegisterPage.confirmationMessage, 
        'Registration success message not displayed'
    );
    
    // Check success message text
    await t.expect(RegisterPage.confirmationMessage.innerText)
        .contains("Thank you for registering with Main Website Store.", 
                 "Registration success message has incorrect text");
    
    // Verify user is logged in
    await t.expect(HeaderPage.myAccountButton.exists)
        .ok('User not logged in after registration');
});

test('Registration fails with invalid data', async (t) => {
    // Navigate to registration page
    await t.click(HeaderPage.createAccountButton);
    await testHelpers.waitForVisible(RegisterPage.firstName, 'Registration form not loaded');
    
    // Submit form without filling required fields
    await t.click(RegisterPage.registerBtn);
    
    // Verify validation error messages are displayed
    await t.expect(RegisterPage.firstNameError.exists)
        .ok('First name validation error missing');
    await t.expect(RegisterPage.lastNameError.exists)
        .ok('Last name validation error missing');
    await t.expect(RegisterPage.emailError.exists)
        .ok('Email validation error missing');
    await t.expect(RegisterPage.passwordError.exists)
        .ok('Password validation error missing');
});

test('Registration fails with password mismatch', async (t) => {
    // Generate user data with mismatched passwords
    const userData = testData.generateUser();
    const differentPassword = userData.password + '123';
    
    // Navigate to registration page
    await t.click(HeaderPage.createAccountButton);
    await testHelpers.waitForVisible(RegisterPage.firstName, 'Registration form not loaded');
    
    // Fill form with mismatched passwords
    await t
        .typeText(RegisterPage.firstName, userData.firstName, { replace: true })
        .typeText(RegisterPage.lastName, userData.lastName, { replace: true })
        .typeText(RegisterPage.email, userData.email, { replace: true })
        .typeText(RegisterPage.psw, userData.password, { replace: true })
        .typeText(RegisterPage.pswConfirmation, differentPassword, { replace: true })
        .click(RegisterPage.registerBtn);
    
    // Verify password match validation error
    await t.expect(RegisterPage.passwordMatchError.exists)
        .ok('Password match validation error missing');
});
