describe("Home page", function() {
  it("Should be display the home page", () => {
    beforeEach(() => {
      cy.visit("https://newscots-got-talent.herokuapp.com/");
    });
  });
  it("Contain a title", () => {
    cy.contains("New Scots Got Talent");
  });
  it("Should contain a sign in button", () => {
    cy.contains("SIGN IN").click();
    cy.get(".content").find();
  });
  it("Should contain as applicant button", () => {
    cy.contains("REGISTER AS APPLICANT").click();
  });
  it("Should contain Register as a company button", () => {
    cy.contains("REGISTER AS COMPANY").click();
  });
});
describe("Sign in", function() {
  it("Should be display login page", () => {
    beforeEach(() => {
      cy.visit("https://newscots-got-talent.herokuapp.com/login");
    });
  });

  it("Contain an email field", () => {
    cy.get(`[name ="email"]`).should("be.visible");
  });

  it("Contain a password field", () => {
    cy.get(`[name ="password"]`).should("be.visible");
  });
});
