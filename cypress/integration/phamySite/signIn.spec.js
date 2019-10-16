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
});
