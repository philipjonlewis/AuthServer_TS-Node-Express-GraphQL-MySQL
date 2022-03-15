import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

import bodyParser from "body-parser";

const app: Application = express();

const mysql = require("mysql2");
const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "07131992",
  socketPath: "/tmp/mysql.sock",
});

connection.connect((err: any) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hjel;l0");
});

app.listen(3000, () => {
  console.log("hello");
});
