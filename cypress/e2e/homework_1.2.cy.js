describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('1.then', () => {
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
    cy.get('[data-automation-id="step_title"]').then(($el) => {
      expect($el.text()).to.eq('Check Out Our Subscriptions Plans')
    })
  })

  it('2.wrap', () => {
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
  })
})
