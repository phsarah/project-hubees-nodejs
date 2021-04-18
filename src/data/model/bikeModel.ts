import { Bike } from "../../business/entities/bike";

export class BikeModel{
    public static toBikeModel(bike: any): Bike {
        return new Bike(
            bike.color,
            bike.number_of_gears,
            bike.brand,
            bike.model,
            bike.price
        );
    }
}