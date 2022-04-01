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

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  // password: "your_password",
  port: 3306,
  socketPath: "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock",
});

console.log(connection);

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server Live");
});
