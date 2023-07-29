import { Request, Response } from "express";

import {
  TContactRequest,
  TContactResponse,
} from "../interfaces/contacts.interfaces";
import {
  contactSchemaRequest,
  contactSchemaResponse,
  contactsSchemaResponse,
} from "../schemas/contacts.schemas";
import { Contact } from "../entities/contacts.entitie";
import { createContactService } from "../services/contacts/createContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TContactRequest = contactSchemaRequest.parse(req.body);

  const id = res.locals.token.id;

  const newContact = await createContactService(contactData, id);

  const response: TContactResponse = contactSchemaResponse.parse(newContact);

  return res.status(201).json(response);
};
const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData = req.body;
  const userId: number = Number(req.params.id);

  const newUserData = await updateContactService(contactData, userId);

  return res.status(200).json(newUserData);
};
const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);

  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  updateContactController,
  deleteContactController,
};
