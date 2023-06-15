import express from 'express';
import dotenv from 'dotenv';
import productsController from './6-controllers/products-controller';
import routeNotFound from './3-middleware/route-not-found';
import catchAll from './3-middleware/catch-all';

dotenv.config();


const server = express();

server.use(express.json()) // create request.body object if exists (append json to body)

server.use('/api', productsController)
server.use('*', routeNotFound);
server.use(catchAll);


server.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`)
});