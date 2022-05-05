Cypress.Commands.add("login", (username, password) => {
  cy.get("#txtUsername").type(username);
  cy.get("#txtPassword").type(password);
  cy.get("#btnLogin").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("#welcome").click();
  cy.get("#welcome-menu > :nth-child(1) > :nth-child(3) > a").click();
});
