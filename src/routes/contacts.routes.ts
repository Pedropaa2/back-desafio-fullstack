import { Router } from "express";
import { loginController } from "../controllers/login.controllers";
import {
  createContactController,
  deleteContactController,
  listClientContactsController,
  updateContactController,
} from "../controllers/contacts.controllers";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid";
import { contactSchemaUpdateRequest } from "../schemas/contacts.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid";
import ensureIsOwner from "../middlewares/ensureIsOnwer";

const contactRoutes: Router = Router();
contactRoutes.post("", ensureTokenIsValid, createContactController);
contactRoutes.patch(
  "/:id",
  ensureIsOwner,
  ensureDataIsValidMiddleware(contactSchemaUpdateRequest),
  updateContactController
);
contactRoutes.get("", ensureTokenIsValid, listClientContactsController);
contactRoutes.delete("/:id", ensureIsOwner, deleteContactController);
export default contactRoutes;
