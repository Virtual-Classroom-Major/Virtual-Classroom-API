const config = require("../configs/db.js");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(config.uri);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);
db.studentUser = require("./student_user")(sequelize, Sequelize);
db.facultyUser = require("./faculty_user")(sequelize, Sequelize);
db.emailVerified = require("./emailVerified")(sequelize, Sequelize);
db.class = require("./class")(sequelize, Sequelize);
db.subject = require("./subject")(sequelize, Sequelize);

module.exports = db;
