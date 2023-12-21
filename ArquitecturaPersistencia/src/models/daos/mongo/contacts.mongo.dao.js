import { MongoManager } from "../../db/mongo/mongo.manager.js";
import ContactsModel from "../../schemas/contacts.schema.js";


export class ContactsMongoDao {
  
  constructor() {
    MongoManager.start();
  }

  async getAll() {
    return await ContactsModel.find().lean();
  }

  async getById(id) {
    return await ContactsModel.findOne({ _id: id }).lean();
  }

  async save(contactPayload) {
    const newContact = await ContactsModel.create(contactPayload);
    return newContact;
  }

  async updateById(id, contactPayload) {
    const updatedContact = await ContactsModel.findByIdAndUpdate(id, {
      $set: { ...contactPayload }
    });
    return updatedContact;
  }

  async deleteById(id) {
    const deletedContact = await ContactsModel.findByIdAndDelete(id);
    return deletedContact;
  }
};