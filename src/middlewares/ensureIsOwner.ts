import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { verify } from "jsonwebtoken";
import { Client } from "../entities/clients.entitie";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

const ensureIsOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }
  verify(
    token,
    String(process.env.SECRET_KEY),
    async (err: any, decoded: any) => {
      if (err) {
        throw new AppError(err.message, 401);
      }

      res.locals.token = {
        id: decoded?.sub,
      };

      const userRepository: Repository<Client> =
        AppDataSource.getRepository(Client);

      if (decoded.sub != req.params.id) {
        return res.status(400).json({ message: "Not client owner!" });
      }

      return next();
    }
  );
};

export default ensureIsOwner;
