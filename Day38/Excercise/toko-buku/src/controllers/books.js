const {Book, Genre, Tag} = require("../lib/sequelize")

const bookControllers = {
    getAllBooks: async (req, res) => {
        try {
            const findBook = await Book.findAll({
                attributes: { exclude: ['createdAt', `updatedAt`] },
                include: [
            {
                model: Genre,
                // attributes: { exclude: [`Tag`]}
                attributes: { exclude: ['createdAt', `updatedAt`] }
        }]
          })  

            res.status(200).json({
                message: "Books Data Found!",
                result: findBook
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    createNewBook: async (req, res) => {
        try {
            const {book_name, stock = 10} = req.body
            const uploadFileDomain = process.env.UPLOAD_FILE_DOMAIN
            const filePath = "bookcover"
            const {filename} = req.file

            const newPost = await Book.create({
                bookcover_url: `${uploadFileDomain}/${filePath}/${filename}`,
                book_name,
                stock
            })

            res.status(201).json({
                message: "Book Added",
                result: newPost
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    editBook: async (req, res) => {
        try {
            const {bookId} = req.params
            
            const editedBook = await Book.update(
                {
                   ...req.body
                },
               {
                   where: {
                       id: bookId
                   }
               }
               )

               res.status(201).json({
                   message: "Book Update",
                   result: editedBook
               })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    deleteBook: async (req, res) => {
        try {
            const {bookId} = req.params

            await Book.destroy({
                where: {
                    id: bookId
                }
            })

            res.status(201).json({
                message: `Book with ID: ${bookId} DELETED`
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    getAllGenres: async (req, res) => {
        try {
            const getGenres = await Genre.findAll({})

            res.status(200).json({
                message: "Genres Data Found!",
                result: getGenres
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    createNewGenre: async (req, res) => {
        try {
            const {genre_name} = req.body
            const newGenre = await Genre.create({
                genre_name
            })

            res.status(201).json({
                message: "New Genre Added",
                result: newGenre
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    deleteGenre: async (req, res) => {
        try {
            const {genreId} = req.params

            await Genre.destroy({
                where: {
                    id: genreId
                }
            })

            res.status(201).json({
                message: `Genre with ID: ${genreId} DELETED`
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    addBookGenre: async (req, res) => {
        try {
            const {bookId, genreId} = req.params
    
            const findBook = await Tag.findOne({
                where: {
                    BookId: bookId,
                    GenreId: genreId
                }
            })
    
            if (findBook) {
                return res.status(401).json({
                    message: "Book Already Added to This Genre"
                })
            }
    
            const bookGenre = await Tag.create({
                BookId: bookId,
                GenreId: genreId
            })
    
            res.status(201).json({
                message: `Genre Added to Book ID: ${bookId}`,
                result: bookGenre
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },

    deleteBookGenre: async (req, res) => {
        try {
            const {bookId, genreId} = req.params
    
            const findBook = await Tag.findOne({
                where: {
                    BookId: bookId,
                    GenreId: genreId
                }
            })
    
            if (!findBook) {
                return res.status(401).json({
                    message: "Can't Find The Book with This Genre"
                })
            }

            const bookGenre = await Tag.destroy({
                where : {
                    BookId: bookId,
                    GenreId: genreId
                }
            })
    
            res.status(201).json({
                message: `Genre Deleted to Book ID: ${bookId}`,
                result: bookGenre
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error"
            })
        }
    },
}

module.exports = bookControllers