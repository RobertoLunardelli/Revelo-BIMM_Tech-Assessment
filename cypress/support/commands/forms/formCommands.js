import { faker } from '@faker-js/faker';
import { formPage } from '../../../pageObjects/formPage';

Cypress.Commands.add('create_form_required', (user) => {
  formPage.firstName().type(user.firstName);
  formPage.lastName().type(user.lastName);
  formPage.genderMale().click();
  formPage.mobile().type(user.mobile);
  formPage.submit().click();
});


Cypress.Commands.add('create_form_optional', (user) => {
  formPage.firstName().type(user.firstName);
  formPage.lastName().type(user.lastName);
  formPage.email().type(user.email);
  formPage.genderMale().click();
  formPage.mobile().type(user.mobile);
  formPage.subjects().type(`${user.subject}{enter}`);
  formPage.hobbies().contains(user.hobbies).click();
  cy.get('#uploadPicture').attachFile(user.picture);
  formPage.address().type(user.address);
  formPage.stateDropdown().click().type(`${user.state}{enter}`);
  formPage.cityDropdown().click().type(`${user.city}{enter}`);
  formPage.submit().click();
});

Cypress.Commands.add('generate_form_data', () => {
  const availableHobbies = ['Sports', 'Reading', 'Music'];
  const availableSubjects = ['Maths', 'Physics', 'Chemistry', 'Biology', 'English'];
  const availableStates = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
  const citiesByState = {
    'NCR': ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    'Haryana': ['Karnal', 'Panipat'],
    'Rajasthan': ['Jaipur', 'Jaiselmer']
  };
  const selectedState = faker.helpers.arrayElement(availableStates);
  const selectedCity = faker.helpers.arrayElement(citiesByState[selectedState]);

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    mobile: faker.string.numeric(10),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    hobbies: faker.helpers.arrayElement(availableHobbies),    
    subject: faker.helpers.arrayElement(availableSubjects),  
    state: selectedState,
    picture: 'forms/example.png',
    city: selectedCity
  };
});

Cypress.Commands.add('validate_form_required', (user) => {
  cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .should('have.text', `${user.firstName} ${user.lastName}`);
  
  cy.get('tbody > :nth-child(3) > :nth-child(2)')
    .should('have.text', 'Male');

  cy.get('tbody > :nth-child(4) > :nth-child(2)')
    .should('have.text', user.mobile);
});

Cypress.Commands.add('validate_form_optional', (user) => {
  cy.get('tbody > :nth-child(1) > :nth-child(2)')
    .should('have.text', `${user.firstName} ${user.lastName}`);

  cy.get('tbody > :nth-child(2) > :nth-child(2)')
    .should('have.text', user.email);

  cy.get('tbody > :nth-child(3) > :nth-child(2)')
    .should('have.text', 'Male');

  cy.get('tbody > :nth-child(4) > :nth-child(2)')
    .should('have.text', user.mobile);

  cy.get('tbody > :nth-child(5) > :nth-child(2)')
    .should('have.text', '28 April,2025');

  cy.get('tbody > :nth-child(6) > :nth-child(2)')
    .should('have.text', user.subject);

  cy.get('tbody > :nth-child(7) > :nth-child(2)')
    .should('have.text', user.hobbies);

  cy.get('tbody > :nth-child(8) > :nth-child(2)')
    .should('have.text', 'example.png');

  cy.get('tbody > :nth-child(9) > :nth-child(2)')
    .should('have.text', user.address);

  cy.get('tbody > :nth-child(10) > :nth-child(2)')
    .should('have.text', `${user.state} ${user.city}`);
});

Cypress.Commands.add('validate_required_fields_border', () => {
  formPage.firstName()
    .should('be.visible')
    .should('have.css', 'border-color')
    .and('equal', 'rgb(220, 53, 69)'); // vermelho padrão Bootstrap

  formPage.lastName()
    .should('be.visible')
    .should('have.css', 'border-color')
    .and('equal', 'rgb(220, 53, 69)');

  formPage.mobile()
    .should('be.visible')
    .should('have.css', 'border-color')
    .and('equal', 'rgb(220, 53, 69)');

  formPage.genderMale()
    .should('be.visible')
    .should('have.css', 'border-color')
    .and('equal', 'rgb(220, 53, 69)');
});



