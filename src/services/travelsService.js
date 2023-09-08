import { newTravel } from "../repositories/travelsRepository.js"
import { getPassengerById } from "../repositories/passengersRepository.js";
import { getFlightById } from "../repositories/flightsRepository.js";

export async function postTravelService(passengerId, flightId) {
    const existingPassenger = await getPassengerById(passengerId);
    const existingFlight = await getFlightById(flightId);

    if (existingPassenger.rows.length === 0) {
        throw { type: "notFound", message: "Este passageiro não existe." };
    };

    if (existingFlight.rows.length === 0) {
        throw { type: "notFound", message: "Este vôo não existe." };
    };

    await newTravel(passengerId, flightId);
}

export const travelService = { postTravelService };