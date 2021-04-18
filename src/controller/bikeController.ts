import { Request, Response } from "express";
import { BikeBusiness } from "../business/bikeBusiness";
import { IdGenerator } from "../business/services/idGenerator";
import BikeDatabase from "../data/bikeDatabase";

const bikeBusiness = new BikeBusiness(
    new IdGenerator(),
    new BikeDatabase()
)

export class BikeController{
    public async createBike(req: Request, res: Response){
        try{
            const input: BikeInputDTO = {
                color: req.body.color,
                numberOfGears: req.body.numberOfGears,
                brand: req.body.brand,
                model: req.body.model,
                price: req.body.price
            }
            await bikeBusiness.registerBike(input)

            res
            .status(201)
            .send("Bike created successfully!");
        }
        catch(e){
            res
            .status(400)
            .send({ error: e.message });
        }
    }
}