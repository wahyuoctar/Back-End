const {Sequelize} = require("sequelize")
const mysqlConfig = require("../configs/database")

const sequelize = new Sequelize({
    username: mysqlConfig.MYSQL_USERNAME,
    password: mysqlConfig.MYSQL_PASSWORD,
    database: mysqlConfig.MYSQL_DATABASE,
    port: 3306,
    dialect: "mysql",
    logging: false
})

const Book = require("../models/book")(sequelize)
const Genre = require("../models/genre")(sequelize)
const Tag = require("../models/tag")(sequelize)


Book.belongsToMany(Genre, { through: Tag, uniqueKey: "book_id" })
Genre.belongsToMany(Book, { through: Tag, uniqueKey: "genre_id" })
Book.hasMany(Tag, { foreignKey: "BookId" })
Tag.belongsTo(Book, { foreignKey: "BookId" })
Genre.hasMany(Tag, { foreignKey: "GenreId" })
Tag.belongsTo(Genre, { foreignKey: "GenreId" })


module.exports = {
    sequelize,
    Book,
    Tag,
    Genre
}