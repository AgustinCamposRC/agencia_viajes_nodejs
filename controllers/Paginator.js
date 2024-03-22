import { TravelModel } from "../models/Viajes.js"
import { TestimonialModel } from "../models/Testimoniales.js"

export class MainPageController{

    static getHomePage = async (req, res) => {
       
        try{
            const results = await Promise.all( [TravelModel.getLast3(), TestimonialModel.getLast3()] )
            console.log(results)
            res.render('inicio', {
                page:'Inicio',
                clase:'home',
                travels:results[0],
                testimonials:results[1]
            });
        } catch(e) {
            console.log(e);
        };
    }

    static getAboutUsPage = async (req, res) => {
        res.render('nosotros', {page:'Nosotros'});
    };
}