const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const user_routes = require("./routes/user.routes");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", user_routes);

app.get("/", (req, res) => {
  res.send("Virtual ClassRomm Server");
});

app.listen(PORT, (err) => {
  if (!err) console.log(`Server running at PORT ${PORT}`);
});
