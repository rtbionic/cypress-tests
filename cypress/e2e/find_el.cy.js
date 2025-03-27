describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('test1', () => {
    cy.get('[class="navbar-header"]').click()

    cy.get('[class="home-list"]')
      .children('li')
      .children('[href="/commands/querying"]')

    cy.contains('a', 'contains')
      .parent('li')
      .parent('ul')
      .parent('li')
      .parent('[class="home-list"]')

    cy.contains('a', 'contains').parents('[class="home-list"]')

    cy.get('[class="home-list"]').find('[href="/commands/querying"]')

    cy.get('[class="home-list"]').find('[href="/commands/querying"]').eq(0)

    cy.get('[class="home-list"]').find('[href="/commands/querying"]').first()
    cy.get('[class="home-list"]').find('[href="/commands/querying"]').last()

    cy.get('[class="home-list"]')
      .find('[href="/commands/querying"]')
      .filter('a:contains("contains")')

    cy.get('[class="navbar-header"]').find('button').next()
  })
})
