module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "attendance",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      studentId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      classId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "attendance",
      freezeTableName: true,
    }
  );
};
