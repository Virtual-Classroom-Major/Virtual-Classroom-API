const db = require("../models");
const Attendance = db.attendance;
const User = db.user;
const { uuid } = require("uuidv4");

exports.fetchAttendanceByClassId = async (req, res) => {
  const { classId } = req.params;

  const data = await Attendance.findAll({
    where: {
      classId: classId,
    },
    include: User,
  });

  res.status(200).send({
    data: data,
    message: "Attendance found",
    success: true,
  });
};

exports.fetchAttendanceByStudentId = async (req, res) => {
  const { studentId } = req.params;
  const data = await Attendance.findAll({
    where: {
      studentId: studentId,
    },
  });

  res.status(200).send({
    data: data,
    message: "Attendance found",
    success: true,
  });
};

exports.markAttendance = async (req, res) => {
  const { studentId, classId } = req.params;

  const data = await Attendance.create({
    id: uuid(),
    studentId: studentId,
    classId: classId,
    userId: studentId,
  });

  res.status(200).send({
    data: data,
    message: "Attendance marked",
    success: true,
  });
};
