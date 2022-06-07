Cypress.Commands.add('fillForm', () => {
	cy.fixture("registerForm").then(user => {
		cy.get('#id_gender1').check()
		cy.get('#customer_firstname').type(user.firstName)
		cy.get('#customer_lastname').type(user.lastName)
		cy.get('#passwd').type(user.password, { log: false })
		cy.get('#days').select(20)
		cy.get('#months').select(12)
		cy.get('#years').select('1984')
		cy.get('#newsletter').check()
		cy.get('#optin').check()
		cy.get('#address1').type(user.userAdress)
		cy.get('#city').type('Chicago')
		cy.get('#id_state').select('Illinois')
		cy.get('#postcode').type('60130')
		cy.get('#phone_mobile').type(user.mobilePhone)
		cy.get('#alias').clear().type('Hooome')
		cy.get('#submitAccount > span').click()
	})
})

Cypress.Commands.add('logIntoApp', () => {
	cy.fixture("login").then(user => {
		cy.get('#email').type(user.USER_ID)
		cy.get('#passwd').type(user.USER_PASSWORD, {log: false})
	})
	cy.get('#SubmitLogin > span').click()
})
