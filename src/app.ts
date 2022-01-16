import express, { Application, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";

const app:Application = express();

app.get("/", (req:Request, res:Response, next:NextFunction) => {
  res.send("hjel;l0");
});

app.listen(3000);
