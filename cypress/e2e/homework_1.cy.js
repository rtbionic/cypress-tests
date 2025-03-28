describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('1.get', () => {
    cy.get('[data-automation-id="step_title"]')
  })

  it('2.contains', () => {
    cy.get('[data-automation-id="subscription_p_name"]').contains('Mobile')
  })

  it('3.find', () => {
    cy.get('[data-automation-id="subscription_plans"]').find(
      '[data-automation-id="subscription_p"]'
    )
  })

  it('4.eq', () => {
    cy.get('[data-automation-id="subscription_plans"]')
      .find('[data-automation-id="subscription_p"]')
      .eq(1)
  })

  it('5.children', () => {
    cy.get('[data-automation-id="subscription_plans"]').children()
  })

  it('6.parent', () => {
    cy.get('[data-automation-id="subscription_p"]').contains('For Testing Purposes').parent()
    cy.get('[data-automation-id="subscription_p"]').contains('Frantsuzov').parents()
  })

  it('`7.hard_levev**`', () => {
    cy.get('[data-automation-id="subscription_p_name"]').contains('Lyubov Test').parent('div')
  })
})
