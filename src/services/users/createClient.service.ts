import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entitie";
import { TClientRequest } from "../../interfaces/clients.interfaces";

const createUserService = async (userData: TClientRequest): Promise<Client> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const user: Client = userRepository.create(userData);

  await userRepository.save(user);

  return user;
};
export { createUserService };
