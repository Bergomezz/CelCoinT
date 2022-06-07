const { defineConfig } = require('cypress')

module.exports = defineConfig({
	viewportHeight: 1080,
	viewportWidth: 1920,
	e2e: {
		baseUrl: 'http://automationpractice.com/index.php',
		defaultCommandTimeout: 10000,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
