describe('Register in the application', () => {
	before(() => {
		cy.visit('http://automationpractice.com/index.php')
	})
	it('sould enter in the sign up', () => {
		cy.get('.login').click()
		cy.get('.page-heading').should('contain', 'Authentication')
	})

	it('should start to create account', () => {
		cy.get('#email_create').type('algumacoisa@teste.com')
		cy.get('#SubmitCreate > span').click()
		cy.title().should('include', 'Login - My Store')
	})

	it('should fill the ragister form', () => {
		cy.fillForm()
		cy.title().should('include', 'My account - My Store')
	})
})
