# Magento Demo Store Test Automation Framework

## Overview

This project demonstrates an automated testing framework for the Magento demo e-commerce site (https://magento.softwaretestingboard.com/) using TestCafe. While the complete project includes various e-commerce tests, the current focus is primarily on user authentication and registration processes.

## Project Structure

```
TESTCAFE-TESTING/
├── data/               # Test data
│   └── testData.js     # Centralized test data management
├── helpers/            # Helper functions and utilities
│   └── testHelpers.js  # Reusable helper functions
├── pages/              # Page Object Models
│   ├── AccountPage.js  # Account page interactions
│   ├── HeaderPage.js   # Header and navigation elements
│   ├── LoginPage.js    # Login page interactions
│   └── RegisterPage.js # Registration page interactions
├── tests/              # Test files
│   ├── login.test.js   # Authentication tests
│   └── register.test.js # Registration tests
├── screenshots/        # Test failure screenshots
├── .env                # Encrypted environment variables
├── .testcaferc.js      # TestCafe configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Best Practices Implemented

### 1. Page Object Model Design Pattern

- Separation of test logic from page implementation details
- Encapsulated page interactions with meaningful method names
- Reduced code duplication and improved maintenance

### 2. Test Data Management

- Centralized test data in dedicated modules
- Dynamic random data generation using Chance.js for unique test runs
- Intelligent date formatting for HTML date inputs (YYYY-MM-DD format)
- Encrypted environment variables for sensitive test credentials
- Separation of test data from test logic
- Support for both default random values and custom parameter overrides

### 3. Security Best Practices

- **Environment Variable Encryption**: Uses dotenvx for encrypting sensitive test data
- **Secure Credential Management**: Test credentials are encrypted and safely stored
- **Private Key Protection**: Decryption keys are kept separate and excluded from version control
- **Production-Ready Security**: Implements security practices suitable for CI/CD pipelines

### 4. Test Independence and Atomicity

- Each test is self-contained and independent
- Tests clean up after themselves (e.g., cart emptied after tests)
- Proper test isolation with beforeEach/afterEach hooks

### 5. Smart Waiting Strategies

- Custom wait helpers instead of hard-coded waits
- Waiting for specific conditions rather than arbitrary times
- Retry mechanisms for handling intermittent issues

### 6. Error Handling

- Descriptive error messages
- Screenshot capture on test failure
- Clear error feedback

### 7. Code Reusability

- Helper functions for common operations
- Shared test hooks
- DRY (Don't Repeat Yourself) principle applied throughout

### 8. Form Handling Best Practices

- **Native TestCafe Methods**: Uses TestCafe's built-in `typeText` method for reliable form interactions
- **Date Input Compatibility**: Automatically formats dates to YYYY-MM-DD for HTML date inputs
- **Cross-browser Compatibility**: Avoids DOM manipulation in favor of TestCafe's cross-browser APIs
- **Error Resilience**: Implements fallback strategies for different date input behaviors across browsers

## Test Cases

### Authentication Tests (login.test.js)

- Login with valid credentials using encrypted environment variables
- Login with invalid credentials and error message validation
- Logout functionality verification
- Password validation with secure credential handling

### Registration Tests (register.test.js)

- User registration with dynamically generated random data
- Date of birth handling with proper HTML date input formatting
- Registration validation errors
- Password mismatch validation
- Form field validation with realistic test data

## Setup and Installation

1. Clone the repository:

```
git clone <repository-url>
cd TESTCAFE-TESTING
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables:

```
# Create .env file with your test credentials
CUSTOMER_EMAIL=your_test_email@example.com
CUSTOMER_PASSWORD=your_password
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin_password
INVALID_EMAIL=invalid@example.com
INVALID_PASSWORD=wrongpassword
```

4. Encrypt environment variables (optional but recommended):

```
npx @dotenvx/dotenvx encrypt -f .env
```

5. Add .env.keys to .gitignore:

```
npx @dotenvx/dotenvx ext gitignore --pattern .env.keys
```

## Running Tests

Run all tests with encrypted environment variables:

```
npm run test:dev
```

Run tests for production environment:

```
npm run test:prod
```

Run tests in headless mode:

```
npm run test:headless
```

Run specific test file:

```
npx @dotenvx/dotenvx run -- npx testcafe chrome tests/login.test.js
```

Run tests with custom configuration:

```
npx @dotenvx/dotenvx run -- npx testcafe chrome tests/ --skip-js-errors --speed 0.7
```

## Test Configuration

The project uses `.testcaferc.js` for global TestCafe configuration:

- Browser settings
- Screenshot configuration
- Timeouts and speeds
- Error handling

## Environment Variable Management

### Security Features

- **Encryption**: Environment variables are encrypted using dotenvx for security
- **Automatic Decryption**: Variables are automatically decrypted when tests run with `dotenvx run`
- **Key Management**: Private decryption keys are stored in `.env.keys` (excluded from version control)
- **Safe Defaults**: All test scripts use encrypted environment variables by default

### Environment Files

- `.env`: Contains encrypted environment variables (safe to commit)
- `.env.keys`: Contains private decryption keys (DO NOT commit to version control)

### Adding New Environment Variables

1. Add the variable to `.env` file
2. Encrypt the file: `npx @dotenvx/dotenvx encrypt -f .env`
3. The variable will be available as `process.env.VARIABLE_NAME` in tests

## Dependencies

- **TestCafe**: End-to-end testing framework for reliable cross-browser testing
- **Chance**: Library for generating realistic random test data (names, addresses, emails, dates, etc.)
- **dotenv**: Environment variable loader for development
- **@dotenvx/dotenvx**: Advanced environment variable encryption and management

## Key Features

### Dynamic Data Generation

- **Realistic Test Data**: Uses Chance.js to generate realistic user data including names, addresses, phone numbers, and emails
- **Date Handling**: Intelligent date formatting that converts random birthdays to HTML-compatible YYYY-MM-DD format
- **Flexible Parameters**: All form filling methods accept custom parameters while providing sensible random defaults
- **Data Consistency**: Ensures generated data meets validation requirements for form fields

### Environment Variable Security

- **Encrypted Credentials**: All sensitive test data is encrypted using dotenvx
- **Automatic Decryption**: Environment variables are automatically decrypted during test execution
- **Secure Storage**: Private keys are stored separately and excluded from version control
- **CI/CD Ready**: Secure environment variable handling suitable for automated pipelines

## Contributing

When adding new tests or modifying existing ones, please follow these guidelines:

### Code Organization

1. Use the provided example template as a starting point for new test files
2. Use page object methods rather than direct element interactions
3. Add all test data to the central data module (testData.js)
4. Keep tests independent and atomic - no dependencies between test cases
5. Follow the existing file and folder structure

### Coding Standards

1. Use consistent naming conventions (camelCase for variables/methods, PascalCase for classes)
2. Include detailed JSDoc comments for functions and methods
3. Keep test files focused on a single feature or functionality
4. Use meaningful variable and function names
5. Format code consistently (indentation, spacing, etc.)

### Test Quality

1. Include descriptive assertions with clear error messages
2. Use smart waiting strategies instead of hard timeouts
3. Implement proper setup and teardown for each test
4. Add appropriate error handling for flaky interactions
5. Validate both positive and negative test scenarios
6. Leverage dynamic data generation for comprehensive test coverage
7. Ensure proper date formatting for HTML date inputs

## Future Improvements

- Add data-driven testing for more comprehensive test scenarios
- Enhance reporting with detailed test execution reports
- Implement parallel test execution for faster test runs
- Expand test coverage to include more user journeys and edge cases
