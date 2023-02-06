import id from '../../data-testids/dataTestIds'

describe('Testing home portrait:', () => {

 const dataTestId = (id: string): string => `[data-testid="${id}"]`;

  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
    //this is for cypress render css (pointer: coarse) media query if needed
    Cypress.automation("remote:debugger:protocol", {
      command: 'Emulation.setTouchEmulationEnabled',
      params: {
        enabled: true
      }
    })
  })

  it('1 - Has home-dark class when initiated:', () => {
    cy.get(dataTestId(id.home))
    .should('have.class', 'home-dark')
  })

  it('2 - Changes to home-light class when button with id="button-moon-sun" is clicked:', () => {
    cy.get(dataTestId(id.button_moon_sun)).click()
    cy.get(dataTestId('home'))
    .should('have.class', 'home-light')
  })

  it('3 - Navigate to about when button with id="about" is clicked:', () => {
    cy.get(dataTestId('about-button')).click()
    cy.get(dataTestId('about')).find('h1')
    cy.get(dataTestId('about')).find('img')
  })

  it('4 - Navigate to contact when button with id="contact" is clicked:', () => {
    cy.get(dataTestId(id.contact_button)).click()
    cy.get(dataTestId('contact')).find('h1')
    cy.get(dataTestId('contact')).find('a')
  })
  
  it('5 - Navigate to contact when button with id="contact" is clicked:', () => {
    cy.get(dataTestId(id.introduction)).contains('Hi, I\'m Guilherme Giacomini')
    cy.get(dataTestId(id.select_language_button)).select('português')
    cy.get(dataTestId(id.introduction)).contains('Olá, Guilherme Giacomini')
  })
})
