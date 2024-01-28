// Connect the react-app to the database. Youu must create a Sequelize instance. 
//This can be done by either passing the connection parameters separately to the Sequelize constructor
"use strict"

require("dotenv").config();
const { Sequelize } = require('sequelize');
const mysql = require("mysql2")

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    }
  );
  // Testing the connection
  const connectMysql = async () => {
    try {
      await sequelize.authenticate();
      console.log(`Successful connection to MySQL Database
  ${process.env.DB_NAME}`);
    } catch (error) {
      console.error("Unable to connect to MySQL database:", error);
      process.exit(1);
    }
  };
  module.exports = {
    Sequelize: sequelize,
  connectMysql
};