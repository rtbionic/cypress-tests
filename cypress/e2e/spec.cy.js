describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('test1', () => {
    cy.log('Test 1')
  })

  it('test2', () => {
    cy.log('Test 2')
  })
})
