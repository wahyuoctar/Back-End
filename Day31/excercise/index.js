const express = require("express")
const app = express()
const {nanoid} = require("nanoid")

// 1. Employee database
//    a. full_name
//    b. occupation
//    c. gender
//    d. id
// 2. Route untuk get semua employee
// 3. Route untuk get employee by ID
// 4. Route untuk tambah employee
// 5. Route untuk edit employee
// 6. Route untuk delete employee

const employees = [
    {
        id: 1,
        full_name: "Uzumaki Naruto",
        occupation: "Web Developer",
        gender: "Male"
    },
    {
        id: 2,
        full_name: "Ichigo Kurosaki",
        occupation: "Data Scientist",
        gender: "Male"
    },
    {
        id: 3,
        full_name: "Sakura Hinata",
        occupation: "Digital Marketing",
        gender: "Female"
    },
    {
        id: 4,
        full_name: "Nikko Robin",
        occupation: "UI/UX",
        gender: "Female"
    }
]

const PORT = 2000

app.use(express.json())

app.get("/", (req, res) => {
    if (employees.length) {
        res.status(200).json({
            message: "Fetch Employee Database Successfully",
            result: employees
        })
    }
    else {
        res.status(400).send("Data not Found!")
    }
})

app.get("/employees/:id", (req, res) => {
    const employeeId = req.params.id

    const findIndex = employees.findIndex((val) => {
        return val.id == employeeId
    })

    if (findIndex == -1){
        res.status(400).send(`Employee with ID ${employeeId} not Found!`)
        return
    }

    res.status(200).json({
        message: "Fetch Employee Data Successfully",
        result: employees[findIndex]
    })
})

app.post("/employees", (req, res) => {
    const data = req.body

    if(!data.full_name){
        res.status(400).json({
            message: "Employee Fullname Required!"
        })
        return
    }
    else if(!data.occupation){
        res.status(400).json({
            message: "Employee Occupation Required!"
        })
        return
    }
    else if(!data.gender){
        res.status(400).json({
            message: "Employee Gender Required!"
        })
        return
    }

    data.id = nanoid()

    employees.push(data)

    res.status(201).json({
        message: "Employee Added",
        result: data
    })
})

app.delete("/employees/:id", (req, res) => {
    const employeeId = req.params.id

    const findIndex = employees.findIndex((val) => {
        return val.id == employeeId
    })

    if (findIndex == -1){
        res.status(400).json({
            message: `Employee ID ${employeeId} not Found!`
        })
    }

    employees.splice(findIndex, 1)
    res.send(`Employee ID ${employeeId} Deleted`)
})

app.patch("/employees/:id", (req, res) => {
    const data = req.body
    const userId = req.params.id

    const findIndex = employees.findIndex((val) => {
        return val.id == userId
    })

    if (findIndex == -1){
        res.status(400).send(`Employee with ID ${employeeId} not Found!`)
        return
    }

    employees[findIndex] = {
        ...employees[findIndex],
        ...data
    }

})

app.listen(PORT, () => {
    console.log("Server Running in Port", PORT);
})