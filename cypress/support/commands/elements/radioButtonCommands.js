Cypress.Commands.add('selectRadioOption', (optionText) => {
    cy.contains('.custom-control-label', optionText).click();
  });

  Cypress.Commands.add('validateRadioSelected', (optionText) => {
    cy.contains('.custom-control-label', optionText)
      .prev('input')
      .should('be.checked');
  });

  Cypress.Commands.add('validateRadioNotSelected', (optionText) => {
    cy.contains('.custom-control-label', optionText)
      .prev('input')
      .should('not.be.checked');
  });

  Cypress.Commands.add('validateRadioNotSelected', (optionText) => {
    cy.contains('.custom-control-label', optionText)
      .prev('input')
      .should('not.be.checked');
  });
  
  Cypress.Commands.add('validateRadioDisabled', (optionText) => {
    cy.contains('.custom-control-label', optionText)
      .prev('input')
      .should('be.disabled');
  });
  
  