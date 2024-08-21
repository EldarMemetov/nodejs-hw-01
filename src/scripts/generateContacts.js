import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (num) => {
  try {
    let data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    const newContacts = Array(num)
      .fill(0)
      .map(() => createFakeContact());

    contacts = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`Успішно додано ${num} нових контактів.`);
  } catch (error) {
    console.error('Помилка:', error);
  }
};
const numContacts = 5;
await generateContacts(numContacts);

//npm run generate
