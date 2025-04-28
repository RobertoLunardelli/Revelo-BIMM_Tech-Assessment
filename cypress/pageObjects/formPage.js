export const formPage = {
    firstName: () => cy.get('#firstName'),
    lastName: () => cy.get('#lastName'),
    email: () => cy.get('#userEmail'),
    genderMale: () => cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label'),
    mobile: () => cy.get('#userNumber'),
    address: () => cy.get('#currentAddress'),
    subjects:() => cy.get('.subjects-auto-complete__value-container'),
    hobbies: () => cy.get('#hobbiesWrapper .col-md-9'),
    stateDropdown:() => cy.get('#state > .css-yk16xz-control'),
    cityDropdown: () => cy.get('#stateCity-wrapper > :nth-child(3)'),
    submit: () => cy.get('#submit')
  };
  