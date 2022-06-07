# Test _end-to-end_ com Cypress

Sample project to demonstrate end-to-end (e2e) tests written with Cypress.

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.34.0` while writing this doc)
- [nodejs](https://nodejs.org/en/) (I've used version `16.13.0` while writing this doc)
- [NPM] (I've used version `8.1.4` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `102.0.5005.63` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Running the tests

In this project, you can run tests in interactive and headless modes.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.

### Interactive mode

Run `npm run cy:open` to open the Cypress Test Runner to run tests in interactive mode using a desktop viewport.

___

Made with ❤️ by [Bernardo Gomes](https://github.com/Bergomezz).
