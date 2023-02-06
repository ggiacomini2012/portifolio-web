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

  it('1 - Has home-dark class when initiated:', () => {
    cy.get('#home')
    .should('have.class', 'home-dark')
  })

  it('2 - Changes to home-light class when button with id="button-moon-sun" is clicked:', () => {
    cy.get('#button-moon-sun').click()
    cy.get('#home')
    .should('have.class', 'home-light')
  })

  it('3 - Navigate to about when button with id="about" is clicked:', () => {
    cy.get('[data-testid="about-button"]').click()
    cy.get('[data-testid="about"]').find('h1')
    cy.get('[data-testid="about"]').find('img')
  })

  it.only('4 - Navigate to contact when button with id="contact" is clicked:', () => {
    cy.get('[data-testid="contact-button"]').click()
    cy.get('[data-testid="contact"]').find('h1')
    cy.get('[data-testid="contact"]').find('link').should('')
  })
})
