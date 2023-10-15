import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    pageLoadTimeout: 5000,
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
