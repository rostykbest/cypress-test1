import { LoginPage } from "../../pageObjects/auth/LoginPage";

describe("Log in", () => {
  it("should login with valid credentials", () => {
    const loginPage = new LoginPage();

    loginPage.navigate();
    loginPage.login("ross@test.com", "qwerty123456", true);
    cy.url().should("contain", "/pages");
  });
});
