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
    //when language != 'English'
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
    //step_title
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
    //when language != 'English'
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
    //enter login information
    cy.get('[data-automation-id="order_continue_btn"]').click()
    cy.get('[name="userName"]').click().type('artem')
    cy.get('[name="email"]').click().type('art.titovich@gmail.com')
    cy.get('[name="password"]').click().type('159753')
    cy.get('[name="confirmPassword"]').click().type('159753')
    cy.get('[name="firstName"]').click().type('Artem')
    cy.get('[name="lastName"]').click().type('Titovich')
    cy.get('[name="phone"]').click().type('375298104421')
    cy.get('[name="address"]').click().type('Nekrasova 35')
    cy.get('[aria-haspopup="listbox"]').click()
    cy.get('[role="listbox"]').children('[value="BY"]').click()
    cy.get('[name="city"]').click().type('Minsk')
    cy.get('[name="zipCode"]').click().type('220040')
    //step 2
    cy.get('[data-automation-id="step_btn_2"]').click()
    //step 1 + step_title
    cy.get('[data-automation-id="step_btn_1"]').click()
    cy.get('[data-automation-id="step_title"]')
  })
})
