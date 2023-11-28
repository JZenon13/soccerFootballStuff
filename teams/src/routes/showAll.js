const express = require("express");
const Team = require("../models/team");

const router = express.Router();
router.get("/", async (req, res) => {
  const teams = await Team.find({});

  res.send(teams);
});
module.exports = router;
