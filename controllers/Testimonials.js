import { TestimonialModel } from "../models/Testimoniales.js"

export class TestimonialController{


    static getAllTestimonialPage = async (req,res) => {
        try{
            const testimonials = await TestimonialModel.getAll();

            res.render('testimoniales', {
                page:'Testimoniales',
                testimonials
            });
        }catch(err){
            console.log(err)
        }
    } 

    static createTestimonial = async (req,res) => {
        const { nombre, email, mensaje } = req.body;

        const badRequest = [nombre,email,mensaje].some(value => value.trim() === "");

        if(badRequest){

            const testimonials = await TestimonialModel.getAll();

            res.render('testimoniales', {
                page:'Testimoniales',
                testimonials,
                err: "Todos los Campos son obligatorios.",
                nombre,
                email,
                mensaje
            });

        } else {

            try{
                const result = await TestimonialModel.create({nombre,email,mensaje});
                if(result){
                    res.redirect('/testimoniales')
                };
            }catch(err){
                console.log(err)
            }

        }
    }
}