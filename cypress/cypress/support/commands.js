Cypress.Commands.add("login", function (email, password, rememberMe) {
  cy.visit("auth/login");

  cy.get("form input#input-email").type(email, { delay: 50 });
  cy.get("form input#input-password").type(password, { delay: 50 });

  if (rememberMe) {
    cy.get("form .custom-checkbox").click();
  }

  cy.get('form button[status="primary"]').click();
  cy.url().should("contain", "/pages");
});

//Cypress.Commands.add("addUser", function () {
//  cy.visit("pages/tables/smart-table");
//  cy.get("a.ng2-smart-action-add-add").click();
//  cy.get('input[placeholder="ID"]').type("999");
//});

Cypress.Commands.add("addUser", () => {
  // Make sure the URL is correct for your application
  cy.visit("/pages/tables/smart-table");

  // Wait for the page to load and the button to become visible
  //cy.get("a.ng2-smart-action-add-add").should("be.visible").click();
});