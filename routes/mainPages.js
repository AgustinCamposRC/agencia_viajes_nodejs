import { Router } from "express";
import { MainPageController } from "../controllers/Paginator.js";

const pagesRoute = Router()


pagesRoute.get('/', MainPageController.getHomePage);

pagesRoute.get('/nosotros', MainPageController.getAboutUsPage);

export default pagesRoute;
