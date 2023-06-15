import { NextFunction, Request, Response } from 'express';



const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {

    console.log('Trying to delete a book')


    // Transfer the flow chain to the next middleware or the controller (router)
    next();
}


export default deleteMessage;

