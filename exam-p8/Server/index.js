const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./router");
const cors = require("cors");
const app = express();
const port = 3000;
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());
app.use(express.json());
app.use("/goods", router);
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3005;

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
