import { Router } from "express";
import schemaValidation from "../middlewares/schemaValidation.js";
import citiesSchema from "../schemas/citiesSchema.js";
import { postCities } from "../controllers/citiesController.js";

const citiesRoute = Router();

citiesRoute.post("/cities", schemaValidation(citiesSchema), postCities);

export default citiesRoute;