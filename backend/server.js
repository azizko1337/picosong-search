const express = require("express");
const cors = require("cors");
const corsOptions = require("./corsOptions.js");
const { findByEncoder, findByPhrase } = require("./find.js");
const config = require("./config.js");

const app = express();

app.use("/findByPhrase", cors(corsOptions), async (req, res) => {
  const { phrase } = req.query;
  const songs = await findByPhrase(phrase);
  res.json(songs);
});
app.use("/findByEncoder", cors(corsOptions), async (req, res) => {
  const { encoder } = req.query;
  const songs = await findByEncoder(encoder);
  res.json(songs);
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
