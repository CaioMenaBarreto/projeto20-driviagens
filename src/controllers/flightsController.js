import httpStatus from "http-status";
import { flightsService } from "../services/flightsService.js";

export async function postFlight(req, res) {
    const { origin, destination, date } = req.body;
    try {
        await flightsService.postFlightService(origin, destination, date);
        res.sendStatus(httpStatus.CREATED);
    } catch(err) {
        console.log(err);
        if(err.type === "notFound") return res.status(httpStatus.NOT_FOUND).send(err.message);
        if(err.type === "Conflict") return res.status(httpStatus.CONFLICT).send(err.message);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}