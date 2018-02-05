var dbService = require('../services/db.service.js');
var validationService = require('../services/validation.service.js');

exports.create = function(req, res) {
    // Create and Save a new Book
    let book = req.body;
    if(validationService.isValidBook(book)) {
        // dbService.addNewBook(book)
        dbService.addNewBook(book, function(bookFromDB){
            res.send({book: bookFromDB});
        })
    } else{
        res.status(400).send({message: "Invalid book"});
    }
};

exports.getAllBooks = function(req, res) {
    let books = dbService.getAllBooks(function(books) {
        res.send(books);
    });
};

exports.removeBookById = function(req, res) {
    let id = req.params.id;
    dbService.removeBookById(id, function(isDeleted){
        if(isDeleted){
            res.send({message: 'Book was deleted successfuly'});
        } else {
            res.status(400).send({message: 'Book not found'});
        }
    });
}

// exports.updateBookById = function(req, res) {
//     let id = req.params.id;
//     dbService.removeBookById(id)
//     res.send({message: 'Book was deleted successfuly'});
// }

// exports.findBookById = function(req, res) {
//     console.log('findBookById');
//     let book = {
//         title: req.params.name,
//         year: '2016'
//     }
//     res.send(book);
      
// };

