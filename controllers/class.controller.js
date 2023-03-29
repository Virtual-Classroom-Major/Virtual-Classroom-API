const { uuid } = require("uuidv4");
const db = require("../models");
const Classes = db.class;
const StudentUser = db.studentUser;
const Subject = db.subject;

//get class by id
exports.getClass = async (req, res) => {
  const { id } = req.params;
  const classes_by_Id = await Classes.findAll({
    where: {
      id: id,
    },
    include: Subject,
  });
  res.status(200).send({
    data: classes_by_Id,
    success: true,
    message: "Classes Found",
  });
};

//create class
exports.createClass = async (req, res) => {
  const {
    subject_id,
    start_time,
    duration,
    title,
    faculty_id,
    target_batch,
    target_section,
    color,
  } = req.body;

  console.log(req.body);
  try {
    const newClass = await Classes.create({
      id: uuid(),
      subjectId: subject_id,
      start_time,
      duration,
      title,
      faculty_id,
      target_batch,
      target_section,
      color,
    });
    res.status(200).send({
      data: newClass,
      success: true,
      message: "Class created",
    });
  } catch (err) {
    res.status(200).send({
      data: {},
      success: false,
      message: err.message,
    });
  }
};

//find class by faculty_id
exports.findClassByFacultyId = async (req, res) => {
  const { id } = req.params;

  // try {
  console.log(id);
  const classes_by_faculty_Id = await Classes.findAll({
    where: {
      faculty_id: id,
    },
    include: Subject,
  });
  // console.log("op", classes_by_faculty_Id);
  // const subject_of_class = await Subject.findAll({
  //   where: {
  //     id: classes_by_faculty_Id.subject_id,
  //   },
  // });

  res.status(200).send({
    data: classes_by_faculty_Id,
    success: true,
    message: "Classes Found",
  });
  // } catch (err) {
  //   res.status(200).send({
  //     data: {},
  //     success: false,
  //     message: err.message,
  //   });
  // }
};

//find classes by batch
exports.findClassByBatch = async (req, res) => {
  const { userId } = req.params;

  try {
    const studentDetails = await StudentUser.findOne({
      where: {
        parent_id: userId,
      },
    });

    const classes_by_batch = await Classes.findAll({
      where: {
        target_batch: studentDetails.batch,
      },
      include: Subject,
    });

    res.status(200).send({
      data: classes_by_batch,
      success: true,
      message: "Classes Found",
    });
  } catch (err) {
    res.status(200).send({
      data: {},
      success: false,
      message: err.message,
    });
  }
};

//delete class
exports.deleteClass = async (req, res) => {
  const { id } = req.params;

  try {
    await Classes.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      data: {},
      success: true,
      message: "Class deleted",
    });
  } catch (err) {
    res.status(200).send({
      data: {},
      success: false,
      message: err.message,
    });
  }
};

//edit class
