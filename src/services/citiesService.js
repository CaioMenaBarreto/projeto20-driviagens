import { db } from "../database/database.js";
import httpStatus from "http-status";
import { getCityByName, insertCity } from "../repositories/citiesRepository.js";

export async function postCitiesService(name) {
    const existingCity = await getCityByName(name);
    if (existingCity.rows.length > 0) {
        throw { type: "Conflict", message: "Está cidade já existe" };
    }
    await insertCity(name);
}

export const citiesService = { postCitiesService };