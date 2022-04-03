import mysql from "mysql2/promise";

export const mysqlDbConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "authServer_01",
      port: 3306,
    });

    // const insertion = await connection.execute(
    //   "INSERT INTO `users` (`_id`, `firstName`, `lastName`, `username`, `email`) VALUES (NULL, 'Nannon', 'Korapat', 'nanorapat', 'nanorapat@gmail.com');"
    // );

    // console.log(insertion);

    console.log("connected to the database");
  } catch (error) {
    console.error(error);
  }
};
