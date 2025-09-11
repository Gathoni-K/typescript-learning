/*
Create an interface book with:
title, author, year published.
-Write a function that takes a Book and logs the information about the book
*/

interface Book {
    title: string,
    author: string,
    yearPublished: number,
}

function printBook(book : Book) {
    //to use an interface, define it in the parameter as you would any type
    return `I am currently reading ${book.title} written by ${book.author}. 
    A really itneresting book published in ${book.yearPublished}`

}

