"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlDbConnection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const mysqlDbConnection = async () => {
    try {
        const connection = await promise_1.default.createConnection({
            host: "localhost",
            user: "root",
            database: "authServer_01",
            port: 3306,
        });
        const insertion = await connection.execute("INSERT INTO `users` (`_id`, `firstName`, `lastName`, `username`, `email`) VALUES (NULL, 'Nannon', 'Korapat', 'nanorapat', 'nanorapat@gmail.com');");
        console.log(insertion);
        console.log("connected to the database");
    }
    catch (error) {
        console.error(error);
    }
};
exports.mysqlDbConnection = mysqlDbConnection;
