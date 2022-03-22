const express = require("express")
const app = express()

const users = [
    {
        id: 1,
        username: "seto",
        email: "seto@mail.com"
    },
    {
        id: 2,
        username: "mark",
        email: "mark@mail.com"
    },
    {
        id: 3,
        username: "bill",
        email: "bill@mail.com"
    },
    {
        id: 4,
        username: "steve",
        email: "steve@mail.com"
    }
]

const employee = [
    {
        id: 1,
        full_name: "Naruto Uzumaki",
    }
]

const PORT = 2000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my Express API</h1>")
})

app.get("/users", (req, res) => {
    if (users.length){
        res.status(200).json({
            message: "Users Fetch Successfully",
            result: users
        })
    }
    else {
        res.status(404).send("No user Found")
    }
})

app.post("/users", (req, res) => {
    const data = req.body

    if (!data.username) {
        res.status(400).json({
            message: "User data is Required"
        })
        return
    }

    users.push(data)

    res.status(201).json({
        message: "Added user",
        result: data
    })
})

app.delete("/users/:id", (req, res) => {
    const userId = req.params.id

    const findIndex = users.findIndex((val) => {
        return val.id == userId
    })

    if (findIndex == -1){
        res.status(400).json ({
            message: `User with ID ${userId}, not found`
        })
        return
    }

    users.splice(findIndex, 1)

    res.status(200).json({
        message: `User deleted`
    })
})

app.get("/products", (req, res) => {
    res.send("Fetch Products")
})

app.listen(PORT, () => {
    console.log("Server Running in Port", PORT);
})
