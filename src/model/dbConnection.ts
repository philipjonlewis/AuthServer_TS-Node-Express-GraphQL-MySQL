// import mysql from "mysql2/promise";

// import { asyncHandler } from "../utils/asyncHandler";

// export const mysqlDbConnection = async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       database: "authServer_01",
//       port: 3306,
//     });

//     // const insertion = await connection.execute(
//     //   "INSERT INTO `users` (`_id`, `firstName`, `lastName`, `username`, `email`) VALUES (NULL, 'Nannon', 'Korapat', 'nanorapat', 'nanorapat@gmail.com');"
//     // );

//     // console.log(insertion);

//     console.log("connected to the database");
//   } catch (error) {
//     console.error(error);
//   }
// };

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("authServer_01", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const mysqlDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
