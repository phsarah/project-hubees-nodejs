export class Bike {
    constructor(
       public readonly color: string,
       public readonly numberOfGears: number,
       public readonly brand: string,
       public readonly model: string,
       public readonly price: number,
       public readonly quantity: number
    ) { }
 }


export interface BikeInputDTO{
    color: string,
    numberOfGears: number,
    brand: string,
    model: string,
    price: number,
    quantity: number
}

export interface BikeOutputDTO{
    id: string,
    color: string,
    numberOfGears: number,
    brand: string,
    model: string,
    price: number,
    quantity: number
}