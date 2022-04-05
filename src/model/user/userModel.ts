import {  DataTypes } from "sequelize";
import { sequelize } from "../dbConnection";

export const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  { freezeTableName: true, tableName: "User" }
);
