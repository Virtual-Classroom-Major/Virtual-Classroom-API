const db = require("../models");
const Attendance = db.attendance;
const Classes = db.class;
const User = db.user;
const StudentUser = db.studentUser;
const { uuid } = require("uuidv4");
const { convertToObject } = require("../utils/ConvertToObject");

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

  const getClass = await Classes.findOne({
    where: {
      id: classId,
    },
  });
  const data = await Attendance.create({
    id: uuid(),
    studentId: studentId,
    classId: classId,
    userId: studentId,
    subject_id: getClass.subjectId,
  });

  res.status(200).send({
    data: data,
    message: "Attendance marked",
    success: true,
  });
};

exports.getAttendanceBySubject = async (req, res) => {
  const { userId, subjectId } = req.body;

  let studentData = await StudentUser.findOne({
    where: {
      parent_id: userId,
    },
  });
  const batch = studentData.batch;
  let totalClasses = await Classes.findAll({
    where: {
      target_batch: batch,
      subjectId: subjectId,
    },
  });

  const getAttendance = await Attendance.findAll({
    where: {
      userId: userId,
      subject_id: subjectId,
    },
  });

  const attendanceObj = convertToObject(getAttendance, "classId");

  // console.log(attendanceObj);
  for (let i = 0; i < totalClasses.length; i++) {
    if (attendanceObj[totalClasses[i].id] !== undefined) {
      totalClasses[i]["present"] = true;
    } else {
      totalClasses[i]["present"] = false;
    }
  }
  res.send({
    data: {
      total_number_of_classes: totalClasses.length,
      attended: Object.keys(attendanceObj).length,
      present_percent:
        (Object.keys(attendanceObj).length / totalClasses.length) * 100 || 0,
      total_classes: totalClasses,
    },
    message: "Attendance found",
    success: true,
  });
};
