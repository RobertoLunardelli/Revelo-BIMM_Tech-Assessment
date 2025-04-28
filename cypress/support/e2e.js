import './commands/forms/formCommands';
import './commands/elements/radioButtonCommands';
import './commands/elements/checkBoxCommands';
import './commands/alertsFrames&Windows/alertsCommands';
import './commands/alertsFrames&Windows/browserWindowsCommands';
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
