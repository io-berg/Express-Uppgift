import express from "express";
import { createOrder, getAllOrders, getOrderById } from "./order.controller";


const orderRouter = express.Router()
    .get("/", getAllOrders)
    .get("/:id", getOrderById)
    .post("/", createOrder);

export default orderRouter;