const express = require("express")
const app = express();
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  console.log("Request Masuk");
  next()
})

const PORT = process.env.PORT

const { employeeRoutes, authRoutes, postRoutes, userRoutes } = require("./routes");

app.use("/employees", employeeRoutes)
app.use("/auth", authRoutes)
app.use("/posts", postRoutes)
app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log("Listening in port", PORT)
})