const { users } = require("../database");

const userControllers = {
    getAllUsers: (req, res) => {
        if(!users.length){
            res.status(404).json({
                message: "Fetching Posts is Fail"
            })
            return
        }

        res.status(200).json({
            message: "Fetching Posts is Done",
            result: users
        })
    }
}

module.exports = userControllers