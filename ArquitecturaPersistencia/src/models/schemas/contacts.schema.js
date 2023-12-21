import { Schema, model } from "mongoose";

const contactsCollection = "contacts";
const contactsSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  full_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, },
  active: { type: Boolean, required: true, }
});

const ContactsModel = model(contactsCollection, contactsSchema);
export default ContactsModel;