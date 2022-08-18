import { NextFunction, Request, Response } from "express";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `[${new Date().toLocaleString()}] ${req.ip} : ${req.method} ${req.path}`
  );
  next();
}

export default logger;
