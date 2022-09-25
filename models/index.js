const config = require("../configs/db.js");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(config.uri);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);
db.emailVerified = require("./emailVerified")(sequelize, Sequelize);

module.exports = db;
