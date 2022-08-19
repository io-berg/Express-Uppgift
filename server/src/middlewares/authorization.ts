import { NextFunction, Request, Response } from "express";

const authorize = (req: Request, res: Response, next: NextFunction) => {
  const isAdmin = true; // TODO: implement authorization logic
  if (isAdmin) {
    next();
    return;
  }

  res.status(401).json({ message: "Unauthorized" });
};

export default authorize;
