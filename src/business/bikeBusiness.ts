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
            throw new CustomError(417, "It is necessary to inform the 'color' of the bike.");
        }
        if(!input.numberOfGears || 
            isNaN(input.numberOfGears)){
            throw new CustomError(417, "It is necessary to inform the 'number of gears' (in number) of the bike.");
        }
        if(!input.brand){
            throw new CustomError(417, "It is necessary to inform the 'brand' of the bike.");
        }
        if(!input.model){
            throw new CustomError(417, "It is necessary to inform the 'model' of the bike.");
        }
        if(!input.price || 
            isNaN(input.price)){
            throw new CustomError(417, "It is necessary to inform the 'price' (in number and point) of the bike.");
        }
        if(!input.quantity || 
            isNaN(input.quantity)){
            throw new CustomError(417, "It is necessary to inform the 'quantity' (in number) of the bike.");
        }
        
        const id = this.idGenerator.generate()
        
        await this.bikeDatabase.insertBike(id, input)
    }

    public async buy(id: string, quantity: number){

        if(!id){
            throw new CustomError(417, "It is necessary to inform the 'id' in params.");
        }
        if(isNaN(quantity)){
            throw new CustomError(417, "The 'quantity' entry must be of the numeric type.");
        }

        const productData = await this.bikeDatabase.selectById(id)

        if( productData.quantity < 1 || 
            productData.quantity < quantity){
            throw new CustomError(417, `Bike out of stock. ${productData.quantity} left in stock.`);
        }

        await this.bikeDatabase.updateQuantityInStock(id, quantity)

        return productData
    }

    public async editPrice(id: string, price: number){
        
        if(!id){
            throw new CustomError(417, "It is necessary to inform the 'id' in params.");
        }
        if(isNaN(price)){
            throw new CustomError(417, "The 'price' entry must be of the numeric type.");
        }

        await this.bikeDatabase.selectById(id)

        await this.bikeDatabase.updatePrice(id, price)
    }

    public async getById(id: string){
        
        if(!id){
            throw new CustomError(417, "It is necessary to inform the 'id' in params.");
        }
        const productData = await this.bikeDatabase.selectById(id)
        
        return productData
    }

    public async selectAll(){
    
        const listOfBikes = await this.bikeDatabase.selectAll()

        return listOfBikes
    }

    public async selectByColor(color: string){
        
        if(!color){
            throw new CustomError(417, "It is necessary to inform the 'color' of the bike.");
        }
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
        if(isNaN(minPrice || maxPrice)){
            throw new CustomError(417, "The entry must be of the number type.");
            
        }
        const listOfBikes = await this.bikeDatabase.selectAll()

        return listOfBikes.filter((bike: any) => {
            return bike.price < maxPrice && bike.price > minPrice
        })
    }
}