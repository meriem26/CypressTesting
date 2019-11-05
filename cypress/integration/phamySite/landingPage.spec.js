import { LandingPage } from '../../support/pagesModules';

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
