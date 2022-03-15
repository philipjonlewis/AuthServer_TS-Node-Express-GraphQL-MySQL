"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mysql = require("mysql");
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    // password: "07131992",
    // database: "information_schema",
});
connection.connect((err) => {
    if (err)
        throw err;
    console.log("Connected to MySQL Server!");
});
app.get("/", (req, res, next) => {
    res.send("hjel;l0");
});
app.listen(3000, () => {
    console.log("hello");
});
