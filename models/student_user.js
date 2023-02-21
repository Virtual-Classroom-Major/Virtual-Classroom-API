module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "student_user",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      parent_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      roll_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reg_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      batch: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      stream: {
        type: Sequelize.STRING,
        allbatchowNull: true,
      },
      degree_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      parent_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "student_user",
      freezeTableName: true,
    }
  );
};
