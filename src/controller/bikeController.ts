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
    public async basePage(req: Request, res: Response){
        try{
            res
            .status(200)
            .sendFile(path.join(__dirname, "../views/index.html"))
        }
        catch(e){
            res
            .status(400)
            .send({ error: e.message });
        }
    }
    public async create(req: Request, res: Response){
        try{
            const input: BikeInputDTO = {
                color: req.body.color,
                numberOfGears: req.body.numberOfGears,
                brand: req.body.brand,
                model: req.body.model,
                price: req.body.price,
                quantity: req.body.quantity
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
    public async getDataById(req: Request, res: Response){
        try{
            const { id } = req.params

            const data = await bikeBusiness.getById(id)
            
            res
            .status(202)
            .send({ data })
        }   
        catch(e){
            res
            .status(400)
            .send({ error: e.message })
        }
    }
    public async getAll(req: Request, res: Response){
        try{

            const listOfBikes = await bikeBusiness.selectAll()
            
            res
            .status(200)
            .send({ listOfBikes })
        }   
        catch(e){
            res
            .status(400)
            .send({ error: e.message })
        }
    }
    public async getBikesByColor(req: Request, res: Response){
        try{
            
            const { bikeColor } = req.body

            const filteredBikeList = await bikeBusiness.selectByColor(bikeColor)

            res
            .status(200)
            .send({ filteredBikeList })
        }
        catch(e){
            res
            .status(400)
            .send({ error: e.message })
        }
    }
    public async getBikesByPrice(req: Request, res: Response){
        try{

            const { minPrice, maxPrice } = req.body

            const filteredBikeList = await bikeBusiness.selectByPrice(minPrice, maxPrice)

            res
            .status(200)
            .send({ filteredBikeList })
        }
        catch(e){
            res
            .status(400)
            .send({ error: e.message })
        }
    }

    public async buy(req: Request, res: Response){
        try{

            const { id } = req.params

            const { quantity } = req.body

            const productData = await bikeBusiness.buy(id, quantity)

            res
            .status(200)
            .send(`Successful purchase of the ${productData.brand} ${productData.model}`)
        }
        catch(e){
            res
            .status(400)
            .send({ error: e.message })
        }
    }
}