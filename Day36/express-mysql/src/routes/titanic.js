const { titanicQueryDB } = require("../database")

const router = require("express").Router()

router.get("/", async (req, res) => {
    try {
        const { page = 1, maxItemPerPage = 10 } = req.query

        const sqlQuery = `SELECT * FROM passengers LIMIT ${maxItemPerPage} OFFSET ${(page - 1) * maxItemPerPage};`

        const dbResult = await titanicQueryDB(sqlQuery)

        res.status(200).json({
            message: "Get Passengers",
            result: dbResult
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        })
    }
})

module.exports = router