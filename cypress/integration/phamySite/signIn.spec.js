const SignInPage = {
	getEmail: () => cy.get(`[name ="email"]`),
	getPassword: () => cy.get(`[name ="password"]`),
	getLoginButton: () => cy.get('.form > button').contains('Login'),
	getErrorMessage: () => cy.contains('Wrong Info. Try Again'),
};
const HomePage = {
	getLogout: () => cy.contains('Logout'),
	getMyProfile: () => cy.contains('My Profile'),
};
describe('Sign in', function() {
	beforeEach(() => {
		cy.visit('/login');
	});
	it('should contain an email field', () => {
		SignInPage.getEmail().should('be.visible');
	});

	it('should contain a password field', () => {
		SignInPage.getPassword().should('be.visible');
	});
	it('should take you to the home page if logged in successfully', () => {
		SignInPage.getEmail().type('meriem@cyf.org');
		SignInPage.getPassword().type('password');

		SignInPage.getLoginButton().click();
		HomePage.getLogout().should('be.visible');
		HomePage.getMyProfile().should('be.visible');
	});
	it('should return an error message if entered the wrong details', () => {
		SignInPage.getEmail().type('meriem@cyf.org');
		SignInPage.getPassword().type('wrong password');
		SignInPage.getLoginButton().click();
		SignInPage.getErrorMessage().should('be.visible');
		cy.url().should('contain', '/login');
	});
});
