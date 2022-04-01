export const resolvers = {
  Query: {
    users: (parent: any, args: any, context: any, info: any) => {
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
    user: (parent: any, args: any, context: any, info: any) => {
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
    createUser: async (parent: any, args: any, context: any, info: any) => {
      const { firstName, lastName, username, password, email } = args.input;
      console.log(args.input);
    },
  },
};
