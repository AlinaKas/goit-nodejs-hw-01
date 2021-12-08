// contacts.js

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// // TODO: задокументировать каждую функцию
// function listContacts() {
//   // ...твой код
// }

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json');

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    error => console.log(error.message);
  }
};

module.exports = { listContacts };
