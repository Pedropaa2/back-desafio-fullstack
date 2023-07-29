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
  ensureDataIsValidMiddleware(clientSchemaUpdateRequest),
  updateClientController
);
clientRoutes.delete("/:id", deleteClientController);
export default clientRoutes;
