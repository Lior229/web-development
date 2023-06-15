import express,{Request,Response,NextFunction, json, request} from 'express';
import Capsule from '../4-models/capsule';
import * as capsulesLogic from '../5-logic/capsules-logic';

const router = express.Router(); 

router.get('/capsules',async (request:Request,response:Response) => {
    const capsules = await capsulesLogic.getAllCapsules();
    response.json(capsules);
});

router.get('/capsules/:id',async (request:Request,response:Response) => {
    const id = +request.params.id;
    console.log(id);
    const capsule = await capsulesLogic.getCapsulesById(id);
    response.json(capsule);
});

// server.post('/api/coffees',(request:Request,response:Response) => {
//     const coffee = request.body;
//     coffee.id = coffees.length + 1;
//     console.log(coffee);
    
//     coffees.push(coffee);
//     console.log(coffees);
    
//     response.json(coffee);
// })

router.post('/capsules/',async (request:Request,response:Response) => {
    const capsule = new Capsule(request.body);
    const addedCapsule = await capsulesLogic.addCapsule(capsule);
    response.status(201).json(addedCapsule);
});

export default router;


