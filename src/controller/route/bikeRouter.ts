import express from "express";
import { BikeController } from "../bikeController";

export const bikeRouter = express.Router();

const bikeController = new BikeController();

bikeRouter.get("/all", bikeController.getAll);

bikeRouter.post("/create", bikeController.create);

bikeRouter.put("/edit/:id", bikeController.editPrice);

bikeRouter.get("/filter/price", bikeController.getBikesByPrice);

bikeRouter.get("/filter/color", bikeController.getBikesByColor);

bikeRouter.get("/:id", bikeController.getDataById);

bikeRouter.delete("/buy/:id", bikeController.buy);