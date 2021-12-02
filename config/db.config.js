require("dotenv").config();
const { Sequelize } = require("sequelize");
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
);
module.exports = db;
