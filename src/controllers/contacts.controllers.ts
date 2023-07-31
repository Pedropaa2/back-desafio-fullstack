import { Request, Response } from "express";

import {
  TContactRequest,
  TContactResponse,
  TContactUpdate,
} from "../interfaces/contacts.interfaces";
import {
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
  contactsSchemaResponse,
} from "../schemas/contacts.schemas";
import { Contact } from "../entities/contacts.entitie";
import { createContactService } from "../services/contacts/createContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";
import { Client } from "../entities/clients.entitie";
import { TClientResponse } from "../interfaces/clients.interfaces";
import { clientSchemaResponse } from "../schemas/clients.schemas";

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

  const response: TContactResponse = contactSchemaResponse.parse(newUserData);

  return res.status(200).json(response);
};
const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId: number = parseInt(req.params.id);

  await deleteContactService(contactId);

  return res.status(204).send();
};
const listClientContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = res.locals.token.id;
  const response: Client = await listContactsService(id);

  const parsedResponse: TClientResponse = clientSchemaResponse.parse(response);

  return res.status(200).json(parsedResponse);
};

export {
  createContactController,
  updateContactController,
  deleteContactController,
  listClientContactsController,
};
