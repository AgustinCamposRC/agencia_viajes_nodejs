import Sequelize from 'sequelize'
import db from '../config/db.js'


const Testimonial = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})

export class TestimonialModel{
    static async getAll(){
        const testimonials = await Testimonial.findAll();
        return testimonials;
    }


    static async create(dataObj){
        await Testimonial.create(dataObj);
        return true;
    }

    static async getLast3(){
        const quotes = await Testimonial.findAll({limit:3});
        return quotes;
    }

}

