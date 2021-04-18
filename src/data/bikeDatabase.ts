import { Bike, BikeInputDTO } from "../business/entities/bike";
import { CustomError } from "../business/error/customError";
import BaseDatabase from "./baseDatabase";
import { BikeModel } from "./model/bikeModel";

export default class BikeDatabase extends BaseDatabase{

    private static TABLE = "hubees_bike"

    public async insertBike(id: string, input: BikeInputDTO): Promise<void>{
        try{
            await BaseDatabase.connection
            .insert({
                id: id,
                color: input.color,
                number_of_gears: input.numberOfGears,
                brand: input.brand,
                model: input.model,
                price: input.price
            })
            .into(BikeDatabase.TABLE);
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage || e.message);
        }
    }
    public async selectById(id: string): Promise<Bike>{
        try{
            const bike = await BaseDatabase.connection
            .select("*")
            .from(BikeDatabase.TABLE)
            .where({ id })

            if(!bike[0]){
                throw new CustomError(404, `Unable to found Bike with input : ${id}`)
            }

            return BikeModel.toBikeModel(bike[0])
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage || e.message)
        }

    }
    public async updatePrice(id: string, price: number): Promise<void>{
        try{
            await BaseDatabase.connection.raw(`   
                UPDATE ${BikeDatabase.TABLE}
                SET price = ${price}
                WHERE id = '${id}'
            `)
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage || e.message)
        }
    }
}