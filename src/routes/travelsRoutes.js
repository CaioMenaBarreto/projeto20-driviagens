import { Router } from "express";
import schemaValidation from "../middlewares/schemaValidation.js";
import travelSchema from "../schemas/travelsSchema.js"
import { postTravels } from "../controllers/travelsController.js";

const travelRouter = Router();

travelRouter.post("/travels",schemaValidation(travelSchema), postTravels);

export default travelRouter;