import { Bike, BikeInputDTO, BikeOutputDTO } from "../business/entities/bike";
import { CustomError } from "../business/error/customError";
import BaseDatabase from "./BaseDatabase";
import { BikeModel } from "./model/bikeModel";

export default class BikeDatabase extends BaseDatabase{

    private static TABLE = "hubeecicly_bike"

    public async insertBike(id: string, input: BikeInputDTO): Promise<void>{
        try{
            await BaseDatabase.connection
            .insert({
                id: id,
                color: input.color,
                number_of_gears: input.numberOfGears,
                brand: input.brand,
                model: input.model,
                price: input.price,
                quantity: input.quantity
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
                throw new CustomError(404, `Unable to found Bike with input: ${id}`);
            }

            return BikeModel.toBikeModel(bike[0])
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage || e.message)
        }
    }
    public async selectAll(): Promise<BikeOutputDTO[]>{
        try{
            const bikes = await BaseDatabase.connection
                .select("*")
                .from(BikeDatabase.TABLE)

            if(!bikes.length){
                throw new CustomError(404, "The bicycle list is empty.");
            }

            return bikes.map((bike: any) => {
                return{
                    id: bike.id,
                    color: bike.color,
                    numberOfGears: bike.number_of_gears,
                    brand: bike.brand,
                    model: bike.model,
                    price: bike.price,
                    quantity: bike.quantity
                }
            })        
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage ||e.message);
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
    public async updateQuantityInStock(id: string, quantity: number): Promise<void>{
        try{
            await BaseDatabase.connection.raw(`
                UPDATE ${BikeDatabase.TABLE}
                SET quantity = quantity - ${quantity}
                WHERE id = '${id}'
            `)
        }
        catch(e){
            throw new CustomError(500, e.sqlMessage || e.message)
        }
    }
}