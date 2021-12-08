const { listContacts } = require('./contacts');
// const path = require('path');
// const fs = require('fs/promises');

// let data;
// const file = async () => {
//   try {
//     data = await fs.readFile('data.json', 'utf8');
//   } catch {
//     data = '[]';
//   }
// };

// const fileOperation = async (filePath, action, data) => {
//   switch (action) {
//     case 'read':
//       const text = await fs.readFile(filePath, 'utf8');
//       console.log(text);
//       break;
//     case 'add':
//       await fs.appendFile(filePath, data);
//       break;
//     case 'replace':
//       await fs.writeFile(filePath, data);
//       break;
//     default:
//       throw new Error('Unknown action');
//   }
// };
// const filePath = 'files/files.txt';

// fileOperation(filePath, 'read');
// fileOperation(filePath, 'add', '\nМир');
// fileOperation(filePath, 'replace', 'Hello world');

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case 'getContacts':
        const contacts = await listContacts();
        console.table(contacts);
        break;

      default:
        throw new Error('Unknown action');
    }
  } catch (error) {
    console.error(error.message);
  }
};

invokeAction({ action: 'getContacts' });

// index.listen(5010, function () {
//   console.log('server is running on port 5010');
// });
