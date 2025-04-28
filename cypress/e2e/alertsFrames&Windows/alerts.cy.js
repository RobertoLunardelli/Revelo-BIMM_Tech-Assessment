describe('Alerts Tests', () => {
    beforeEach(() => {
      cy.visit('/alerts');
    });
  
    it('should display alert immediately on button click', () => {
      // Assert
      cy.validateImmediateAlert('You clicked a button');
    });
  
    it('should display alert after 5 seconds on button click', () => {
      // Assert
      cy.validateDelayedAlert('This alert appeared after 5 seconds');
    });
  
    it('should accept the confirm alert', () => {
      // Act
      cy.acceptConfirmationAlert('Do you confirm action?');
  
      // Assert
      cy.validateConfirmationResult('You selected Ok');
    });
  
    it('should cancel the confirm alert', () => {
      // Act
      cy.cancelConfirmationAlert('Do you confirm action?');
  
      // Assert
      cy.validateConfirmationResult('You selected Cancel');
    });
  
    it('should enter text into the prompt and validate it', () => {
        // Act
        cy.submitPromptAlert('Test User', 'Please enter your name');
      
        // Assert
        cy.validatePromptResult('Test User');
      });
      
  });
  