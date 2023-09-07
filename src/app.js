import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./database/database.js";
import router from "./routes/indexRoutes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));