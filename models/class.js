module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "classes",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      subject_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allbatchowNull: false,
      },
      faculty_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      target_batch: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      target_section: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
    },
    {
      tableName: "classes",
      freezeTableName: true,
    }
  );
};
