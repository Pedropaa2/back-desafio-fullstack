import { z } from "zod";
import {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
  clientSchemaUpdate,
  clientsSchemaResponse,
} from "../schemas/clients.schemas";

type TClient = z.infer<typeof clientSchema>;

type TClientRequest = z.infer<typeof clientSchemaRequest>;

type TClientsResponse = z.infer<typeof clientsSchemaResponse>;

type TClientResponse = z.infer<typeof clientSchemaResponse>;

type TClientUpdate = z.infer<typeof clientSchemaUpdate>;

export {
  TClient,
  TClientRequest,
  TClientResponse,
  TClientUpdate,
  TClientsResponse,
};
