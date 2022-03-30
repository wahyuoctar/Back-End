const {db, dbQuery} = require("../database")

const productControllers = {
    getAllProducts: async (req, res) => {
        try {
            let sqlQuery = "SELECT * FROM products;"

            const dbResult = await dbQuery(sqlQuery)

            res.status(200).json({
                        message: "Find All Products",
                        result: dbResult
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    createNewProduct: (req, res) => {
        try {
            const {product_name, price, stock, category, category_id} = req.body

            // Cara Aman agar tidak ditrobos
            let replacementQuery = `INSERT INTO products VALUES(0, ?, ?, ?, ?, ?);`
            // Array nya sesuai urutan VALUES
            let replacements = [product_name, price, category, stock, category_id]
            
            db.query(replacementQuery, replacements, (err, result) => {
                if (err) throw err
                
                res.status(201).json({
                    message: "Product Added",
                    result
                })
            })
            
            // Cara Standar
            let sqlQuery = `INSERT INTO products VALUES(0, "${product_name}", ${price}, "${category}", ${stock});`
            // db.query(sqlQuery, (err, result) => {
            //     if (err) throw err

            //     res.status(201).json({
            //         message: "Product Added",
            //         result
            //     })
            // })

        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    editProductById: (req, res) => {
        try {
            const {product_name, price, stock, category} = req.body
            const productId = req.params.id

            let editQuery = ""
            
            if (product_name) {
                editQuery += `product_name = "${product_name}", `
            }
            if (price) {
                editQuery += `price = ${price}, `
            }
            if (stock) {
                editQuery += `stock = ${stock}, `
            }
            if (category) {
                editQuery += `category = "${category}", `
            }

           editQuery = editQuery.slice(0, -2)
            
            let sqlQuery = `UPDATE products SET ${editQuery} WHERE id = ${productId};`

            console.log(editQuery);
            db.query(sqlQuery, (err, result) => {
                if (err) throw err

                res.status(200).json({
                    message: "Product Edited",
                    result
                })
            })
            
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    deleteProductById: (req, res) => {
        try {
            const productId = req.params.id
            
            let sqlQuery = `DELETE FROM products WHERE id= ?;`
            let replacement = [productId]
            
            db.query(sqlQuery, replacement, (err, result) => {
                if (err) throw err

                res.status(200).json({
                    message: "Product Deleted",
                    result
                })
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },
}

module.exports = productControllers