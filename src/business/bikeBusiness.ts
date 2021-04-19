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
        
        await this.bikeDatabase.selectById(id)

        await this.bikeDatabase.updatePrice(id, price)
    }

    public async getById(id: string ){
    
        const productData = await this.bikeDatabase.selectById(id)
        
        return productData
    }

    public async selectAll(){
    
        const listOfBikes = await this.bikeDatabase.selectAll()

        return listOfBikes
    }

    public async selectByColor(color: string){
        
        const toUpperCaseColor = color && color.toUpperCase()

        const listOfBikes = await this.bikeDatabase.selectAll()

        return listOfBikes.filter((bike: any) => {
            const bikeColor = bike.color && bike.color.toUpperCase() 
            return bikeColor.match(toUpperCaseColor) 
        })
    }
    public async selectByPrice(minPrice: number, maxPrice: number){

        if(!minPrice || !maxPrice){
            throw new CustomError(417, "It is necessary to inform the 'minPrice' and 'maxPrice' that you want to filter.");
            
        }
        const listOfBikes = await this.bikeDatabase.selectAll()

        return listOfBikes.filter((bike: any) => {
            return bike.price < maxPrice && bike.price > minPrice
        })
    }
}