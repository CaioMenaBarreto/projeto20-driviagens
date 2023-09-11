import httpStatus from "http-status";
import { citiesService } from "../services/citiesService.js";

export async function postCities(req, res) {
    const { name } = req.body;
    await citiesService.postCitiesService(name);
    res.sendStatus(httpStatus.CREATED);
}