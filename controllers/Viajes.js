import { TravelModel } from "../models/Viajes.js"

export class TravelController{

    static getAllTravelsPage = async (req, res) => {
        const travels = await TravelModel.getAll()
        res.render('viajes', {
            page:'Proximos Viajes',
            travels
        });
    }

    static getTravelBySlug = async (req, res) => {
        const { slug } = req.params
        try{
           const travel = await TravelModel.getBySlug(slug);
           res.render('viaje',{
                page:'Informacion Viaje',
                travel
           });
        } catch(e) {
            console.log(e);
        };
    };
}

