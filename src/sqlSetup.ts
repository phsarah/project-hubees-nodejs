import BaseDatabase from "./data/baseDatabase";

export class MySqlSetup extends BaseDatabase{
    public async createTable(): Promise<void>{
        try{
            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS hubees_bike
                (
                    id VARCHAR(255) PRIMARY KEY NOT NULL,
                    color VARCHAR(255) NOT NULL,
                    number_of_gears INT NOT NULL, 
                    brand VARCHAR(255) NOT NULL,
                    model VARCHAR(255) NOT NULL,
                    price DEC(15,2) NOT NULL 
                )
            `)
            console.log("Table successfully created! :D")
        }
        catch(e){
            throw new Error(e.sqlMessage || e.message)
        }
    }
}

new MySqlSetup().createTable()
