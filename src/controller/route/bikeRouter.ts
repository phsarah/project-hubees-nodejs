import express from "express";
import { BikeController } from "../bikeController";

export const bikeRouter = express.Router();

const bikeController = new BikeController();

bikeRouter.get("/all", bikeController.getAll);
bikeRouter.post("/create", bikeController.createBike);
bikeRouter.put("/edit/:id", bikeController.editPrice);
bikeRouter.get("/:id", bikeController.getById);
