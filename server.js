const fs = require("fs");
// const http = require('http');
// const url = require('url');
const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("server get request");
  html = fs.readFileSync("./index.html");
  res.send(`${html}`);
});

// Include paths for submodules/projects below
app.get("/recipething", (req, res) => {
  console.log("Retrieving recipething");
  html = fs.readFileSync("./recipething/index.html");
});

app.listen(port, () => console.log(`DEMO SERVER listening on port ${port}!`));
