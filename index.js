const express = require("express");
const server = express();

server.get("/dog/:name/cottage/:home", (req, res) => {
  console.log(req.params);
  const name = req.params.name;
  const home = req.params.home;
  res.send(`Dog named ${name} barks and lives in ${home}`);
});

server.get("/cat", (req, res) => {
  console.log(req.params);
  res.send({
    name: "swayamsiddha",
    title: "das",
  });
});

server.get("*", (req, res) => {
  res.send("don't know");
});

server.listen(5000, (err) => {
  if (err) {
    console.log("error");
  }
  console.log("Server running at port 5000");
});

// HTTP methods
// GET
// POST

// PUT
// PATCH

// DELETE
