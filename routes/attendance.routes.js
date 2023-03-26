const express = require("express");
const router = express.Router();
const {
  fetchAttendanceByClassId,
  fetchAttendanceByStudentId,
  markAttendance,
} = require("../controllers/attendance.controller");

router.post("/mark/:classId/:studentId", markAttendance);
router.get("/by-class-id/:classId", fetchAttendanceByClassId);
router.get("/by-student-id/:studentId", fetchAttendanceByStudentId);

module.exports = router;
