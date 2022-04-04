import "dotenv/config";
import { graphqlHTTP } from "express-graphql";

import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

import { graphQLSchema } from "./GraphQL/mainGraphQLSchema";

import { mysqlDbConnection } from "./model/dbConnection";
import { errorMiddleware } from "./middleware/error/errorMiddleware";

//enables using dotenv files
import dotenv from "dotenv";
dotenv.config();

mysqlDbConnection();

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
