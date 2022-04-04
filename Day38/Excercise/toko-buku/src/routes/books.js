const bookControllers = require("../controllers")
const fileUploader = require("../lib/uploader")

const router = require("express").Router()

router.get("/", bookControllers.getAllBooks)
router.post("/", fileUploader({
    destinationFolder: "covers",
    prefix: "COVER",
    fileType: "image"
}).single("bookcover_url"), bookControllers.createNewBook)
router.delete("/:bookId", bookControllers.deleteBook)
router.patch("/:bookId", bookControllers.editBook)

router.get("/genres", bookControllers.getAllGenres)
router.post("/genres", bookControllers.createNewGenre)
router.delete("/genres/:genreId", bookControllers.deleteGenre)

router.post("/:bookId/genres/:genreId", bookControllers.addBookGenre)
router.delete("/:bookId/genres/:genreId", bookControllers.deleteBookGenre)




module.exports = router