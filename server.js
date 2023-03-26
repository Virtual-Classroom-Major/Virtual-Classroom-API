const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const ImageKit = require("imagekit");
require("dotenv").config();
// console.log(process.env);
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const user_routes = require("./routes/user.routes");
const class_routes = require("./routes/class.routes");
const subject_routes = require("./routes/subject.routes");
const attendance_routes = require("./routes/attendance.routes");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", user_routes);
app.use("/api/v1/class", class_routes);
app.use("/api/v1/subject", subject_routes);
app.use("/api/v1/attendance", attendance_routes);

app.get("/", (req, res) => {
  res.send("WELCOME TO VIRTUAL CLASSROOM SERVER V1.0");
});

app.get("/image-upload-auth", function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(PORT, (err) => {
  if (!err) console.log(`Server running at PORT ${PORT}`);
});
