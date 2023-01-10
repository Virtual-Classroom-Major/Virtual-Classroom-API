const express = require("express");
const router = express.Router();
const {
  createClass,
  findClassByFacultyId,
  findClassByBatch,
  deleteClass,
} = require("../controllers/class.controller");

router.get("/by-faculty-id", findClassByFacultyId);
router.get("/by-batch", findClassByBatch);
router.post("/", createClass);
router.delete("/:id", deleteClass);
// router.post("/update-profile", updateProfile);

module.exports = router;

//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
