const path = require('path');

const contactsPath = path.join(__dirname, '../../db/contacts.json');
// const contactsPath = path.join(__dirname, 'contacts.json');
console.log(contactsPath);

module.exports = contactsPath;
