import { Router } from "express";
import passengersRoute from "./passengersRoutes.js";
import citiesRoute from "./citiesRoutes.js";
import flightRoute from "./flightsRouter.js";

const router = Router();

router.use(passengersRoute);
router.use(citiesRoute);
router.use(flightRoute);

export default router;