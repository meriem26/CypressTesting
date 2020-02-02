import { SignInPage, HomePage } from '../../support/pagesModules';

describe('Opportunities List', () => {
	beforeEach(() => {
		cy.visit('/login');
		SignInPage.getEmail().type('meriem@cyf.org');
		SignInPage.getPassword().type('password');

		SignInPage.getLoginButton().click();
	});

	it('should display a list of opportunities', () => {
		// cy.server();
		cy.server();
		cy.route('GET', 'api/**', 'fixture:opportunities').as('load');

		cy.visit('/opportunities');
		cy.wait('@load');
		cy.get('.stackable.grid .card').should('have.length', 5);
	});
});
