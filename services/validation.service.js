exports.isValidBook = function(book) {
    return book && book.title && book.description && book.ISBN &&
        book.author && book.publicationDate && book.genre && book.price && validateGenre(book.genre) && typeof book.price == 'number'
    // validate ISBN
    // validate publicationDate is a date    
    
}

function validateGenre(genre) {
    let genreLowerCase = genre.toString().toLowerCase()
    console.log('genreLowerCase', genreLowerCase, genteType[genreLowerCase]);
    return genteType[genreLowerCase];
}

let genteType = {
    sf: 1,
    satire: 2,
    drama: 3,
    action: 4,
    romance: 5,
    mystery: 6,
    horror: 7
}