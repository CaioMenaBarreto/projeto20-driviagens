import { insertPassenger } from "../repositories/passengersRepository.js";

export async function postPassengersServices(firstName, lastName) {
    await insertPassenger(firstName, lastName);
};

export const passengerService = { postPassengersServices }