const express = require("express");
const League = require("../models/league");

const router = express.Router();
router.get("/", async (req, res) => {
  const leagues = await League.find({});

  res.send(leagues);
});
module.exports = router;
