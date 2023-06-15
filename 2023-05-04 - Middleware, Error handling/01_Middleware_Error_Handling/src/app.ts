import express, { Request, Response, NextFunction, json } from 'express';
import booksController from './controllers/books-controller';
import sabbathForbidden from './3-middleware/sabbath-forbidden';
import deleteMessage from './3-middleware/delete-message';
import routeNotFound from './3-middleware/route-not-found';
import catchAll from './3-middleware/catch-all';


// Create express server
const server = express();

//SabbathForbidden middleware
server.use(sabbathForbidden);

// Tell express to take the json resides in requests body and attache it to the body object
server.use(express.json());

server.use('/api', booksController)
// server.use('/api/employees',employeesController)

server.use('*', routeNotFound)

// catch all middleware
server.use(catchAll);


// running the server on a port
server.listen(3001, () => {
    console.log('listening on localhost:3001')
})


