export const SignInPage = {
  getEmail: () => cy.get(`[name ="email"]`),
  getPassword: () => cy.get(`[name ="password"]`),
  getLoginButton: () => cy.get(".form > button").contains("Login"),
  getErrorMessage: () => cy.contains("Wrong Info. Try Again")
};
export const HomePage = {
  getLogout: () => cy.contains("Logout"),
  getMyProfile: () => cy.contains("My Profile")
};
export const LandingPage = {
  getHeader: () => cy.get("h1.ui.blue.center.aligned.header strong"),
  getSignInButton: () => cy.contains("SIGN IN"),
  getApplicantButton: () => cy.contains("REGISTER AS APPLICANT"),
  getCompanyButton: () => cy.contains("REGISTER AS COMPANY")
};
