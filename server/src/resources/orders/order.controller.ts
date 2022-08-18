import { Request, Response } from "express";

function getAllOrders(req: Request, res: Response) {
    res.send("get all orders");
}

function getOrderById(req: Request, res: Response) {
    res.send("get order by id");
}

function createOrder(req: Request, res: Response) {
    res.send("create order");
}

export {
    getAllOrders,
    getOrderById,
    createOrder,
};

