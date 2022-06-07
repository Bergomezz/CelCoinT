context('Registration Part', () => {
	describe('Register in the application', () => {
		before(() => {
			cy.visit('**/index.php**')
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
	
		it('should fill the register form', () => {
			cy.fillForm()

			cy.title().should('include', 'My account - My Store')
		})
	})

})

context.only('Login in, Searching and Add Product', () => {
	describe('Cart Functionality test', () => {
		before(() => {
			cy.intercept({
				method: 'GET',
				pathname: '**/index.php**'
			}).as('getSignin')
	
			cy.visit('**/**')
			cy.get('.login').click()
		})
	
		it('should sign into application', () => {
			cy.logIntoApp()

			cy.title().should('include', 'My account - My Store')
		})
	
		it('should searching a product', () => {
			cy.get('#search_query_top').type(`t-shirt{enter}`)
			cy.get('.product_img_link > .replace-2x').trigger('mouseover')
			cy.get('a[title="Add to cart"]').click()
			cy.get('.button-container > .button-medium > span').click()

			cy.get('#summary_products_quantity').should('be.visible').and('have.length', 1)
		})
	})
	
})
