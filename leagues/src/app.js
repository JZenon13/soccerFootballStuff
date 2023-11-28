const express = require("express");
require("express-async-errors");
const bodyParser = require("body-parser");

const cors = require("cors");
const newLeagueRouter = require("./routes/new");
const showAllLeagueRouter = require("./routes/showAll");
const showOneLeagueRouter = require("../src/routes/showOne");
const updateLeagueRouter = require("../src/routes/update");
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

app.use(newLeagueRouter);
app.use(showAllLeagueRouter);
app.use(showOneLeagueRouter);
app.use(updateLeagueRouter);

app.all("*", async (req, res) => {
  throw new Error();
});

module.exports = app;
