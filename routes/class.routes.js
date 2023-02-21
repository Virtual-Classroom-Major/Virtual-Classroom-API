const express = require("express");
const router = express.Router();
const {
  createClass,
  findClassByFacultyId,
  findClassByBatch,
  deleteClass,
} = require("../controllers/class.controller");

router.get("/by-faculty-id/:id", findClassByFacultyId);
router.get("/by-batch", findClassByBatch);
router.post("/", createClass);
router.delete("/:id", deleteClass);

module.exports = router;
