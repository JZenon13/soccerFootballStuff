const { body } = require("express-validator");
const express = require("express");
const Player = require("../models/player");

const router = express.Router();

router.patch("/:id", [], async (req, res) => {
  const player = await Player.findById(req.params.id);

  res.send(player);
});

module.exports = router;
