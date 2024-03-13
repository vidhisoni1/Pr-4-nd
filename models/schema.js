const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    booktype: String,
    author: String,
    pyear: String,
    stock: Number,
    price: Number
})

module.exports = mongoose.model('books', bookSchema)