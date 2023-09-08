import httpStatus from "http-status";
import { travelService } from "../services/travelsService.js";

export async function postTravels(req, res) {
    const {passengerId, flightId} = req.body;
    try{
        await travelService.postTravelService(passengerId, flightId);
        res.sendStatus(httpStatus.CREATED);
    } catch(err) {
        console.log(err);
        if(err.type === "notFound") return res.status(httpStatus.NOT_FOUND).send(err.message);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}