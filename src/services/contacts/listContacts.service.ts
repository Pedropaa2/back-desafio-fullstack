import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entitie";
import { Contact } from "../../entities/contacts.entitie";
import { AppError } from "../../error";

const listContactsService = async (clientId: number): Promise<Client> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!client) {
    throw new AppError("Client not found!", 404);
  }
  console.log(client);
  return client;
};
export { listContactsService };
