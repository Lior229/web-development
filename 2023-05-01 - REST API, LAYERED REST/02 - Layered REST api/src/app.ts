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
// Listen to PUT http://localhost:3001/api/kittens/:id
server.put('/api/kittens/:id',(request:Request,response:Response) => {
    const id = +request.params.id;
    request.body.id = id;
    const kitten = request.body;
    const index = kittens.findIndex((k) => k.id === id );
    const prevKitten =  kittens[index];
    kittens[index] = {
        ...prevKitten,
        ...kitten
    }
    response.json(kittens[index]);
});

// Listen to DELETE http://localhost:3001/api/kittens/:id

server.delete('/api/kittens/:id',(request:Request,response:Response) => {
    const id = +request.params.id;
    const index = kittens.findIndex((k) => k.id === id );
    kittens.splice(index,1);


    // response.status(204).send();
    response.sendStatus(204);

});


// running the server on a port
server.listen(3001,() => {
    console.log('listening on localhost:3001')
})