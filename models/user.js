module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      roll_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_verified: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
    },
    {
      tableName: "users",
      freezeTableName: true,
    }
  );
};
