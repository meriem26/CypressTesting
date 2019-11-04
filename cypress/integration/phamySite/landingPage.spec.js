const LandingPage = {
	getHeader: () => cy.get('h1.ui.blue.center.aligned.header strong'),
	getSignInButton: () => cy.contains('SIGN IN'),
	getApplicantButton: () => cy.contains('REGISTER AS APPLICANT'),
	getCompanyButton: () => cy.contains('REGISTER AS COMPANY'),
};

describe('Landing page', function() {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should contain a title', () => {
		LandingPage.getHeader().should('contain.text', 'New Scots Got');
	});
	it('should contain a sign in button', () => {
		LandingPage.getSignInButton().should('be.visible');
	});
	it('should contain as applicant button', () => {
		LandingPage.getApplicantButton().should('be.visible');
	});
	it('should contain Register as a company button', () => {
		LandingPage.getCompanyButton().should('be.visible');
	});
});
