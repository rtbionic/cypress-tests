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
        cy.get('[data-automation-id="select_lang"]').click()
        cy.get('[data-automation-id="lang"]').children('button').contains('English').parent('span').parent('button').click()
        cy.get('[data-automation-id="step_title"]')
    })

    it('2.click-type', () => {
        cy.get('[data-automation-id="subscription_plans"]')
        .find('[data-automation-id="subscription_p"]')
        .eq(0)
        .children('div')
        .children('div')
        .children('[data-automation-id="subscription_p_select_btn"]')
        .click()
        //if language != 'English'
        cy.get('[data-automation-id="select_lang"]').click()
        cy.get('[data-automation-id="lang"]').children('button').contains('English').parent('span').parent('button').click()
        cy.get('[data-automation-id="order_title"]').next('div').next('div').children('[data-automation-id="order_continue_btn"]').click()
        cy.get('[data-automation-id="userName"]').children('div').children('div').children('[name="userName"]').click().type('artem')
    })

  })