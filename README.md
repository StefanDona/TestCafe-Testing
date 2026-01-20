# 🛒 E2E Testing Suite for eCommerce Platform

Automated end-to-end testing suite for an eCommerce store using TestCafe and the Page Object Model (POM) pattern.

## 📋 Overview

A comprehensive End-to-End (E2E) automated testing suite for the **Practice Software Testing** eCommerce platform ([https://practicesoftwaretesting.com](https://practicesoftwaretesting.com)). This project is built using **TestCafe** framework with **JavaScript** and follows the **Page Object Model (POM)** design pattern to ensure maintainability, scalability, and code reusability.

---

## 🚀 Tech Stack

- **TestCafe** (v3.7.2) - Modern E2E testing framework
- **JavaScript (ES6+)** - Programming language
- **Page Object Model (POM)** - Design pattern for better test structure
- **dotenv** - Environment variable management
- **JUnit Reporter** - XML test reports
- **HTML Reporter** - Human-readable test reports
- **Chance.js** - Random data generation for tests

---

## 📦 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, or Edge)

---

## ⚙️ Environment Setup

### 🔐 Important: Secure Configuration

This project uses environment variables to store sensitive data such as credentials. **Never commit your `.env` file to version control.**

### Steps:

1. Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

2. Add your environment variables (use the template below):
   ```env
   # Test User Credentials
   TEST_EMAIL=your-test-email@example.com
   TEST_PASSWORD=your-secure-password
   
   # Base URL (Optional - already configured in scripts)
   BASE_URL=https://practicesoftwaretesting.com
   ```

3. **Verify** that `.env` is listed in your `.gitignore` file (it should be).

---

## 📥 Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <your-repository-url>
cd TESTCAFE-TESTING

# Install dependencies
npm install
```

---

## 🧪 Running Tests

### Run All Tests (Headless Mode)
```bash
npm run test:headless
```

### Run All Tests (Headed Mode - Chrome)
```bash
npm run test:headed
```

### Run Specific Test File
```bash
# Run login tests
npx testcafe chrome tests/login.test.js

# Run catalog tests
npx testcafe chrome tests/catalog.test.js

# Run place order tests
npx testcafe chrome tests/placeOrder.test.js

# Run register tests
npx testcafe chrome tests/register.test.js
```

### Run Tests on Specific Browsers
```bash
# Chrome
npx testcafe chrome tests

# Firefox
npx testcafe firefox tests

# Edge
npx testcafe edge tests

# Multiple browsers
npx testcafe chrome,firefox tests
```

### Generate HTML Report
```bash
npm run test:html
```

---

## 📂 Project Structure

```
TESTCAFE-TESTING/
├── tests/                      # Test specifications
│   ├── catalog.test.js         # Product catalog tests
│   ├── login.test.js           # User authentication tests
│   ├── placeOrder.test.js      # Order placement tests
│   └── register.test.js        # User registration tests
├── pages/                      # Page Object Model classes
│   ├── CatalogPage.js          # Catalog page selectors & methods
│   ├── HeaderPage.js           # Header component selectors
│   ├── LoginPage.js            # Login page selectors & methods
│   ├── PlaceOrderPage.js       # Checkout page selectors & methods
│   └── RegisterPage.js         # Registration page selectors & methods
├── helpers/                    # Utility functions
│   └── utils.js                # Reusable helper methods
├── reports/                    # Test execution reports
│   └── junit-report.xml        # JUnit XML report
├── screenshots/                # Test failure screenshots
│   └── [timestamp]/            # Organized by execution time
│       └── failedTests/        # Screenshots of failed tests
├── docs/                       # Additional documentation
├── .env                        # Environment variables (⚠️ DO NOT COMMIT)
├── .gitignore                  # Git ignore rules
├── .testcaferc.js              # TestCafe configuration
├── package.json                # Project dependencies & scripts
└── README.md                   # This file
```

---

## 📊 Test Reporting

### JUnit Reports
After test execution, JUnit XML reports are generated in the `reports/` directory:

```
reports/junit-report.xml
```

These reports can be integrated with CI/CD tools like Jenkins, GitLab CI, or GitHub Actions.

### HTML Reports
Generate human-readable HTML reports:

```bash
npm run test:html
```

Reports will be saved in `results/output.html`.

### Failure Screenshots
When tests fail, screenshots are automatically captured and saved in:

```
screenshots/[timestamp]/failedTests/[test-name]/
```

---

## 🛠️ Code Quality

### Prettier Configuration
This project uses Prettier for consistent code formatting.

```bash
# Check code formatting
npm run prettier:check

# Auto-fix formatting issues
npm run prettier:fix
```

---

## 🧩 Page Object Model (POM) Pattern

The project follows POM to separate test logic from page-specific code:

**Benefits:**
- ✅ Improved test maintainability
- ✅ Reduced code duplication
- ✅ Easier updates when UI changes
- ✅ Better readability

**Example:**
```javascript
// pages/LoginPage.js
import { Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.emailInput = Selector('[data-test="email"]');
        this.passwordInput = Selector('[data-test="password"]');
        this.loginButton = Selector('[data-test="login-submit"]');
    }
}

export default new LoginPage();
```

---

## 📝 Test Scenarios Covered

### 🔐 Authentication Tests (`login.test.js`)
- Valid user login
- Invalid credentials handling
- Login form validation

### 📦 Catalog Tests (`catalog.test.js`)
- Product search functionality
- Product filtering
- Product details display

### 🛍️ Order Tests (`placeOrder.test.js`)
- Add products to cart
- Checkout process
- Order confirmation

### 👤 Registration Tests (`register.test.js`)
- New user registration
- Form validation
- Duplicate email handling

---

## 🔒 Security Best Practices

⚠️ **CRITICAL REMINDERS:**

1. **Never commit `.env` file** - It contains sensitive credentials
2. **Use strong passwords** for test accounts
3. **Rotate credentials regularly** if using production-like environments
4. **Review `.gitignore`** before pushing to ensure sensitive files are excluded

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-test`)
3. Commit your changes (`git commit -m 'Add amazing test'`)
4. Push to the branch (`git push origin feature/amazing-test`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Stefan**

---

## 🐛 Troubleshooting

### Common Issues:

**Tests fail with "Cannot find module":**
```bash
npm install
```

**Environment variables not loading:**
- Ensure `.env` file exists in the root directory
- Check that `require('dotenv').config()` is called at the top of test files

**Browser not launching:**
- Update TestCafe: `npm install testcafe@latest`
- Verify browser is installed on your system

---

## 📚 Additional Resources

- [TestCafe Documentation](https://testcafe.io/documentation)
- [Page Object Model Pattern](https://testcafe.io/documentation/402826/guides/concepts/page-model)
- [Practice Software Testing Site](https://practicesoftwaretesting.com)

---

**Happy Testing! 🚀**
