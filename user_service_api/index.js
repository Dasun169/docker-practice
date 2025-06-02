const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello, World!",
    name: "Express.js Example",
    version: "1.0.0",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
