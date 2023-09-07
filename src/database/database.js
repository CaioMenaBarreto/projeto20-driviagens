import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const configDatabase = {
    connectionString: process.env.DATABASE_URL
};

if(process.env.NODE_ENV === "production") configDatabase.ssl = true;

console.log("Conexão com o banco de dados bem-sucedida!");

export const db = new Pool(configDatabase);