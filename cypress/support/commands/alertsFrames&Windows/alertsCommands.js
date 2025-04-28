
Cypress.Commands.add('validateImmediateAlert', (expectedMessage) => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub');
    });
    cy.get('#alertButton').click();
    cy.get('@alertStub').should('have.been.calledOnceWith', expectedMessage);
  });
  
  
  Cypress.Commands.add('validateDelayedAlert', (expectedMessage) => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('delayedAlertStub');
    });
    cy.get('#timerAlertButton').click();
    cy.wait(5000);
    cy.get('@delayedAlertStub').should('have.been.calledOnceWith', expectedMessage);
  });
  
  
  Cypress.Commands.add('acceptConfirmationAlert', (expectedMessage) => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(true).as('confirmStub');
    });
    cy.get('#confirmButton').click();
    cy.get('@confirmStub').should('have.been.calledOnceWith', expectedMessage);
  });
  
  
  Cypress.Commands.add('cancelConfirmationAlert', (expectedMessage) => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(false).as('confirmStub');
    });
    cy.get('#confirmButton').click();
    cy.get('@confirmStub').should('have.been.calledOnceWith', expectedMessage);
  });
  
  
  Cypress.Commands.add('validateConfirmationResult', (expectedText) => {
    cy.get('#confirmResult').should('contain.text', expectedText);
  });
  
  
  Cypress.Commands.add('submitPromptAlert', (textToEnter, expectedPromptMessage) => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(textToEnter).as('promptStub');
    });
    cy.get('#promtButton').click();
    cy.get('@promptStub').should('have.been.calledOnceWith', expectedPromptMessage);
  });
  
  
  Cypress.Commands.add('validatePromptResult', (textToEnter) => {
    cy.get('#promptResult').should('contain.text', `You entered ${textToEnter}`);
  });
  