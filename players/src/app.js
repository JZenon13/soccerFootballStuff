const express = require("express");
require("express-async-errors");
const bodyParser = require("body-parser");

const cors = require("cors");
const newPlayerRouter = require("./routes/new");
const showAllPlayerRouter = require("./routes/showAll");
const showOnePlayerRouter = require("../src/routes/showOne");
const updatePlayerRouter = require("../src/routes/update");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    exposedHeaders: ["Access-Token", "Refresh-Token"],
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.set("trust proxy", true);
app.use(bodyParser.json());

app.use(newPlayerRouter);
app.use(showAllPlayerRouter);
app.use(showOnePlayerRouter);
app.use(updatePlayerRouter);

app.all("*", async (req, res) => {
  throw new Error();
});

module.exports = app;
