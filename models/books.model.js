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
    "SF": 1,
    "Satire": 2,
    "Drama": 3,
    "Action": 4,
    "Romance": 5,
    "Mystery": 6,
    "Horror": 7
})