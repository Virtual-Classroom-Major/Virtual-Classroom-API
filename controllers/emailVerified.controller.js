const db = require("../models");
const EmailVerified = db.emailVerified;
const User = db.user;

exports.verifyEmail = async (req, res) => {
  const { token } = req.body;
  const foundToken = await EmailVerified.findOne({
    where: {
      token: token,
    },
  });
  if (!foundToken) {
    res.status(200).send({
      message: "Invalid Link",
    });
    return;
  }

  if (foundToken.isUsed) {
    res.status(200).send({
      message: "Link already used",
    });
    return;
  }

  await User.update(
    {
      emailVerified: true,
    },
    {
      where: {
        id: foundToken.userId,
      },
    }
  );
  const verifiedUser = await User.findOne({ where: { id: foundToken.userId } });

  res.status(200).send({
    data: verifiedUser,
    message: "User Email Verified",
  });
};
