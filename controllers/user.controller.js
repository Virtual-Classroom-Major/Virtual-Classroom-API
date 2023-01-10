const db = require("../models");
const User = db.user;
const StudentUser = db.studentUser;
const FacultyUser = db.facultyUser;
const EmailVerified = db.emailVerified;

const jwt = require("jsonwebtoken");
const { uuid } = require("uuidv4");
const bcrypt = require("bcrypt");
const { randomString } = require("../utils/random_generator");
const { verifyEmail } = require("../utils/VerifyEmail");
const { STUDENT, FACULTY } = require("../constants/userType");

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
    success: true,
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
  console.log(user);
  res.status(200).send({
    data: user,
    success: true,
    message: "User Login Successful",
  });
};

exports.getUser = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  if (!user) {
    res.status(200).send({
      success: false,
      message: "User Not Found",
    });
    return;
  }

  let userData;
  if (user.user_type === STUDENT) {
    userData = await StudentUser.findOne({
      where: {
        parent_id: id,
      },
    });
  } else if (user.user_type === FACULTY) {
    userData = await FacultyUser.findOne({
      where: {
        parent_id: id,
      },
    });
  }
  console.log(userData);
  res.status(200).send({
    data: { ...user.dataValues, ...userData.dataValues },
    success: true,
    message: "User Found",
  });
};

exports.updateProfileType = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  const { user_type } = req.body;
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  if (!user) {
    res.status(200).send({
      success: false,
      message: "User Not Found",
    });
    return;
  }
  await User.update({ user_type: user_type }, { where: { id: id } });
  user.user_type = user_type;

  res.status(200).send({
    data: user,
    success: true,
    message: "User Type Updated",
  });
};

exports.updateProfileDetails = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  const { id } = req.params;
  const { user_type, first_name, last_name } = req.body;
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  if (!user) {
    res.status(200).send({
      success: false,
      message: "User Not Found",
    });
    return;
  }

  await User.update(
    { first_name: first_name, last_name: last_name },
    { where: { id: id } }
  );
  if (user_type === STUDENT) {
    const {
      roll_number,
      batch,
      reg_number,
      stream,
      degree_name,
      date_of_birth,
      parent_name,
      location,
    } = req.body;
    await StudentUser.create({
      id: uuid(),
      parent_id: id,
      roll_number: roll_number,
      reg_number: reg_number,
      batch: batch,
      stream: stream,
      degree_name: degree_name,
      date_of_birth: date_of_birth,
      parent_name: parent_name,
      location: location,
    });
  } else if (user_type === FACULTY) {
    const {
      employee_id,
      department,
      experience,
      date_of_joining,
      spouse_name,
      location,
    } = req.body;
    await FacultyUser.create({
      id: uuid(),
      parent_id: id,
      employee_id: employee_id,
      department: department,
      experience: experience,
      date_of_joining: date_of_joining,
      spouse_name: spouse_name,
      location: location,
    });
  }

  res.status(200).send({
    data: user,
    success: true,
    message: "User Details Updated",
  });
};
