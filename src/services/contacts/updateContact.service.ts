import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entitie";

const updateContactService = async (
  userData: Contact,
  id: number
): Promise<Contact | null> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const oldClientData: Contact | null = await contactRepository.findOneBy({
    id: id,
  });

  const newUserData = contactRepository.create({
    ...oldClientData,
    ...userData,
  });

  await contactRepository.save(newUserData);

  const returnUser: Contact | null = await contactRepository.findOne({
    where: {
      id: id,
    },
  });
  return returnUser;
};
export { updateContactService };
