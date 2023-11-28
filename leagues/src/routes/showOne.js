const express = require("express");
const League = require("../models/league");

const router = express.Router();
router.get("/:id", async (req, res) => {
  const league = await League.findById(req.params.id);

  res.send(league);
});
module.exports = router;
