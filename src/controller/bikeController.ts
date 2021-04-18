import { Request, Response } from "express";
import { BikeBusiness } from "../business/bikeBusiness";
import { BikeInputDTO } from "../business/entities/bike";
import { IdGenerator } from "../business/services/idGenerator";
import BikeDatabase from "../data/bikeDatabase";
import path from 'path'

const bikeBusiness = new BikeBusiness(
    new IdGenerator(),
    new BikeDatabase()
)

export class BikeController{
    public async base(req: Request, res: Response){
        try{
            res.sendFile(path.join(__dirname, "../views/index.html"))
        }
        catch(e){
            res
            .status(400)
            .send({ error: e.message });
        }
    }
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
    public async editPrice(req: Request, res: Response){
        try{
            const { id } = req.params
            const  { price } = req.body

            await bikeBusiness.editPrice(id, price)
            
            res
            .status(200)
            .send("Price edited successfully!")
        }   
        catch(e){
            res
            .status(400)
            .send({ error: e.message })
        }
    }
}