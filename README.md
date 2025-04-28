
# Cypress Automation Project - Revelo 🚀

This project is a full end-to-end (E2E) automated test suite developed with Cypress to validate several functionalities of a web application.

## 📋 Project Overview

This automation covers critical scenarios such as:

- Form submission with required and optional fields
- Radio button selection and validation
- Checkbox tree navigation and selection
- Alerts and confirmation boxes validation
- Browser window management (new tabs and windows)

It follows best practices like:

- Organized folder structure (Page Objects and Commands separated)
- Dynamic test data generation using Faker
- Arrange / Act / Assert test pattern
- Custom Cypress Commands for reusability and maintainability

---

## 🛠️ Technologies Used

- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/)
- [JavaScript (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git https://github.com/RobertoLunardelli/Revelo-BIMM_Tech-Assessment.git
cd Revelo-BIMM_Tech-Assessment

```

### 2. Install Dependencies

```bash
npm install
npm install rimraf --save-dev
```

### 3. Open Cypress Test Runner

```bash
npx cypress open
```
Select a test to run manually.

### 4. Run Cypress Tests in Headless Mode

```bash
npm run test
```

---
📊 Test Report (Mochawesome)
After running npm run test, reports will be generated at:

```bash
/cypress/reports/mochawesome-report/mochawesome.html
```
To open the report manually:

Go to the folder /cypress/reports/mochawesome-report

Open the file mochawesome.html in your browser

## ✍️ Author

> Developed by [Roberto Monteiro Lunardelli](https://github.com/RobertoLunardelli)

---
