const mongoose = require('mongoose')

const Book = mongoose.model('Book', {
    category: String,
    subcategory: String,
    name: String,
    author: String,
    ID: String
})

module.exports = Book
