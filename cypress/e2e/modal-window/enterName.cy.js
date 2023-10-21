describe("Modal overlays page", () => {
  it("should display valid modal window", () => {
    cy.visit("/pages/modal-overlays/dialog");

    cy.get("button").contains("Enter Name").click();

    cy.get("nb-card input").should("be.visible");

    cy.get("nb-card-header").contains("Enter your name");

    cy.get('input[placeholder = "Name"]'.includes("Name"));

    cy.get("button").contains("Cancel");
    cy.get("button").contains("Submit");
  });
});
