const express = require("express");
const path = require("path");
const PORT = 5000;
const app = express();

app.use(express.static("client"));

app.use(express.json({ limit: "1mb" }));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.get("/api", (req, res) => {
  res.json({
    "test": 123
  });
});
