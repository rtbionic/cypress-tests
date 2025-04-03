describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('1.then', () => {
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
    cy.get('[data-automation-id="step_title"]').then(($el) => {
      expect($el.text()).to.eq('Check Out Our Subscriptions Plans')
    })
  })

  it('1.1.then', () => {
    cy.get('[data-automation-id="select_lang"]').then(($el) => {
      if ($el.not('span', 'contains("EN")')) {
        cy.get('[data-automation-id="select_lang"]').click()
        cy.get('[data-automation-id="lang"]')
          .children('button')
          .contains('English')
          .parent('span')
          .parent('button')
          .click()
      } else {
        return
      }
    })
    cy.get('[data-automation-id="step_title"]').then(($el) => {
      expect($el.text()).to.eq('Check Out Our Subscriptions Plans')
    })
  })

  it('2.wrap', () => {
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
    cy.get('[data-automation-id="step_title"]').then(($el) => {
      cy.wrap($el.text()).as('title')
      //cy.log($el.text())
    })
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('Español')
      .parent('span')
      .parent('button')
      .click()
    cy.get('[data-automation-id="step_title"]').then(($el) => {
      expect($el.text()).to.eq('Revisa nuestros Planes de Suscripción')
    })
    cy.get('[data-automation-id="select_lang"]').click()
    cy.get('[data-automation-id="lang"]')
      .children('button')
      .contains('English')
      .parent('span')
      .parent('button')
      .click()
    cy.get('@title').then((text) => {
      cy.get('[data-automation-id="step_title"]')
        .should('have.text', text)
        .and('exist')
    })
  })

  it.only('3.hard_level', () => {
    cy.get('[data-automation-id="select_lang"]').then(($el) => {
      if ($el.not('span', 'contains("EN")')) {
        cy.get('[data-automation-id="select_lang"]').click()
        cy.get('[data-automation-id="lang"]')
          .children('button')
          .contains('English')
          .parent('span')
          .parent('button')
          .click()
      } else {
        return
      }
    })
    cy.get('[data-automation-id="subscription_plans"]')
      .find('[data-automation-id="subscription_p"]')
      .eq(0)
      .children('div')
      .children('div')
      .children('[data-automation-id="subscription_p_select_btn"]')
      .click()
    //enter login information
    cy.get('[data-automation-id="order_continue_btn"]').click()
    cy.get('[name="userName"]').click().type('artem')
    //.invoke('text')
    //.then(($text) => {
    //cy.get('[name="userName"]')
    //cy.then(() => {
    //expect($text).to.eq('artem')
    //})
    //})
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
  })
})
