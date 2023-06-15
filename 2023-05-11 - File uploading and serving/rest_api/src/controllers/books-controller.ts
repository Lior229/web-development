import express, { Request, Response, NextFunction, json } from 'express';
import Book from '../4-models/Book';
import * as booksLogic from '../5-logic/books-logic';
import deleteMessage from '../3-middleware/delete-message';
import verifyLoggedIn from '../3-middleware/verify-logged-in';
import verifyAdmin from '../3-middleware/verify-admin';
import path from 'path';


const router = express.Router(); // with capital R

//http://localhost:3001/api

// GET http://localhost:3001/api/books
router.get('/books', async (request: Request, response: Response) => {

    const books = await booksLogic.getAllBooks();
    response.json(books);

});

// GET http://localhost:3001/api/books/:id
router.get('/books/:id([0-9]+)', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const book = await booksLogic.getBookById(id);

        response.json(book);

    } catch (err: any) {
        next(err);
    }

});


// POST http://localhost:3001/api/books/
router.post('/books/', verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {

        //Take uploaded file, set it to the body
        request.body.image = request.files?.image;

        const book = new Book(request.body);

        const addedBook = await booksLogic.addBook(book);

        response.status(201).json(addedBook);
    } catch (err) {
        console.log('error in POST book', err);
        next(err);
    }
});

// PUT http://localhost:3001/api/books/:id
router.put('/books/:id([0-9]+)', verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        request.body.id = id;


        //Take uploaded file, set it to the body
        request.body.image = request.files?.image;

        const book = new Book(request.body);
        const updatedBook = await booksLogic.updateBook(book);
        response.json(updatedBook);
    } catch (err) {
        next(err);
    }
});


// DELETE http://localhost:3001/api/books/:id
router.delete('/books/:id([0-9]+)', [verifyLoggedIn, verifyAdmin, deleteMessage], async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        await booksLogic.deleteBook(id);
        response.sendStatus(204);
    } catch (err) {
        next(err);
    }
});




// PUT http://localhost:3001/api/books/:id
router.patch('/books/:id([0-9]+)', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        const book: Partial<Book> = request.body;

        await booksLogic.updatePartialBook(book, id);

        response.sendStatus(204);
    } catch (err) {
        next(err);
    }
});


//GET http://localhost:3001/api/books/images/:imageName

router.get("/books/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const imageName = request.params.imageName;
        const absolutePath = path.join(__dirname, '..', '1-assets', 'images', imageName);
        response.sendFile(absolutePath);

    } catch (err: any) {
        next(err);
    }

})




export default router;


