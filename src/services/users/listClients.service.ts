import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entitie";

const listUsersService = async (): Promise<Client[]> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const totalUsers: Client[] = await userRepository.find({
    relations: {
      contacts: true,
    },
  });

  return totalUsers;
};
export { listUsersService };
