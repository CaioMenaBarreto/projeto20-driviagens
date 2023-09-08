import { Router } from "express";
import schemaValidation from "../middlewares/schemaValidation.js";
import flightsSchema from "../schemas/flightsSchema.js";

const flightRouter = Router();

flightRouter.post("/flights", schemaValidation(flightsSchema));