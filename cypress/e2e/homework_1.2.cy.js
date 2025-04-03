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

  it('1.1.then', () => {
    cy.get('[data-automation-id="select_lang"]').then(($el) => {
      if ($el.not('span', 'contains("EN")')) {
        cy.get('[data-automation-id="select_lang"]').click()
        cy.get('[data-automation-id="lang"]')
          .children('button')
          .contains('English')
          .parent('span')
          .parent('button')
          .click()
      } else {
        return
      }
    })
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
    cy.get('[data-automation-id="step_title"]').then(($el) => {
      cy.wrap($el.text()).as('title')
      //cy.log($el.text())
    })
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('Español')
      .parent('span')
      .parent('button')
      .click()
    cy.get('[data-automation-id="step_title"]').then(($el) => {
      expect($el.text()).to.eq('Revisa nuestros Planes de Suscripción')
    })
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
    cy.get('@title').then((text) => {
      cy.get('[data-automation-id="step_title"]')
        .should('have.text', text)
        .and('exist')
    })
  })
})
