import { NextFunction, Request, Response } from "express";


const errorHangler = (err: Error, req: Request, res: Response, next: NextFunction) => {    
    console.error(err);
    res.status(500).json({ error: err });
}

export default errorHangler;