"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.typeDefs = (0, graphql_tag_1.default) `
  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    createUser(input: UserMutation): User
    updateUser(input: UserMutation): User
    # deleteTask(input: _id:ID): String
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
  }

  input UserMutation {
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
  }
`;
