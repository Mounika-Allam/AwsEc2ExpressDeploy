const express = require("express");
const path = require("path");
const pug = require("pug");
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/home", (req, res) => {
  const subjects = ["DEVOPS", "CC", "SPM", "CD", "CNS"];
  res.render("sample.pug", { sub: subjects });
});
app.listen(3000, () => {
  console.log("SERVER running");
});