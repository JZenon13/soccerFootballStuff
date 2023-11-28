const { body } = require("express-validator");
const express = require("express");
const League = require("../models/league");

const router = express.Router();

router.patch("/:id", [], async (req, res) => {
  const league = await League.findById(req.params.id);

  res.send(league);
});

module.exports = router;
