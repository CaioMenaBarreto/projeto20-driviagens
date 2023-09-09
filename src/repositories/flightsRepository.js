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
};

export async function getAllflights(){
    return await db.query(`SELECT * FROM flights ORDER BY date ASC;`);
};

export async function getDestinationFlights(destination) {
    return await db.query(`SELECT * FROM flights WHERE destination = $1 ORDER BY date ASC;`, [destination]);
};

export async function getOriginFlights(origin) {
    return await db.query(`SELECT * FROM flights WHERE origin = $1 ORDER BY date ASC;`, [origin]);
};

export async function getWayFlights(origin, destination){
    return await db.query(`SELECT * FROM flights WHERE origin = $1 AND destination = $2 ORDER BY date ASC;`, [origin, destination]);
}