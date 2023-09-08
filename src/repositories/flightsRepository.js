import { db } from "../database/database.js";

export async function verifyOriginById(origin){
    return await db.query(`SELECT * FROM cities WHERE id = $1;`, [origin]);
};

export async function verifyDestinationById(destination){
    return await db.query(`SELECT * FROM cities WHERE id = $1;`, [destination]);
};

export async function insertFlight(origin, destination, date){
    return await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
};

export async function getFlightById(flightId){
    return await db.query(`SELECT * FROM flights WHERE id = $1;`, [flightId]);
}