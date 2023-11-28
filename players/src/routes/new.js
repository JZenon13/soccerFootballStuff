const express = require("express");
const Player = require("../models/player");

const router = express.Router();

router.post(
  "/",
  [],

  async (req, res) => {
    const player = new Player(req.body);

    res.status(201).send(player);
  }
);

module.exports = router;
