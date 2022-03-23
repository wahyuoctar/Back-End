const express = require("express");
const { authControllers } = require("../controllers");
const router = express.Router();

router.post("/", authControllers.registerUser)
router.get("/", authControllers.loginUser)

module.exports = router;