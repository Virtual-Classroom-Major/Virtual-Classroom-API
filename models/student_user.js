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
        allowNull: false,
      },
      roll_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reg_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      batch: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stream: {
        type: Sequelize.STRING,
        allbatchowNull: false,
      },
      degree_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      parent_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "student_user",
      freezeTableName: true,
    }
  );
};
