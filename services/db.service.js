var config = {
    databaseURL: "https://my-bookstore-df59e.firebaseio.com/"
  };
var firebase = require('firebase').initializeApp(config);
var database = firebase.database();
// get ref to the DB
let ref = firebase.database().ref().child('books_store');

// get ref to the logs and books collections
let logRef = ref.child('logs');
let booksRef = ref.child('books');

exports.addNewBook = function(book, res) {
    // push new book into books collection
    let bookRef = booksRef.push(book);
    // bookRef.key - is the book push key
    // getBookById(bookRef.key, function(book){
    //     console.log('***book***', book)
    // });
    let action = {actionType: "Add New book", date: Date.now()}
    logRef.child(bookRef.key).set(action)
    let dbBook = {};
    dbBook[bookRef.key] = book;
    res(dbBook);
}

exports.removeBookById = function(id, res){
    getBookById(id, function(isDeleted){
        if(isDeleted) {
            let book = booksRef.child(id).set(null);
            let action = {actionType: "Remove book", date: Date.now(), bookId: id}
            logRef.push(action);
            res(true);
        } else {
            res(false);
        }
    });
    // if(true) {
}
exports.getAllBooks = function(res) {
    booksRef.once("value", function(snapshot) {
        res(snapshot.val());
    }, function (errorObject) {
        console.log("Gel all books failed: " + errorObject.code);
    });
}
function getBookById(id, res){
    let book = booksRef.child(id).once('value', function(snapshot){
        if (snapshot.exists()) {
            // book exists in DB
            res(snapshot.val());
        } else {
            res(null);
        }
    });
    
}
exports.updateBookById = function(id){
    let book = booksRef.child(id).set(null);
}

    // // Sync
    // bookRef.orderByKey().limitToLast(1).on('child_added', function(snap) {
    //     console.log('child_added', snap.val());
    // });
    // bookRef.on('child_removed', function(snap) {
    //     console.log('child_removed', snap.val());
    // });
    // bookRef.on('child_changed', function(snap) {
    //     console.log('child_changed', snap.val());
    // });
    // bookRef.on('value', function(snap) {
    //     console.log('value', snap.val());
    // });