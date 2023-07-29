import { z } from "zod";
import validator from "validator";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  telephone: z.string().refine(validator.isMobilePhone),
  createdAt: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
  clientId: true,
});
const contactSchemaResponse = contactSchema;
const contactsSchemaResponse = z.array(contactSchemaResponse);

const contactSchemaUpdate = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactSchemaUpdateRequest = contactSchemaUpdate.partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
  contactSchemaUpdateRequest,
  contactsSchemaResponse,
};
