import { Router } from "express";
import { TestimonialController } from "../controllers/Testimonials.js";

const tRouter = Router()

tRouter.get('/', TestimonialController.getAllTestimonialPage)

tRouter.post('/', TestimonialController.createTestimonial)

export default tRouter