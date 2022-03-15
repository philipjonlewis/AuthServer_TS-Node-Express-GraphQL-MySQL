import "dotenv/config";

import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

import graphqlHTTP from "express-graphql";

import bodyParser from "body-parser";
import mysql from "mysql2";

const app: Application = express();

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  socketPath: "/tmp/mysql.sock",
});

connection.connect((err: any) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

app.get("/graphql", graphqlHTTP({
  
}));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server Live");
});
