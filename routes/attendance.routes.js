const express = require("express");
const router = express.Router();
const {
  fetchAttendanceByClassId,
  getAttendanceBySubject,
  markAttendance,
} = require("../controllers/attendance.controller");

router.get("/by-class-id/:classId", fetchAttendanceByClassId);
router.post("/for-student", getAttendanceBySubject);
router.post("/mark/:classId/:studentId", markAttendance);

module.exports = router;
