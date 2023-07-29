import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import clientRoutes from "./routes/clients.routes";
import loginRoutes from "./routes/login.routes";
import contactRoutes from "./routes/contacts.routes";

const app = express();
app.use(express.json());
app.use("/clients", clientRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);

app.use(handleErrors);

export default app;
