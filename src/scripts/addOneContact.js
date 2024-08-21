import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async (num) => {
  try {
    let data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    const newContacts = [];
    for (let i = 0; i < num; i += 1) {
      newContacts.push(createFakeContact());
    }
    contacts = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`Успішно доданий   ${num} контакт`);
  } catch (error) {
    console.error('Помилка:', error);
  }
};
const numContacts = 1;
await addOneContact(numContacts);

//npm run add-one
