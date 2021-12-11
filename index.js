const chalk = require('chalk');
const { Command } = require('commander');
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require('./controllers/contacts');

const program = new Command();
program
  .requiredOption('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      if (contacts) {
        console.table(contacts);
      } else {
        console.log(chalk.yellow('Contact list is empty'));
      }
      break;

    case 'get':
      const contactById = await getContactById(id);
      if (contactById) {
        console.log(chalk.blue('Contact found'));
        console.table(contactById);
      } else {
        console.log(chalk.yellow(`Contact with id '${id}' not found`));
      }
      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
      console.log(chalk.blue('New contact added'));
      console.table(newContact);
      break;

    case 'remove':
      const contact = await removeContact(id);
      if (contact) {
        console.log(chalk.yellow('Contact removed'));
        console.log(contact);
      } else {
        console.log(chalk.yellow(`Contact with id '${id}' not found`));
      }
      break;

    default:
      console.warn(chalk.red('Unknown action type!'));
  }
};

(async () => {
  await invokeAction(argv);
})();
