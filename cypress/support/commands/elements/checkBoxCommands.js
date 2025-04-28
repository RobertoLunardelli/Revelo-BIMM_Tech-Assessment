Cypress.Commands.add('expandAllFolders', () => {
    cy.get('.rct-option-expand-all').click();
  });
  
  Cypress.Commands.add('collapseAllFolders', () => {
    cy.get('.rct-option-collapse-all').click();
  });
  

  Cypress.Commands.add('selectCheckbox', (itemName) => {
    cy.contains(itemName)
      .parent()
      .find('input[type="checkbox"]')
      .check({ force: true });
  });
  

  Cypress.Commands.add('deselectCheckbox', (itemName) => {
    cy.contains(itemName)
      .parent()
      .find('input[type="checkbox"]')
      .uncheck({ force: true });
  });
  

  Cypress.Commands.add('validateCheckboxChecked', (itemName) => {
    cy.contains(itemName)
      .parent()
      .find('input[type="checkbox"]')
      .should('be.checked');
  });
  

  Cypress.Commands.add('validateCheckboxNotChecked', (itemName) => {
    cy.contains(itemName)
      .parent()
      .find('input[type="checkbox"]')
      .should('not.be.checked');
  });
  

  Cypress.Commands.add('validateItemVisible', (itemName) => {
    cy.contains(itemName).should('be.visible');
  });
  

  Cypress.Commands.add('validateItemNotExist', (itemName) => {
    cy.contains(itemName)
      .should('not.exist');
  });
  
  
  
  