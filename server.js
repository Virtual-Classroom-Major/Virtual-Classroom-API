const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const user_routes = require("./routes/user.routes");
const class_routes = require("./routes/class.routes");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", user_routes);
app.use("/api/v1/class", class_routes);

app.get("/", (req, res) => {
  res.send("WELCOME TO VIRTUAL CLASSROOM SERVER V1.0");
});

app.listen(PORT, (err) => {
  if (!err) console.log(`Server running at PORT ${PORT}`);
});
