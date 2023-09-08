import httpStatus from "http-status";
import { passengerService } from "../services/passengersService.js";

export async function postPassengers(req, res) {
    try {
        const { firstName, lastName } = req.body;

        await passengerService.postPassengersServices(firstName, lastName);

        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        console.log(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};