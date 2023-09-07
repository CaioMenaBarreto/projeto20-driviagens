import { Router } from "express";
import schemaValidation from "../middlewares/schemaValidation.js";
import passengersSchema from "../schemas/passengersSchema.js";
import { postPassengers } from "../controllers/passengersController.js";

const passengersRoute = Router();

passengersRoute.post("/passengers", schemaValidation(passengersSchema), postPassengers);

export default passengersRoute;