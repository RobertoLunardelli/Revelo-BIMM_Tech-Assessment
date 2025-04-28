describe('Radio Button Tests', () => {
  beforeEach(() => {
    cy.visit('/radio-button');
  });

  it('should not have any radio button selected initially', () => {
    // Assert
    cy.validateRadioNotSelected('Yes');
    cy.validateRadioNotSelected('Impressive');
    cy.validateRadioNotSelected('No');
  });

  it('should select "Yes" and validate only it is selected', () => {
    // Act
    cy.selectRadioOption('Yes');

    // Assert
    cy.validateRadioSelected('Yes');
    cy.validateRadioNotSelected('Impressive');
    cy.validateRadioNotSelected('No');
  });

  it('should select "Impressive" and validate only it is selected', () => {
    // Act
    cy.selectRadioOption('Impressive');

    // Assert
    cy.validateRadioSelected('Impressive');
    cy.validateRadioNotSelected('Yes');
    cy.validateRadioNotSelected('No');
  });

  it('should verify that "No" is disabled', () => {
    // Assert
    cy.validateRadioDisabled('No');
  });

  it('should switch selection from "Yes" to "Impressive"', () => {
    // Act
    cy.selectRadioOption('Yes');

    // Assert
    cy.validateRadioSelected('Yes');

    // Act
    cy.selectRadioOption('Impressive');

    // Assert
    cy.validateRadioSelected('Impressive');
    cy.validateRadioNotSelected('Yes');
    cy.validateRadioNotSelected('No');
  });
});
