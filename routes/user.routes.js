const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  updateProfileType,
} = require("../controllers/user.controller");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/update-profile-type/:id", updateProfileType);
// router.post("/update-profile", updateProfile);

module.exports = router;

//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
