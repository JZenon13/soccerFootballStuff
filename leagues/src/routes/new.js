const express = require("express");
const League = require("../models/league");

const router = express.Router();

router.post(
  "/",
  [],

  async (req, res) => {
    const league = new League(req.body);

    res.status(201).send(league);
  }
);

module.exports = router;
