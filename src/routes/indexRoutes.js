import { Router } from "express";
import passengersRoute from "./passengersRoutes.js";
import citiesRoute from "./citiesRoutes.js";

const router = Router();

router.use(passengersRoute);
router.use(citiesRoute);

export default router;