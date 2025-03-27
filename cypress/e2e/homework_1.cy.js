describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('get', () => {
    cy.get('[data-automation-id="step_title"]')
  })

  it('contains', () => {
    cy.get('[data-automation-id="subscription_p_name"]').contains('Mobile')
  })

  it('find', () => {
    cy.get('[data-automation-id="subscription_plans"]').find(
      '[data-automation-id="subscription_p"]'
    )
  })

  it('eq', () => {
    cy.get('[data-automation-id="subscription_plans"]')
      .find('[data-automation-id="subscription_p"]')
      .eq(1)
  })

  it('children', () => {
    cy.get('[data-automation-id="subscription_plans"]').children()
  })
})
