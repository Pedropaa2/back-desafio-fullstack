import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Client } from "../entities/clients.entitie";
import { Contact } from "../entities/contacts.entitie";

const ensureContactEmailIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contact: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contactData = await contact.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (contactData && req.body.name) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default ensureContactEmailIsValidMiddleware;
