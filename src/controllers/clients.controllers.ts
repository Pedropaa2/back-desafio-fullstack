import { Request, Response } from "express";
import {
  TClientRequest,
  TClientResponse,
  TClientsResponse,
} from "../interfaces/clients.interfaces";
import {
  clientSchemaRequest,
  clientSchemaRequestDois,
  clientSchemaResponse,
  clientsSchemaResponse,
} from "../schemas/clients.schemas";
import { createUserService } from "../services/users/createClient.service";

import { listUsersService } from "../services/users/listClients.service";
import { updateUsersService } from "../services/users/updateClient.service";
import { deleteUserService } from "../services/users/deleteClient.service";
import { Client } from "../entities/clients.entitie";
import { listClientService } from "../services/users/listClient.service";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TClientRequest = clientSchemaRequest.parse(req.body);

  const newUser: Client = await createUserService(userData);

  const response: TClientRequest = clientSchemaRequestDois.parse(newUser);

  return res.status(201).json(response);
};

const listClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: Client[] = await listUsersService();

  const parsedResponse: TClientsResponse =
    clientsSchemaResponse.parse(response);

  return res.status(200).json(parsedResponse);
};

const listClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const response = await listClientService(userId);

  const parsedResponse: TClientResponse = clientSchemaResponse.parse(response);

  return res.status(200).json(parsedResponse);
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const userId: number = Number(req.params.id);

  const newUserData = await updateUsersService(userData, userId);

  return res.status(200).json(clientSchemaResponse.parse(newUserData));
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  listClientsController,
  deleteClientController,
  createClientController,
  updateClientController,
  listClientController,
};
