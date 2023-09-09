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
    };
};

export async function getFlights(req, res) {
    const {origin, destination} = req.query;
    const {'bigger-date': biggerDate, 'smaller-date': smallerDate} = req.query;
    try {
        const flights = await flightsService.getFligthsService(origin, destination, biggerDate, smallerDate);
        res.send(flights);
    } catch(err) {
        if(err.type === "badRequest") return res.status(httpStatus.BAD_REQUEST).send(err.message);
        console.log(err);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}