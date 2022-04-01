import { makeExecutableSchema } from "@graphql-tools/schema";

import userSchema from "./user";

export const graphQLSchema = makeExecutableSchema({
  typeDefs: [userSchema.typeDefs],
  resolvers: [userSchema.resolvers],
});
