import { Router } from "express";
import schemaValidation from "../middlewares/schemaValidation.js";
import flightsSchema from "../schemas/flightsSchema.js";
import { postFlight, getFlights } from "../controllers/flightsController.js";
import querySchema from "../schemas/querySchema.js";

const flightRoute = Router();

flightRoute.post("/flights", schemaValidation(flightsSchema), postFlight);
flightRoute.get("/flights", getFlights);

export default flightRoute;