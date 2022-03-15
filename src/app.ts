import "dotenv/config";

import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

import bodyParser from "body-parser";
import mysql from "mysql2";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server Live");
});
