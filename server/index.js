const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("colors");
const dotenv = require("dotenv");

// dot.env config
dotenv.config();

// database connection

// rest objects
const app = express();

// middleware
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());

// router import

// routes
app.get("/", (req, res) => {
  res.send("Hello Server");
});

// port
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
  console.log(`Server is listen on PORT ${PORT}`.bgGreen);
});
