import { ContactsRepository } from "../models/repositories/contacts.repository.js";
import { successResponse } from "../utils/api.utils.js";


const constactsRepository = new ContactsRepository();

export class ContactsController {
  static async getAllContacts(req, res, next) {
    try {
      const contacts = await constactsRepository.getAllContacts();
      const response = successResponse(contacts);
      res.status(200).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async getContactById(req, res, next) {
    const { id } = req.params;
    try {
      const contact = await constactsRepository.getContactById(id);
      if (!contact) {
        throw new Error('[NOT FOUND]');
      }
      const response = successResponse(contact);
      res.status(200).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async saveContact(req, res, next) {
    const payload = req.body;
    const { name, email } = payload;
    try {
      if (!name || !email) {
        throw new Error('[BAD REQUEST]');
      }
      const newContact = await constactsRepository.saveContact(payload);
      const response = successResponse(newContact);
      res.status(201).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async updateContact(req, res, next) {
    const { id } = req.params;
    const contactPayload = req.body;
    try {
      const updatedContact = await constactsRepository.updateContact(id, contactPayload);
      if (!updatedContact) {
        throw new Error('[NOT FOUND]');
      }
      const response = successResponse(updatedContact);
      res.status(200).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  static async deleteContact(req, res, next) {
    const { id } = req.params;
    try {
      const deletedContact = await constactsRepository.deleteContact(id);
      if (!deletedContact) {
        throw new Error('[NOT FOUND]');
      }
      const response = successResponse(deletedContact);
      res.status(200).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}