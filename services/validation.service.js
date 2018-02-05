exports.isValidBook = function(book) {
    return book && book.title && book.description && book.ISBN &&
        book.author && book.publicationDate && book.genre && book.price && validateGenre(book.genre) && typeof book.price == 'number'
    // validate ISBN
    // validate publicationDate is a date    
    
}

function validateGenre(genre) {
    let genreLowerCase = genre.toString().toLowerCase()
    // console.log('genreLowerCase', genreLowerCase, genteType[genreLowerCase]);
    return genteType[genreLowerCase];
}

let genteType = {
    science: 1,
    fiction: 2,
    satire: 3,
    drama: 4,
    action: 5,
    romance: 6,
    mystery: 7,
    horror: 8
}