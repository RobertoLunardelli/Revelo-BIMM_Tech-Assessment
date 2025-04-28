describe('Browser Windows Tests', () => {
    beforeEach(() => {
      cy.visit('/browser-windows');
    });
  
    it('should open a new tab and validate that it was opened', () => {
      // Arrange
      cy.validateWindowOpen('#tabButton');
    });
  
    it('should open a new window and validate that it was opened', () => {
      // Arrange
      cy.validateWindowOpen('#windowButton');
    });
  
    it('should open a new window message and validate that it was opened', () => {
      // Arrange
      cy.validateWindowOpen('#messageWindowButton');
    });
  
    it('should open a new window message and validate the content', () => {
      // Arrange
      const expectedMessage = 'Knowledge increases by sharing but not by saving.';
      
      // Assert
      cy.validateNewWindowMessageContent(expectedMessage);
    });
  });
  