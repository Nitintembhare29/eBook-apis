const express = require("express");
const createError = require("http-errors");
require("dotenv").config();

// imports
const db = require("./db");
const {
  default: globalErrorHandler,
} = require("./middlewares/globalErrorHandler");

// constants
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
  //   const err = createError(404, "This video does not exist!");
  //   throw err;
  res.json("message : Welcome to Ebook apis");
});

// global error handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
