"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_graphql_1 = require("express-graphql");
const express_1 = __importDefault(require("express"));
const mainGraphQLSchema_1 = require("./GraphQL/mainGraphQLSchema");
const dbConnection_1 = require("./model/dbConnection");
(0, dbConnection_1.mysqlDbConnection)();
const app = (0, express_1.default)();
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: mainGraphQLSchema_1.graphQLSchema,
    graphiql: true,
}));
app.get("/", (req, res, next) => {
    res.send("Hello");
});
app.listen(3000, () => {
    console.log("Server Live");
});
