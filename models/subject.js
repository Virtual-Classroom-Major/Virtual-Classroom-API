module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "subjects",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subject_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "subjects",
      freezeTableName: true,
    }
  );
};
