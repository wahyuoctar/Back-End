const { posts } = require("../database");

const postControllers = {
    getAllPosts: (req, res) => {
        if(!posts.length){
            res.status(404).json({
                message: "Fetching Posts is Fail"
            })
            return
        }

        res.status(200).json({
            message: "Fetching Posts is Done",
            result: posts
        })
    },

    getPostById: (req, res) => {
        const postId = req.params.postId

        const findIndex = posts.findIndex((val) => {
            return val.id == postId
        })

        if (findIndex == -1){
            res.status(404).json({
                message: "Post not Found!"
            })
            return
        }

        res.status(200).json({
            message: `PostId ${postId} Found!`,
            result: posts[findIndex]
        })
    }

}

module.exports = postControllers