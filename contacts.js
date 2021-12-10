// const crypto = require('crypto');
const { v4 } = require('uuid');
const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json');

const readContent = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    error => console.log(error.message);
  }
};

const listContacts = async () => await readContent();

const addContact = async (name, email, phone) => {
  const contacts = await readContent();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
  return newContact;
};

const getContactById = async contactId => {
  const contacts = await readContent();
  const result = contacts.find(contact => contact.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async contactId => {
  const contacts = await readContent();
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  const removedContact = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
  return removedContact;
};

module.exports = { listContacts, addContact, getContactById, removeContact };
