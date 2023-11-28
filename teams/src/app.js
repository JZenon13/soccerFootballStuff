const express = require("express");
require("express-async-errors");
const bodyParser = require("body-parser");

const cors = require("cors");
const newTeamRouter = require("./routes/new");
const showAllTeamRouter = require("./routes/showAll");
const showOneTeamRouter = require("../src/routes/showOne");
const updateTeamRouter = require("../src/routes/update");
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

app.use(newTeamRouter);
app.use(showAllTeamRouter);
app.use(showOneTeamRouter);
app.use(updateTeamRouter);

app.all("*", async (req, res) => {
  throw new Error();
});

module.exports = app;
