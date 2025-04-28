const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://demoqa.com', 
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
