import { Router } from "express";
import { ContactsController } from "../../controllers/contacts.controller.js";

const router = Router();

router.get('/', ContactsController.getAllContacts);
router.get('/:id', ContactsController.getContactById);
router.post('/', ContactsController.saveContact);
router.put('/:id', ContactsController.updateContact);
router.delete('/:id', ContactsController.deleteContact);

export default router;