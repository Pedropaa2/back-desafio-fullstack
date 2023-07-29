import { z } from "zod";

import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
  contactsSchemaResponse,
} from "../schemas/contacts.schemas";

type TContact = z.infer<typeof contactSchema>;

type TContactRequest = z.infer<typeof contactSchemaRequest>;

type TContactsResponse = z.infer<typeof contactsSchemaResponse>;

type TContactResponse = z.infer<typeof contactSchemaResponse>;

type TContactUpdate = z.infer<typeof contactSchemaUpdate>;

export {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactUpdate,
  TContactsResponse,
};
