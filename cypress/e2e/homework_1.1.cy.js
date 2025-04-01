describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
    })
  
    it('1.click', () => {
        cy.get('[data-automation-id="subscription_plans"]')
        .find('[data-automation-id="subscription_p"]')
        .eq(0)
        .children('div')
        .children('div')
        .children('[data-automation-id="subscription_p_select_btn"]')
        .click()
        //if language != 'English'
        //cy.get('[data-automation-id="select_lang"]').click()
        //cy.get('[data-automation-id="lang"]').children('button').contains('English').parent('span').parent('button').click()
        cy.get('[data-automation-id="step_title"]')
    })

    it('1.click', () => {
        cy.get('[data-automation-id="subscription_plans"]')
        .find('[data-automation-id="subscription_p"]')
        .eq(0)
        .children('div')
        .children('div')
        .children('[data-automation-id="subscription_p_select_btn"]')
        .click()
        //if language != 'English'
        //cy.get('[data-automation-id="select_lang"]').click()
        //cy.get('[data-automation-id="lang"]').children('button').contains('English').parent('span').parent('button').click()
        cy.get('[data-automation-id="step_title"]')
    })

  })