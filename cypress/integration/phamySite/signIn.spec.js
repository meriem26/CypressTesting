describe("Sign in", function() {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("should contain an email field", () => {
    cy.get(`[name ="email"]`).should("be.visible");
  });

  it("should contain a password field", () => {
    cy.get(`[name ="password"]`).should("be.visible");
  });
  it("should take you to the home page if logged in successfully", () => {
    cy.get(`[name ="email"]`).type("meriem@cyf.org");
    cy.get(`[name ="password"]`).type("password");
    cy.get(".form > button")
      .contains("Login")
      .click();
    cy.contains("Logout").should("be.visible");
    cy.contains("My Profile").should("be.visible");
  });
  it("should return an error message if entered the wrong details", () => {
    cy.get(`[name ="email"]`).type("meriem@cyf.org");
    cy.get(`[name ="password"]`).type("wrong password");
    cy.get(".form > button")
      .contains("Login")
      .click();
    cy.contains("Wrong Info. Try Again").should("be.visible");
    cy.url().should("contain","/login");
  });
});
