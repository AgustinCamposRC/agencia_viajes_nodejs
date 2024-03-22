import Sequelize from 'sequelize'
import db from '../config/db.js'


export const Travel = db.define('viajes',{
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
})

export class TravelModel{
    static async getAll(){
        const viajes = await Travel.findAll();
        return viajes;
    }

    static async getBySlug(slug){
        const travel = await Travel.findOne({where: {slug}})
        return travel
    }

    static async getLast3(){
        const viajes = await Travel.findAll({limit:3});
        return viajes;
    }
}

