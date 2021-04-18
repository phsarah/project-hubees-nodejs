import knex from "knex";
import { Bike, BikeInputDTO } from "../business/entities/bike";
import { CustomError } from "../business/error/customError";
import BaseDatabase from "./baseDatabase";

export default class BikeDatabase extends BaseDatabase{

    private static TABLE = "hubees_bike"

    private static toBikeModel(bike: any): Bike {
        return new Bike(
            bike.color,
            bike.numberOfGears,
            bike.brand,
            bike.model,
            bike.price
        );
    }

    public async base(){
        try{
            await BaseDatabase.connection.raw(`
                SHOW TABLES;
            `)
        }
        catch(e){

        }
    }
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
        finally{
            BaseDatabase.destroyConnection()
        }
    }
    public async selectById(id: string): Promise<Bike>{
        try{
            const result = await BaseDatabase.connection
            .select("*")
            .from(BikeDatabase.TABLE)
            .where({
                id: id
            })

            return BikeDatabase.toBikeModel(result[0])
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage || e.message)
        }
        finally{
            BaseDatabase.destroyConnection()
        }
    }
    public async updatePrice(id: string, price: number): Promise<void>{
        try{
            await BaseDatabase.connection
            .update({
                price: price
            })
            .where({
                id: id
            })
            .from(BikeDatabase.TABLE)
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage || e.message)
        }
        finally{
            BaseDatabase.destroyConnection()
        }
    }
}