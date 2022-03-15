import "dotenv/config";

import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

<<<<<<< HEAD
import graphqlHTTP from "express-graphql";

=======
import mongoose = require("mongoose");
>>>>>>> d43a3b8639c483be67550ecc8fd19fdd665fdf25
import bodyParser from "body-parser";
import mysql from "mysql2";

const app: Application = express();

<<<<<<< HEAD
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

=======
>>>>>>> d43a3b8639c483be67550ecc8fd19fdd665fdf25
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server Live");
});
