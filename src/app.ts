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



const app: Application = express();

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

app.listen(3000, () => {
  console.log("Server Live");
});
