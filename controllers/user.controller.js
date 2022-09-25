const db = require("../models");
const User = db.user;
const EmailVerified = db.emailVerified;
const jwt = require("jsonwebtoken");
const { uuid } = require("uuidv4");
const bcrypt = require("bcrypt");
const { randomString } = require("../utils/random_generator");
const { verifyEmail } = require("../utils/VerifyEmail");

exports.signUp = async (req, res) => {
  const { roll_number, first_name, last_name, email, password } = req.body;

  const newUser = await User.create({
    id: uuid(),
    roll_number: roll_number,
    first_name: first_name,
    last_name: last_name,
    email_verified: false,
    email: email,
    password: bcrypt.hashSync(password, 12),
  });

  const token = randomString(7);
  console.log("token : ", token);
  const newEmailVerification = await EmailVerified.create({
    id: uuid(),
    token: token,
    user_id: newUser.id,
    is_used: false,
  });
  verifyEmail(newUser, token);
  res.status(200).send({
    message: "User Created Successfully",
    data: newUser,
  });
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    res.status(200).send({
      success: false,
      message: "Email Not Found",
    });
    return;
  }
  var passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    res.status(200).send({
      success: false,
      message: "Email or Password incorrect",
    });
    return;
  }
  res.status(200).send({
    data: user,
    success: true,
    message: "User Login Successful",
  });
};
