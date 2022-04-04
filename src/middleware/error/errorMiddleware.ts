import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(404).send("error");
};
