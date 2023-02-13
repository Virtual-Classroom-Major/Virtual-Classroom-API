const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  uri: process.env.POSTGRESS_URI,
};
