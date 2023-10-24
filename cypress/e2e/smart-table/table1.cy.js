describe("add user", () => {
  it("should create and check the user", () => {
    cy.visit("/pages/tables/smart-table");
    cy.get("a.ng2-smart-action-add-add").should("be.visible").click();
    cy.get("custom-input-class").type("999");
  });
});
