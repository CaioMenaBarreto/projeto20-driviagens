import { db } from "../database/database.js";

export async function getCityByName(name){
    return await db.query(`SELECT * FROM cities WHERE name = $1;`, [name]);
}

export async function insertCity(name){
    return await db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
};