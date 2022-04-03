"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphQLSchema = void 0;
const schema_1 = require("@graphql-tools/schema");
const user_1 = __importDefault(require("./user"));
exports.graphQLSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [user_1.default.typeDefs],
    resolvers: [user_1.default.resolvers],
});
