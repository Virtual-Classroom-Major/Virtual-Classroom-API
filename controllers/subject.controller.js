const db = require("../models");
const Subject = db.subject;

exports.getAllSubjects = async (req, res) => {
  //   try {
  const subjects = await Subject.findAll({});
  res.status(200).send({
    data: subjects,
    success: true,
    message: "Subjects Found",
  });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(200).send({
  //       success: false,
  //       message: `Subjects not Found : ${err.message}`,
  //     });
  //   }
};
