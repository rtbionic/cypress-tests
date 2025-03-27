describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('test 1', () => {
    //get
    cy.get('[class="navbar-header"]').click()

    //[class="home-list"] > li > [href="/commands/querying"]
    //children
    cy.get('[class="home-list"]')
      .children('li')
      .children('[href="/commands/querying"]')

    //contains
    cy.contains('a', 'contains')
      .parent('li')
      .parent('ul')
      .parent('li')
      .parent('[class="home-list"]')

    //parents
    cy.contains('a', 'contains').parents('[class="home-list"]')
    cy.get('a:contains("contains")')

    //find
    cy.get('[class="home-list"]').find('[href="/commands/querying"]')

    cy.get('[class="home-list"]').find('[href="/commands/querying"]').eq(0)
    cy.get('[class="home-list"]').find('[href="/commands/querying"]').eq(1)

    cy.get('[class="home-list"]').find('[href="/commands/querying"]').first()
    cy.get('[class="home-list"]').find('[href="/commands/querying"]').last()

    //filter
    cy.get('[class="home-list"]')
      .find('[href="/commands/querying"]')
      .filter('a:contains("o")')

    //not
    cy.get('[class="home-list"]')
      .find('[href="/commands/querying"]')
      .not('a:contains("o")')

    //closest
    cy.get('[class="icon-bar"]').closest('[class^="navbar"]')

    //next
    cy.get('[class="navbar-header"]').find('button').next()
    cy.get('[class="nav navbar-nav"]').find('[class="dropdown"]').next()

    //prev
    cy.get('[class="navbar-header"]').find('a').prev()
  })
})
