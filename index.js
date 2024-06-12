const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// imports
const db = require("./db");

// constants
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.json("message : Welcome to Ebook apis");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
