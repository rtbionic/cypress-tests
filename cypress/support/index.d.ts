declare namespace Cypress {
  interface Chainable<Subject> {

    automation(id : string) : Chainable<any>
  
  }}