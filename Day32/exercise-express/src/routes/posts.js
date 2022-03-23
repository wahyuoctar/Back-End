const express = require("express")
const { postControllers } = require("../controllers")
const router = express.Router()

router.get("/", postControllers.getAllPosts)
router.get("/:postId", postControllers.getPostById)

module.exports = router