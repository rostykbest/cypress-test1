describe("add user", () => {
  it("should create a user", () => {
    cy.visit("/pages/tables/smart-table");

    cy.get("a.ng2-smart-action-add-add").should("be.visible").click();
    cy.get('input[ng-reflect-name="id"]').type("999");

    cy.get("a.ng2-smart-action-add-add")
      .should("be.visible")
      .click()
      .type("999");

    cy.get('input[ng-reflect-name="firstName"]')
      .should("be.visible")
      .click()
      .type("Ross");

    cy.get('input[ng-reflect-name="lastName"]')
      .should("be.visible")
      .click()
      .type("Geller");
    cy.get('input[ng-reflect-name="username"]')
      .should("be.visible")
      .click()
      .type("rossgeller");
    cy.get('input[ng-reflect-name="email"]')
      .should("be.visible")
      .click()
      .type("rossgeller999@gmail.com");
    cy.get('input[ng-reflect-name="age"]')
      .should("be.visible")
      .click()
      .type("25");
    cy.get("a.ng2-smart-action-add-create").should("be.visible").click();

    // should check if the values are there

    cy.get("table tbody tr.ng-star-inserted td")
      .filter(
        ':contains("999"), :contains("Ross"), :contains("Geller"), :contains("rossgeller"), :contains("rossgeller999@gmail.com"), :contains("24")'
      )
      .should("have.length.gt", 0, { timeout: 10000 })
      .last()
      .parent()
      .find("a.ng2-smart-action-edit-edit")
      .click();
  });
});

// should edit the values and save
