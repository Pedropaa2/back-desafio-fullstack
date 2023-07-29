import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entitie";
import { AppError } from "../../error";

const listClientService = async (clientId: number): Promise<Client> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await userRepository.findOne({
    where: {
      id: clientId,
    },
    relations: {
      contacts: true,
    },
  });

  console.log(client);

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  return client;
};
export { listClientService };
