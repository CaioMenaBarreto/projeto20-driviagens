import httpStatus from "http-status";
import { citiesService } from "../services/citiesService.js";

export async function postCities(req, res) {
    const { name } = req.body;
    try{
        await citiesService.postCitiesService(name);
        res.sendStatus(httpStatus.CREATED);
    } catch(err) {
        console.log(err);
        if(err.type === "Conflict") return res.status(httpStatus.CONFLICT).send(err.message);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
}