import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entitie";

const updateUsersService = async (
  userData: Client,
  id: number
): Promise<Client | null> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const oldUserData: Client | null = await userRepository.findOneBy({
    id: id,
  });

  const newUserData = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const returnUser: Client | null = await userRepository.findOneBy({
    id: id,
  });

  return returnUser;
};
export { updateUsersService };
