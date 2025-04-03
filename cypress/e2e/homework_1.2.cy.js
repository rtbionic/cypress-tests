describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('test then', () => {
    cy.automation('subscription_p')
      .eq(0)
      .find('[data-automation-id="subscription_p_name"]')
      .then(($el) => {
        expect($el.text()).to.eq('Lyubov Test')
        cy.log($el.text())
      })
  })
})
