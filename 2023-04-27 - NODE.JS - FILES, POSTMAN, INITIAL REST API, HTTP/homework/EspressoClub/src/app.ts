import express ,{NextFunction,request,Request,Response} from 'express';
import capsulesController from '../src/controllers/capsules-controller';

const server = express();
server.use(express.json());

// server.use(controller)
server.use('/api',capsulesController)


server.listen(3001,()=>{
    console.log("listing in 3001");
})
