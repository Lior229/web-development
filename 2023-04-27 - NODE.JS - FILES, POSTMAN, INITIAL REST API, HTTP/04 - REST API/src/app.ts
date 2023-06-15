import express ,{NextFunction,Request,Response} from 'express';
import kittens from './data';
// Creating a server 
const server = express();

// Tell express to take the JSON resides inside the request body and attached it to the body object
 server.use(express.json())

// Listen to GET, http://localhost:3001/api/kittens

server.get('/api/kittens',(request:Request,response:Response,next:NextFunction) => {
    response.json(kittens)
});

//listen to GET, http://localhost:3001/api/kittens/{id}



server.get('/api/kittens/:id',(request:Request,response:Response) => {
    const id = +request.params.id;
    const kitten = kittens.find((k) => k.id === id);
  

    response.json(kitten);
   
});

//Listen to POST, http://localhost:3001/api/kittens

server.post('/api/kittens',(request:Request,response:Response) => {
    const kitten = request.body;
    kitten.id = kittens[kittens.length - 1].id + 1
     kittens.push(kitten);

     response.json(kitten);


})



// running the server on a port
server.listen(3001,() => {
    console.log('listening on localhost:3001')
})