import express,{Request,Response,NextFunction, json} from 'express';
import Book from '../4-models/Book';
import * as booksLogic from '../5-logic/books-logic';

const router = express.Router(); // with capital R

//http://localhost:3001/api

// GET http://localhost:3001/api/books
router.get('/books',async (request:Request,response:Response) => {
    
    const books = await booksLogic.getAllBooks();
    response.json(books);
});

// GET http://localhost:3001/api/books/:id
router.get('/books/:id',async (request:Request,response:Response) => {
    const id = +request.params.id;
    const book = await booksLogic.getBookById(id);

    response.json(book);
});


// POST http://localhost:3001/api/books/
router.post('/books/',async (request:Request,response:Response) => {
    const book = new Book(request.body);
    const addedBook = await booksLogic.addBook(book);
    response.status(201).json(addedBook);
});

// PUT http://localhost:3001/api/books/:id
router.put('/books/:id',async (request:Request,response:Response) => {
    const id = +request.params.id;
    request.body.id = id;
    const book = new Book(request.body);
    const updatedBook = await booksLogic.updateBook(book);
    response.json(updatedBook);
});


// DELETE http://localhost:3001/api/books/:id
router.delete('/books/:id',async (request:Request,response:Response) => {
    
    const id = +request.params.id;
    await booksLogic.deleteBook(id);
    response.sendStatus(204);
});




// PUT http://localhost:3001/api/books/:id
router.patch('/books/:id',async (request:Request,response:Response) => {
    const id = +request.params.id;
    const book:Partial<Book> =request.body;

    await booksLogic.updatePartialBook(book,id);
   
    response.sendStatus(204);
});




export default router;