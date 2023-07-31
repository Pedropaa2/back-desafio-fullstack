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
import ensureIsContactOwner from "../middlewares/ensureIsContactOnwer";
import ensureIsOwner from "../middlewares/ensureIsOwner";
import ensureContactEmailIsValidMiddleware from "../middlewares/ensureContactEmailIsValid";

const contactRoutes: Router = Router();
contactRoutes.post(
  "",
  ensureContactEmailIsValidMiddleware,
  ensureTokenIsValid,
  createContactController
);
contactRoutes.patch(
  "/:id",
  ensureIsContactOwner,
  ensureDataIsValidMiddleware(contactSchemaUpdateRequest),
  updateContactController
);
contactRoutes.get("", ensureTokenIsValid, listClientContactsController);
contactRoutes.delete("/:id", ensureIsContactOwner, deleteContactController);
export default contactRoutes;
