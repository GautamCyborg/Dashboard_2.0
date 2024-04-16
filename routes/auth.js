const express = require("express");
const router = express.Router();
const authController = require("../service/auth");

router.post("/login", async (req, res) => {
  await authController.Login(req, res);
});

router.post("/validate", async (req, res) => {
  await authController.validateToken(req,res);
});

module.exports = router;
