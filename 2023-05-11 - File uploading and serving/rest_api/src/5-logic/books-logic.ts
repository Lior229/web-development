import * as dal from '../2-utils/dal';
import fs from 'fs';
import { v4 as uuid } from 'uuid';
import Book from '../4-models/Book';
import { ResourceNotFoundError, ValidationError } from '../4-models/Error';
import { saveNewImageToImages } from '../2-utils/books-utils';


//Get all books

export const getAllBooks = async (): Promise<Book[]> => {
    // get all books from JSON file
    return await dal.getAllBooks();
}

// Get one book
export const getBookById = async (id: number): Promise<Book> => {
    // get the books from the json file
    const books = await dal.getAllBooks();

    // find the desired book
    const book = books.find((b) => b.id === id);

    if (!book) throw new ResourceNotFoundError(id);

    return book;

}

// Add new book
export const addBook = async (book: Book): Promise<Book> => {

    //validation

    const error = book.validate();
    console.log('error add book', error);
    if (error) throw new ValidationError(error);

    // get the books from the json file
    const books = await dal.getAllBooks();

    //generate new id
    book.id = books.length === 0 ? 1 : books[books.length - 1].id + 1;

    //Save image to disk if exists

    if (book.image) {
        // get file extension 
        await saveNewImageToImages(book);
        delete book.image;
    }

    // push the book into book array
    books.push(book);

    //write the array to the json file
    await dal.saveAllBooks(books);

    // return added book
    return book;

}

// update existing book

export const updateBook = async (book: Book): Promise<Book> => {


    //validation

    const error = book.validate();
    console.log('error updating a book', error);
    if (error) throw new ValidationError(error);

    // get the books from the json file
    const books = await dal.getAllBooks();

    // find the index of the book
    const index = books.findIndex((b) => b.id === book.id);



    if (book.image) {
        const currentImage = books[index].imageName;

        if (fs.existsSync(`./src/1-assets/images/${currentImage}`)) {

            // delete the image
            fs.unlinkSync(`./src/1-assets/images/${currentImage}`);
        }

        //save the new image
        await saveNewImageToImages(book);
        delete book.image;
    }



    // update the book
    books[index] = book;

    // save books
    await dal.saveAllBooks(books);

    // return updated book
    return book;
}

// update partial book
export const updatePartialBook = async (book: Partial<Book>, id: number) => {
    // get the books from the json file
    const books = await dal.getAllBooks();

    // find the index of the book
    const index = books.findIndex((b) => b.id === id);

    const prevBook = books[index];

    // update the book
    // books[index] = {
    //     ...prevBook,
    //     ...book
    // }

    // save books
    await dal.saveAllBooks(books);

    return true;
}




// delete the book
export const deleteBook = async (id: number): Promise<void> => {
    // get the books from the json file
    const books = await dal.getAllBooks();

    // find the index of the book
    const index = books.findIndex((b) => b.id === id);

    // delete the book
    books.splice(index, 1);

    await dal.saveAllBooks(books);
}