const { DataTypes } = require("sequelize")

const Book = (sequelize) => {
    return sequelize.define(
        "Book",
        {
            book_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bookcover_url: {
                type: DataTypes.STRING,
                allowNull: false

            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 20
            }
        }
    )
}

module.exports = Book