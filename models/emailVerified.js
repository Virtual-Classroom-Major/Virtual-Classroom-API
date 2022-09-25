module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "verifyEmail",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
      },
      is_used: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
    },
    {
      tableName: "verifyEmail",
      freezeTableName: true,
    }
  );
};
