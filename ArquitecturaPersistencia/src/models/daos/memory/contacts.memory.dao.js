import { v4 as uuid } from "uuid";

export class ContactsMemoryDao {
  constructor() {
    this.contacts = [];
  }

  async getAll() {
    return this.contacts;
  }

  async getById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }

  async save(contactPayload) {
    const newContact = {
      id: uuid(),
      ...contactPayload,
    };
    this.contacts.push(newContact);
    return newContact;
  }

  async updateById(id, contactPayload) {
    const foundIndex = this.contacts.findIndex((contact) => contact.id === id);
    if (foundIndex < 0) {
      return null;
    }
    const foundContact = this.contacts[foundIndex];
    const updatedContact = {
      ...foundContact,
      ...contactPayload
    };
    this.contacts[foundIndex] = updatedContact;
    return updatedContact;
  }

  async deleteById(id) {
    const foundIndex = this.contacts.findIndex((contact) => contact.id === id);
    if (foundIndex < 0) {
      return null;
    }
    const foundContact = this.contacts[foundIndex];
    this.contacts.splice(foundIndex, 1);
    return foundContact;
  }
};