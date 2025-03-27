describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('test 1', () => {
    cy.get('[data-automation-id="step_title"]')
  })
})
