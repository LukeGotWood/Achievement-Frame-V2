const express = require("express");
const fs = require("fs");

const PORT = 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/achievements", (req, res) => {
  fs.readFile("./server/db.json", (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
