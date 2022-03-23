const express = require("express")
const { userControllers } = require("../controllers")
const router = express.Router()

router.get("/", userControllers.getAllUsers)

module.exports = router