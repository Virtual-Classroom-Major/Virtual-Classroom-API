const express = require("express");
const router = express.Router();
const {
  createClass,
  findClassByFacultyId,
  findClassByBatch,
  deleteClass,
  getClass,
} = require("../controllers/class.controller");

router.get("/by-faculty-id/:id", findClassByFacultyId);
router.get("/by-batch", findClassByBatch);
router.get("/:id", getClass);
router.post("/", createClass);
router.delete("/:id", deleteClass);

module.exports = router;
