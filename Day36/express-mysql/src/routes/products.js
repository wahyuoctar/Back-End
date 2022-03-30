const express = require("express")
const router = express.Router()
const {productControllers} = require("../controllers")

router.get("/", productControllers.getAllProducts)
router.post("/", productControllers.createNewProduct)
router.patch("/:id", productControllers.editProductById)
router.delete("/:id", productControllers.deleteProductById)

module.exports = router