# 📝 Summary Report

---

## Approach

The test automation framework was developed using Cypress, with best practices like Page Objects, custom commands, and dynamic data generation using Faker.js.

Test cases were divided into:
- Form validation
- Radio button validation
- Checkbox tree manipulation
- Alerts and confirmation boxes
- Browser window management

---

## Tool/Framework Selection

- **Cypress**: Chosen for its strong support for modern web apps and simple syntax.
- **Faker.js**: Used to generate random dynamic test data.
- **JavaScript (ES6)**: Used for custom scripting and commands.

---

## Key Insights and Challenges

- Handling browser new tabs/windows required Cypress workarounds since native support is limited.
- Dynamic selectors were handled efficiently using Page Objects and Commands to maximize code reusability.
- Best practices such as Arrange / Act / Assert pattern were applied consistently to improve readability and structure.

---

## Conclusion

The project provides a scalable and maintainable test framework ready for integration into CI/CD pipelines