import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entitie";

const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const user: Client | null = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.remove(user!);
};
export { deleteUserService };
