import { Router } from "express";
import passengersRoute from "./passengersRoutes.js";
import citiesRoute from "./citiesRoutes.js";
import flightRoute from "./flightsRouter.js";
import travelRouter from "./travelsRoutes.js";

const router = Router();

router.use(passengersRoute);
router.use(citiesRoute);
router.use(flightRoute);
router.use(travelRouter);

export default router;