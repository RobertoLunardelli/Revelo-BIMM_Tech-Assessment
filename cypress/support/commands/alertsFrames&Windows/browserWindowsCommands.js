
Cypress.Commands.add('clickWithoutTarget', (selector) => {
  cy.get(selector).invoke('removeAttr', 'target').click();
});


Cypress.Commands.add('validateWindowOpen', (selector) => {
  cy.window().then((win) => {
    cy.stub(win, 'open').as('windowOpen');
  });
  cy.get(selector).click();
  cy.get('@windowOpen').should('be.called');
});


Cypress.Commands.add('validateNewWindowMessageContent', (expectedMessage) => {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url, target, features) => {
      const newWindow = {
        document: {
          write: (content) => {
            expect(content).to.contain(expectedMessage);
          }
        },
        close: () => {}
      };
      return newWindow;
    }).as('windowOpen');
  });

  cy.get('#messageWindowButton').click();
  cy.get('@windowOpen').should('be.called');
});
