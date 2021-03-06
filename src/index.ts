import cors from "cors";
import { AddressInfo } from "net";
import express, { Express } from "express";
import { baseRouter } from "./controller/route/baseRouter";
import { bikeRouter } from "./controller/route/bikeRouter";

const app: Express = express();
app.use(express.json());
app.use(cors());

// app.use("/", baseRouter)
app.use("/bike", bikeRouter);


const server = app.listen(3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});