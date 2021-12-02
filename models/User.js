const Sequelize = require("sequelize");
const db = require("../config/db.config");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  secondName: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  pdf: {
    type: Sequelize.STRING.BINARY,
  },
});
module.exports = User;
