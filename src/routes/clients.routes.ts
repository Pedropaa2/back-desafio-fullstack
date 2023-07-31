import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid";
import {
  clientSchemaRequest,
  clientSchemaUpdateRequest,
} from "../schemas/clients.schemas";
import {
  createClientController,
  deleteClientController,
  listClientController,
  listClientsController,
  updateClientController,
} from "../controllers/clients.controllers";
import ensureEmailIsValidMiddleware from "../middlewares/ensureEmailIsValid";
import ensureIsContactOwner from "../middlewares/ensureIsContactOnwer";
import ensureIsOwner from "../middlewares/ensureIsOwner";

const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  ensureDataIsValidMiddleware(clientSchemaRequest),
  ensureEmailIsValidMiddleware,
  createClientController
);

clientRoutes.get("", listClientsController);
clientRoutes.get("/:id", listClientController);

clientRoutes.patch(
  "/:id",
  ensureIsOwner,
  ensureDataIsValidMiddleware(clientSchemaUpdateRequest),
  updateClientController
);
clientRoutes.delete("/:id", ensureIsOwner, deleteClientController);
export default clientRoutes;
