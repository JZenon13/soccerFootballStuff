const express = require("express");
const Team = require("../models/team");

const router = express.Router();

router.post(
  "/",
  [],

  async (req, res) => {
    const team = new Team(req.body);

    res.status(201).send(team);
  }
);

module.exports = router;
