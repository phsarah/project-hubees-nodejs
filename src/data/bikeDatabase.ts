import { CustomError } from "../business/error/customError";
import BaseDatabase from "./baseDatabase"

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
}