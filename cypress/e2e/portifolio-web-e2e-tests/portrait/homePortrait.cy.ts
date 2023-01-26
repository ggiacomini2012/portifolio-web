describe('Testing home portrait:', () => {
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
    //#REFACTOR
    //this is for cypress render css (pointer: coarse) media query
    Cypress.automation("remote:debugger:protocol", {
      command: 'Emulation.setTouchEmulationEnabled',
      params: {
        enabled: true
      }
    })
    //#REFACTOR
  })

  it('Testing home has home-dark class', () => {
    cy.get('#home')
    .should('have.class', 'home-dark')
  })

  it('Testing home changes to home-light class', () => {
    cy.get('#button-moon-sun').click()
    cy.get('#home')
    .should('have.class', 'home-light')
  })
})
