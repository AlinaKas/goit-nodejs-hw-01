const fs = require('fs/promises');
const contactsPath = require('./contactsPath');

const readContent = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    error => console.log(error.message);
  }
};
module.exports = readContent;
