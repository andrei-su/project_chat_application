const express = require("express");
const router = express.Router();

router.get("/server", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = router;