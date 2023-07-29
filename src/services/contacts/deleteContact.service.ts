import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entitie";

const deleteContactService = async (userId: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({
    id: userId,
  });

  await contactRepository.remove(contact!);
};
export { deleteContactService };
