context('Parte de Registro de Usuario', () => {
	describe('Registrando o usuario no applicativo', () => {
		before(() => {
			cy.visit('**/index.php**')
		})
		it('deve entrar na pagina de sign in', () => {
			cy.get('.login').click()
			cy.get('.page-heading').should('contain', 'Authentication')
		})

		it('deve clicar e entrar na pagina de cadastro', () => {
			cy.get('#email_create').type('algumacoisa@teste.com')
			cy.get('#SubmitCreate > span').click()

			cy.title().should('include', 'Login - My Store')
		})

		it('deve preencher o formulario', () => {
			cy.preenchendoFormulario()

			cy.title().should('include', 'My account - My Store')
		})
	})
})

context.only('Logando, Procurando Item e Adicionando ao Carrinho', () => {
	describe('Testando a funcionalidade do carrinho', () => {
		before(() => {
			cy.intercept({
				method: 'GET',
				pathname: '**/index.php**',
			}).as('getHomePage')

			cy.visit('**/**')
			cy.get('.login').click()
		})

		it('deve logar na aplicacao', () => {
			cy.logIntoApp()

			cy.title().should('include', 'My account - My Store')
		})

		it('deve efetuar a busca do produto e adicionar ao carrinho', () => {
			cy.get('#search_query_top').type(`t-shirt{enter}`)
			cy.get('.product_img_link > .replace-2x').trigger('mouseover')
			cy.get('a[title="Add to cart"]').click()
			cy.get('.button-container > .button-medium > span').click()

			cy.get('#summary_products_quantity')
				.should('be.visible')
				.and('have.length', 1)
		})
	})
})
