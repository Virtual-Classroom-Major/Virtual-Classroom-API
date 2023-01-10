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
        allowNull: false,
      },
      employee_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING,
        allbatchowNull: false,
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date_of_joining: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      spouse_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "faculty_user",
      freezeTableName: true,
    }
  );
};
