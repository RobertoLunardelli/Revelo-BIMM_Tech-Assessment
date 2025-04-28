describe('Login Success', () => {
  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('should submit a new form with the required fields filled in', () => {
    // Arrange
    cy.generate_form_data().then((user) => {
      // Act
      cy.create_form_required(user);

      // Assert
      cy.validate_form_required(user);
    });
  });

  it('should submit a new form with all the fields filled in', () => {
    // Arrange
    cy.generate_form_data().then((user) => {
      // Act
      cy.create_form_optional(user);

      // Assert
      cy.validate_form_optional(user);
    });
  });
  it('should identify the required fields when the form is submitted without filling them', () => {
    //Arrange
    cy.get('#submit').click();
    //Assert
    cy.validate_required_fields_border()

  })
});
