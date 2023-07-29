import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactRequest } from "../../interfaces/contacts.interfaces";
import { Contact } from "../../entities/contacts.entitie";
import { Client } from "../../entities/clients.entitie";
import { AppError } from "../../error";

const createContactService = async (
  contactData: TContactRequest,
  id: number
): Promise<Contact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: id,
    },
  });
  if (!client) {
    throw new AppError(`Client with id ${id} not found.`, 404);
  }

  const createContact = contactRepository.create({
    ...contactData,
    client: client,
  });

  await contactRepository.save(createContact);

  return createContact;
};
export { createContactService };
