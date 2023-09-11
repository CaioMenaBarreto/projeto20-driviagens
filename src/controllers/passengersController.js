import httpStatus from "http-status";
import { passengerService } from "../services/passengersService.js";

export async function postPassengers(req, res) {
    const { firstName, lastName } = req.body;

    await passengerService.postPassengersServices(firstName, lastName);

    res.sendStatus(httpStatus.CREATED);
};