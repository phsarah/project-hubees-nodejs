import BikeDatabase from "../data/bikeDatabase";
import { BikeInputDTO } from "./entities/bike";
import { CustomError } from "./error/customError";
import { IdGenerator } from "./services/idGenerator";

export class BikeBusiness{
    constructor(
        private idGenerator: IdGenerator,
        private bikeDatabase: BikeDatabase,
    ) { }

    public async registerBike(input: BikeInputDTO){

        if(!input.color){
            throw new CustomError(417, "It is necessary to inform the 'color' of the bike")
        }
        if(!input.numberOfGears){
            throw new CustomError(417, "It is necessary to inform the 'number of gears' of the bike")
        }
        if(!input.brand){
            throw new CustomError(417, "It is necessary to inform the 'brand' of the bike")
        }
        if(!input.model){
            throw new CustomError(417, "It is necessary to inform the 'model' of the bike")
        }
        if(!input.price){
            throw new CustomError(417, "It is necessary to inform the 'price' of the bike")
        }

        const id = this.idGenerator.generate()
        
        await this.bikeDatabase.insertBike(id, input)
    }
    public async editPrice(id: string, price: number){
        
        const productData = await this.bikeDatabase.selectById(id)

        if(!productData){
            throw new CustomError(404, "Bike id not found")
        }

        await this.bikeDatabase.updatePrice(id, price)
    }
}