var express = require('express');
var router = express.Router();
var booksController = require('../controllers/book.controller.js');

// Get all books
router.get('/', booksController.getAllBooks);

// Post new book
router.post('/', booksController.create);

// Get a book by id
router.delete('/:id', booksController.removeBookById);

module.exports = router;
