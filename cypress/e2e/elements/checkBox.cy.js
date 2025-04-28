describe('Tree View Tests', () => {
  beforeEach(() => {
    cy.visit('/checkbox');
  });

  it('should expand all folders and display items', () => {
    // Arrange
    cy.expandAllFolders();

    // Assert
    cy.validateItemVisible('Desktop');
    cy.validateItemVisible('Documents');
    cy.validateItemVisible('Downloads');
    cy.validateItemVisible('Notes');
    cy.validateItemVisible('Commands');
    cy.validateItemVisible('React');
    cy.validateItemVisible('Angular');
    cy.validateItemVisible('Veu');
    cy.validateItemVisible('Public');
    cy.validateItemVisible('Private');
    cy.validateItemVisible('Classified');
    cy.validateItemVisible('General');
    cy.validateItemVisible('Word File.doc');
    cy.validateItemVisible('Excel File.doc');
  });

  it('should collapse all folders and hide items', () => {
    // Arrange
    cy.expandAllFolders();
    cy.collapseAllFolders();

    // Assert
    cy.validateItemNotExist('Desktop');
    cy.validateItemNotExist('Documents');
    cy.validateItemNotExist('Downloads');
  });

  it('should select and validate a single file (React)', () => {
    // Arrange
    cy.expandAllFolders();

    // Act
    cy.selectCheckbox('React');

    // Assert
    cy.validateCheckboxChecked('React');
  });

  it('should select Documents folder and validate all its children', () => {
    // Arrange
    cy.expandAllFolders();

    // Act
    cy.selectCheckbox('Documents');

    // Assert
    cy.validateCheckboxChecked('WorkSpace');
    cy.validateCheckboxChecked('Office');
  });

  it('should deselect Documents and validate all its children are unselected', () => {
    // Arrange
    cy.expandAllFolders();
    cy.selectCheckbox('Documents');

    // Act
    cy.deselectCheckbox('Documents');

    // Assert
    cy.validateCheckboxNotChecked('WorkSpace');
    cy.validateCheckboxNotChecked('Office');
  });
});
