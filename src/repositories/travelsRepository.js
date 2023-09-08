import { db } from "../database/database.js";

export async function newTravel(passengerId, flightId) {
    return await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId]);
};