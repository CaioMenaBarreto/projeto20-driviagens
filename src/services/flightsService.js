import { verifyOriginById, verifyDestinationById, insertFlight } from "../repositories/flightsRepository.js";

export async function postFlightService(origin, destination, date) {
    const existingOrigin = await verifyOriginById(origin);
    if (existingOrigin.rows.length === 0) {
        throw { type: "notFound", message: "Está cidade de origem não existe." }
    };

    const existingDestination = await verifyDestinationById(destination);
    if (existingDestination.rows.length === 0) {
        throw { type: "notFound", message: "Está cidade de destino não existe." }
    };

    if (origin === destination) {
        throw { type: "Conflict", message: "Você não pode ter a origem e o destino na mesma cidade." };
    };

    await insertFlight(origin, destination, date);
};

export const flightsService = { postFlightService };