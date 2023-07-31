import { z } from "zod";
import {
  contactSchema,
  contactSchemaResponse,
  contactsSchemaResponse,
} from "./contacts.schemas";

const clientSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  createdAt: z.string(),
  password: z.string(),
  contacts: contactsSchemaResponse,
});

const clientSchemaRequest = clientSchema.omit({
  id: true,
  createdAt: true,
  contacts: true,
});
const clientSchemaRequestDois = clientSchema.omit({
  createdAt: true,
  contacts: true,
  password: true,
});
const clientSchemaResponse = clientSchema.omit({
  password: true,
});
const clientsSchemaResponse = z.array(clientSchemaResponse);

const clientSchemaUpdate = clientSchema.omit({
  id: true,
  createdAt: true,
});

const clientSchemaUpdateRequest = clientSchemaUpdate.partial();

export {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
  clientSchemaUpdate,
  clientSchemaUpdateRequest,
  clientsSchemaResponse,
  clientSchemaRequestDois,
};
