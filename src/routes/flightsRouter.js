import { Router } from "express";
import schemaValidation from "../middlewares/schemaValidation.js";
import flightsSchema from "../schemas/flightsSchema.js";
import { postFlight } from "../controllers/flightsController.js";

const flightRoute = Router();

flightRoute.post("/flights", schemaValidation(flightsSchema), postFlight);

export default flightRoute;