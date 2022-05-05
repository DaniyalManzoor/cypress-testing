/// <reference types="cypress"/>

describe("Test Orange HRM website", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login the website", async () => {
    //getValue from Fixture Json
    const { username, password } = await cy.fixture("example");

    //Custom Command
    cy.login(username, password);

    cy.get("h1").should("have.text", "Dashboard");

    cy.contains("Invalid Credentials").should("not.exist");

    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/index.php/dashboard"
    );
    cy.logout();
  });

  it.skip("should not login in the website", () => {
    cy.login("admin", "admin13");

    cy.get("#spanMessage").should("have.text", "Invalid credentials");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials"
    );
  });
});
