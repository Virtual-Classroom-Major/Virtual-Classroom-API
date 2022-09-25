const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/user.controller");

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;

//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
