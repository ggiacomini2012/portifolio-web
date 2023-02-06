import id from '../../data-testids/dataTestIds'

describe('Testing home portrait:', () => {

 const dataTestId = (id: string): string => `[data-testid="${id}"]`;

  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/about')
    //this is for cypress render css (pointer: coarse) media query if needed
    Cypress.automation("remote:debugger:protocol", {
      command: 'Emulation.setTouchEmulationEnabled',
      params: {
        enabled: true
      }
    })
  })

  it('1 - Has about-dark class when initiated:', () => {
    cy.get(dataTestId(id.about))
    .should('have.class', 'about-dark')
  })

  it('2 - Changes to about-light class when button with id="button-moon-sun" is clicked:', () => {
    cy.get(dataTestId(id.button_moon_sun)).click()
    cy.get(dataTestId('about'))
    .should('have.class', 'about-light')
  })

  it('3 - Navigate to contact when button with id="contact" is clicked:', () => {
    cy.get(dataTestId('contact-button')).click()
    cy.get(dataTestId('contact')).find('h1')
    cy.get(dataTestId('contact')).find('img')
  })

  it('4 - Navigate to home when button with id="home" is clicked:', () => {
    cy.get(dataTestId(id.home_button)).click()
    cy.get(dataTestId('home')).find('h1')
    cy.get(dataTestId('home')).find('img')
  })

  it(`5 - Should ${dataTestId(id.about)} not have a attribute :`, () => {
    cy.get(dataTestId(id.about)).should('not.have.css', 'overflow-y', 'scroll')
  })
})
