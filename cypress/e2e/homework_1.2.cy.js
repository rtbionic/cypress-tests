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
    cy.get('[name="userName"]')
      .click()
      .type('artem')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('artem')
      })
    cy.get('[name="email"]')
      .click()
      .type('art.titovich@gmail.com')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('art.titovich@gmail.com')
      })
    cy.get('[name="password"]')
      .click()
      .type('159753')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('159753')
      })
    cy.get('[name="confirmPassword"]')
      .click()
      .type('159753')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('159753')
      })
    cy.get('[name="firstName"]')
      .click()
      .type('Artem')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('Artem')
      })
    cy.get('[name="lastName"]')
      .click()
      .type('Titovich')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('Titovich')
      })
    cy.get('[name="phone"]')
      .find('[aria-haspopup="listbox"]')
      .click()
      .clear()
      .type('375')
    cy.get('[name="phone"]')
      .find('[role="listbox"]')
      .children('[value="Belarus"]')
      .click()
    cy.get('[name="phone"]')
      .find('[aria-haspopup="listbox"]')
      .then(($el) => {
        expect($el.prop('defaultValue')).to.be.eq('+375')
      })
    cy.get('[name="phone"]').click().type('298104421')
    cy.get('[name="phone"]')
      .find('[placeholder="(__) ___ __ __"]')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('(29) 810 44 21')
      })
    cy.get('[data-automation-id="phone"]')
      .children('input')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('375298104421')
      })
    cy.get('[aria-label="Country"]').click()
    cy.get('[class="body-sc"]').find('[value="BY"]').click()
    cy.get('[data-automation-id="country"]')
      .find('[aria-label="Country"]')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('Belarus')
      })
    cy.get('[name="city"]')
      .click()
      .type('Minsk')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('Minsk')
      })
    cy.get('[name="address"]')
      .click()
      .type('Nekrasova 35')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('Nekrasova 35')
      })
    cy.get('[name="zipCode"]')
      .click()
      .type('220040')
      .then(($el) => {
        cy.log($el.val())
        expect($el.val()).to.be.equal('220040')
      })
  })
})
