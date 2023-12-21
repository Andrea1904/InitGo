import getDAOS from "../daos/daos.factory.js"
import { SaveContactDTO, UpdateContactDTO } from "../dtos/contacts.dto.js";

const { contactsDao } = getDAOS();

export class ContactsRepository {

  constructor() {
    this.dao = contactsDao;
  }

  async getAllContacts() {
    return await this.dao.getAll();
  }

  async getContactById(id) {
    return await this.dao.getById(id);
  }

  async saveContact(payload) {
    const contactPayload = new SaveContactDTO(payload);
    return await this.dao.save(contactPayload);
  }

  async updateContact(id, payload) {
    const contact = await this.dao.getById(id);
    if (!contact) {
      return null;
    }
    const contactPayload = new UpdateContactDTO(payload, contact);
    return await this.dao.updateById(id, contactPayload);
  }

  async deleteContact(id) {
    return await this.dao.deleteById(id);
  }
}