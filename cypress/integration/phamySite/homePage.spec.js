describe("Home page", function() {
  beforeEach(() => {
    cy.visit("https://newscots-got-talent.herokuapp.com/");
  });

  it("should contain a title", () => {
    cy.get("h1.ui.blue.center.aligned.header strong").should(
      "contain.text",
      "New Scots Got"
    );
  });
  it("should contain a sign in button", () => {
    cy.contains("SIGN IN").should("be.visible");
  });
  it("should contain as applicant button", () => {
    cy.contains("REGISTER AS APPLICANT").should("be.visible");
  });
  it("should contain Register as a company button", () => {
    cy.contains("REGISTER AS COMPANY").should("be.visible");
  });
});
