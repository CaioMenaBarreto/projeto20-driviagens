import { Router } from "express";
import passengersRoute from "./passengersRoutes.js";

const router = Router();

router.use(passengersRoute);

export default router;