import { db } from "../database/database.js"

export async function insertPassenger(firstName, lastName) {
    return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`, [firstName, lastName]);
}

export async function getPassengerById(passengerId){
    return await db.query(`SELECT * FROM passengers WHERE id = $1;`, [passengerId]);
}