const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const { sequelize } = require("./lib/sequelize")
const { bookRoutes } = require("./routes")
sequelize.sync({ alter: true})

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

app.use("/books", bookRoutes)


app.listen(PORT, () => {
    console.log("Listening in PORT: ", PORT);
})