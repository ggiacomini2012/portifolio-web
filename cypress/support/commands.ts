/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Logs in based on a username and password defined as environment variables.
     * @example cy.login()
     */
    login(): Chainable<string>
  }
}
