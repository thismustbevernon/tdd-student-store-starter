// YOUR CODE HERE
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { restart } = require("nodemon");
const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

const exchange = require("./routes/store");
const { NotFoundError } = require("./utils/errors");

app.use("/store", exchange);
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((err, req, res, next) => {
  const status = err.status;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
