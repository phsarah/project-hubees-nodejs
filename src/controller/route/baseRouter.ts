import express from "express";
import { BikeController } from "../bikeController";

export const baseRouter = express.Router();

const bikeController = new BikeController();

baseRouter.get("/", bikeController.base)
