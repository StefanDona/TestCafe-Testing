# TestCafe Testing Project

Automated end-to-end testing suite for an eCommerce store using TestCafe and the Page Object Model (POM) pattern.

## 📋 Overview

This project contains automated tests for [Practice Software Testing](https://practicesoftwaretesting.com), an eCommerce application. The tests cover essential user flows including authentication, product catalog browsing, and order placement.

## 🏗️ Project Structure

```
TESTCAFE-TESTING/
├── tests/              # Test specifications
│   ├── catalog.test.js
│   ├── login.test.js
│   ├── placeOrder.test.js
│   └── register.test.js
├── pages/              # Page Object Model classes
│   ├── CatalogPage.js
│   ├── HeaderPage.js
│   ├── LoginPage.js
│   ├── PlaceOrderPage.js
│   └── RegisterPage.js
├── helpers/            # Utility functions
│   └── utils.js
├── reports/            # Test reports
│   └── junit-report.xml
├── screenshots/        # Test screenshots
├── docs/              # Documentation
└── package.json       # Project dependencies
```
### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/StefanDona/TESTCAFE-TESTING.git
cd TESTCAFE-TESTING
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your test credentials:
```env
EMAIL=your-test-email@example.com
PASSWORD=your-test-password
INVALID_EMAIL=invalid@example.com
INVALID_PASSWORD=wrongpassword
```

## 🧪 Running Tests

### Run all tests in headless mode
```bash
npm run test:headless
```

### Run all tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Generate HTML report
```bash
npm run test:html
```

### Run specific test file
```bash
npx testcafe chrome tests/login.test.js --base-url=https://practicesoftwaretesting.com
```

## 📝 Test Suites

### Authentication Tests (`login.test.js`)
- ✅ Login with valid credentials
- ✅ Login with invalid credentials
- ✅ Login and logout functionality

### Registration Tests (`register.test.js`)
- ✅ User registration flow
- ✅ Form validation

### Catalog Tests (`catalog.test.js`)
- ✅ Product browsing
- ✅ Product filtering
- ✅ Product search

### Order Placement Tests (`placeOrder.test.js`)
- ✅ Add products to cart
- ✅ Checkout process
- ✅ Order confirmation

## 🛠️ Technologies Used

- **TestCafe** (v3.7.2) - End-to-end testing framework
- **Chance.js** (v1.1.12) - Random data generation for tests
- **dotenv** (v17.2.0) - Environment variable management
- **Prettier** (v3.6.2) - Code formatting
- **TestCafe HTML Reporter** (v1.4.6) - HTML test reports
- **TestCafe JUnit Reporter** (v3.0.2) - JUnit XML reports

## 📊 Reports

Test reports are generated in the following locations:
- HTML reports: `results/output.html` (when using `npm run test:html`)
- JUnit XML reports: `reports/junit-report.xml`
- Screenshots: `screenshots/` directory (on test failures)

## 🎨 Code Formatting

### Check code formatting
```bash
npm run prettier:check
```

### Fix code formatting
```bash
npm run prettier:fix
```

## 📐 Page Object Model

This project follows the Page Object Model (POM) design pattern, which provides:
- **Maintainability**: Centralized element selectors and page interactions
- **Reusability**: Page methods can be used across multiple tests
- **Readability**: Tests are more readable and easier to understand

## 👤 Author

**Stefan**

## 🔗 Links

- [TestCafe Documentation](https://testcafe.io/documentation/402635/getting-started)
- [Practice Software Testing](https://practicesoftwaretesting.com)
- [Page Object Model Pattern](https://testcafe.io/documentation/402826/guides/concepts/page-model)

## 📝 Notes

- Tests are configured to run against `https://practicesoftwaretesting.com`
- Browser windows are maximized before each test
- Environment variables are used for sensitive test data
- Screenshots are automatically captured on test failures
