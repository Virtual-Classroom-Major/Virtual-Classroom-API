module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.UUID,
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
      user_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      profile_img: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "users",
      freezeTableName: true,
    }
  );
};
