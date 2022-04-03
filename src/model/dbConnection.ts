import mysql from "mysql2/promise";

export const mysqlDbConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "authServer_01",
      port: 3306,
    });

    console.log("connected to the database");

    return connection;
  } catch (error) {
    console.error(error);
  }
};
