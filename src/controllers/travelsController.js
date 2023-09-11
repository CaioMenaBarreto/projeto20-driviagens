import httpStatus from "http-status";
import { travelService } from "../services/travelsService.js";

export async function postTravels(req, res) {
    const { passengerId, flightId } = req.body;
    await travelService.postTravelService(passengerId, flightId);
    res.sendStatus(httpStatus.CREATED);
}