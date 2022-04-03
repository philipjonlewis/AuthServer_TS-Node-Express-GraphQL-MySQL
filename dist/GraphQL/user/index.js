"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_types_1 = require("./user.types");
const user_resolver_1 = require("./user.resolver");
exports.default = { typeDefs: user_types_1.typeDefs, resolvers: user_resolver_1.resolvers };
