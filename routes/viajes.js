import { Router } from "express";
import { TravelController } from "../controllers/Viajes.js";

const TravelRouter = Router();

TravelRouter.get('/', TravelController.getAllTravelsPage)

TravelRouter.get('/:slug', TravelController.getTravelBySlug)


export default TravelRouter