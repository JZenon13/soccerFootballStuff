const express = require("express");
const Team = require("../models/team");

const router = express.Router();
router.get("/:id", async (req, res) => {
  const team = await Team.findById(req.params.id);

  res.send(team);
});
module.exports = router;
