const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static("client"));

app.use(express.json({ limit: "1mb" }));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
