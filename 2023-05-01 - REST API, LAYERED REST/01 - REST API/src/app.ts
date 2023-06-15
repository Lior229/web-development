import express from 'express';
import booksController from './controllers/books-controller';

const server = express();

// Tell express to take the json resides in requests body and attache it to the body object
server.use(express.json());


server.use('/api',booksController)
// server.use('/api/employees',employeesController)



// running the server on a port
server.listen(3001,() => {
    console.log('listening on localhost:3001')
})