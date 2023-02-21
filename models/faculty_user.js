module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "faculty_user",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      parent_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      employee_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      department: {
        type: Sequelize.STRING,
        allbatchowNull: true,
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      date_of_joining: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      spouse_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "faculty_user",
      freezeTableName: true,
    }
  );
};
