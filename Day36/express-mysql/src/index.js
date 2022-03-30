const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const {productRoutes, titanicRoutes} = require("./routes")

// Untuk baca file .env
dotenv.config()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Welcome to jcwd2002 ecommerce API</h1>")
})


app.use("/products", productRoutes)
app.use("/titanic", titanicRoutes)

app.listen(PORT, () => {
    console.log("Listening in PORT: ", PORT);
})