// export class Book {
//     title: String;
//     description: String;
//     ISBN: number;
//     author: String;
//     publication: Date;
//     genre;
//     price: number;
// }
export class Book {
    title;
    description;
    ISBN;
    author;
    publication;
    genre;
    price;
}

// var GENTE_TYPE = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})

let GENTE_TYPE = Object.freeze({
    "Science": 1,
    "Fiction": 2,
    "Satire": 3,
    "Drama": 4,
    "Action": 5,
    "Romance": 6,
    "Mystery": 7,
    "Horror": 8
})