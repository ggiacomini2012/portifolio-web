import id from '../../data-testids/dataTestIds'

describe('Testing home portrait:', () => {

  const dataTestId = (id: string): string => `[data-testid="${id}"]`;

  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit('/contact')
  })

  it('1 - Has contact-dark class when initiated:', () => {
    cy.get(dataTestId(id.contact))
      .should('have.class', 'contact-dark')
  })

  it('2 - Changes to contact-light class when button with id="button-moon-sun" is clicked:', () => {
    cy.get(dataTestId(id.button_moon_sun)).click()
    cy.get(dataTestId('contact'))
      .should('have.class', 'contact-light')
  })

  it('3 - Navigate to about when button with id="about" is clicked:', () => {
    cy.get(dataTestId('about-button')).click()
    cy.get(dataTestId('about')).find('h1')
    cy.get(dataTestId('about')).find('img')
  })

  it('4 - Navigate to home when button with id="home" is clicked:', () => {
    cy.get(dataTestId(id.home_button)).click()
    cy.get(dataTestId('home')).find('h1')
    cy.get(dataTestId('home')).find('img')
  })

  it('5 - Navigate to contact when button with id="contact" is clicked and check links urls:', () => {
    cy.get(dataTestId(id.contact_button)).click()
    cy.get(dataTestId('contact')).find('h1').contains('If you like what')
    cy.get('a').filter(dataTestId(id.contact_icon_instagram)).should('have.attr', 'href', 'https://www.instagram.com/guilhermegiacomini.dev/')
    cy.get('a').filter(dataTestId(id.contact_icon_youtube)).should('have.attr', 'href', 'https://www.youtube.com/channel/UCROYQOCi1hugmsrRBz73U2A')
    cy.get('a').filter(dataTestId(id.contact_icon_linkedin)).should('have.attr', 'href', 'https://www.linkedin.com/in/guilhermegiacominidev/')
  })

  it(`6 - Should ${dataTestId(id.contact)} have a attribute :`, () => {
    cy.get(dataTestId(id.contact)).should('have.css', 'display', 'flex')
    cy.get(dataTestId(id.contact)).should('have.css', 'flex-direction', 'row')
  })
})
