const express = require("express");
const router = express.Router();

const { getAllSubjects } = require("../controllers/subject.controller");
router.get("/all-subjects", getAllSubjects);

module.exports = router;
