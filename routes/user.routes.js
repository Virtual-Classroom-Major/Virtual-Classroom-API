const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  updateProfileType,
  updateProfileDetails,
  getUser,
  cacheUserData,
  findCachedUserById,
  verifyEmail,
} = require("../controllers/user.controller");

router.get("/cache-data", cacheUserData);
router.get("/cached/:id", findCachedUserById);
router.get("/:id", getUser);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/verify_email/:token", verifyEmail);

router.post("/update-profile-type/:id", updateProfileType);
router.post("/update-profile-details/:id", updateProfileDetails);

module.exports = router;
