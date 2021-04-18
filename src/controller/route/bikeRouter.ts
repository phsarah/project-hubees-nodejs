import express from "express";
import { BikeController } from "../bikeController";

export const bikeRouter = express.Router();

const bikeController = new BikeController();

bikeRouter.post("/create", bikeController.createBike);
