const http = require("http")
const url = require("url")

const PORT = 2000

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

http.createServer((req, res) => {
    const httpMethod = req.method

    const parsedUrl = url.parse(req.url, true)
    
    // console.log(parsedUrl);
    // console.log(parsedUrl.query.username);

    if (httpMethod == "GET"){
        res.write(JSON.stringify(users))
        res.end()
    }

    if (httpMethod == "POST"){
        
        req.on("data", (data) => {
            users.push(JSON.parse(data.toString()))
            req.statusCode = 201
            res.end("User added")
        })
    }

    if (httpMethod == "PATCH"){
        req.on("data", (data) => {
            const parsedData = JSON.parse(data.toString())
            const id = parsedUrl.path.split("/")[2]

            const findIndex = users.findIndex((val) => {
                return val.id == id
            })

            if (findIndex == -1) {
                res.statusCode = 404
                res.end("User with ID " + id + ", not found")
                return
            }


            users[findIndex] = {
                ...users[findIndex],
                ...parsedData
            }

            res.end("User Edited")
        })
    }

    if (httpMethod === "DELETE"){
        const id = parsedUrl.path.split("/")[2]

            const findIndex = users.findIndex((val) => {
                return val.id == id
            })

            users.splice(findIndex, 1)
            
            res.end("Users Deleted")
    }
    

}).listen(PORT, () => {
    console.log("server running");
})