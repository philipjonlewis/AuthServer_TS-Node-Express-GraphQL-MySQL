"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        users: (parent, args, context, info) => {
            return [
                {
                    _id: 1,
                    firstName: "Philip",
                    lastName: "Lewis",
                    username: "philipjonlewis",
                    password: "password",
                    email: "philipjonlewis@gmail.com",
                },
                {
                    _id: 2,
                    firstName: "Jon",
                    lastName: "Echavez",
                    username: "jonechavez",
                    password: "password",
                    email: "jonechavez@gmail.com",
                },
            ];
        },
        user: (parent, args, context, info) => {
            return {
                _id: 1,
                firstName: "Philip",
                lastName: "Lewis",
                username: "philipjonlewis",
                password: "password",
                email: "philipjonlewis@gmail.com",
            };
        },
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            const { firstName, lastName, username, password, email } = args.input;
            console.log(args.input);
        },
    },
};
