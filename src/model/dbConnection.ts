import mysql from "mysql2/promise";

export const mysqlDbConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "authServer_01",
      // password: "your_password",
      port: 3306,
      // socketPath: "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock",
    });

    await connection.query("SELECT * FROM `auth`").then((result) => {
      console.log(result);
    });
    console.log("connected to the database");
  } catch (error) {
    console.error(error);
  }
};
